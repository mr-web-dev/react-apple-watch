import React from "react";
import Img from "../img/watch.png";
import Info from "../components/Info";

export default function Home() {
  const data = {
    title: "Freedom calls.",
    text: "Answer a call from your surfboard. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Introducing Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch.",
    link: "Watch the keynote",
    href: "#about",
  };
  return (
    <>
      <div className="hero" id="home">
        <div className="container hero__container">
          <Info classBox={"hero"} title={data.title} text={data.text} link={data.link} href={data.href} />

          <div className="hero__box">
            <img src={Img} alt="Watch" className="hero__img" />
          </div>
        </div>
      </div>
    </>
  );
}
