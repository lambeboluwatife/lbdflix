"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "@/redux/slices/usersApiSlice";
import { setCredentials } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [previewImage, setPreviewImage] = useState(null);

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.verifyPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (formData.profilePicture) {
        data.append("profilePicture", formData.profilePicture);
      }

      const res = await register(data).unwrap();
      dispatch(setCredentials({ ...res }));
      router.push("/dashboard");
      toast.success("Signed Up");
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  };

  return (
    <div className="container sign-in">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="verifyPassword">Verify Password</label>
            <input
              type="password"
              id="verifyPassword"
              name="verifyPassword"
              value={formData.verifyPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          {previewImage && (
            <div className="image-preview">
              <img
                src={previewImage}
                alt="Profile Preview"
                className="img-thumbnail"
              />
            </div>
          )}
          <button type="submit">
            {isLoading ? "creating account..." : "Sign Up"}
          </button>
        </form>
        <p>
          Already have an account? <Link href="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
