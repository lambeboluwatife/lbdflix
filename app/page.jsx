"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";

const HomePage = () => {
  const [heroData, setHeroData] = useState([]);
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=514318c6f6f673457a51ffcaf8158cf2"
      )
      .then((response) => {
        setHomeData(response.data.results);
        setHeroData(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching data from API", error);
      });
  }, []);

  return (
    <div>
      <Hero heroData={heroData} />
    </div>
  );
};

export default HomePage;
