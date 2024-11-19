"use client";
import ReactPlayer from "react-player/lazy";

const Player = ({ url }) => {
  return <ReactPlayer url={url} controls />;
};

export default Player;
