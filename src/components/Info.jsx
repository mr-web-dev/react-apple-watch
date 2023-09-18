import React from "react";

export default function Info({ classBox, title, text, link }) {
  return (
    <>
      <div className={classBox + "__box"}>
        <h2 className={classBox + "__title titles"}>{title}</h2>
        <p className={classBox + "__text"}>{text}</p>
        <a href="#about" className={classBox + "__btn btn"}>
          {link}
        </a>
      </div>
    </>
  );
}
