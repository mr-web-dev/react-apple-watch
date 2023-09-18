import React from 'react'
import Img from "../img/band.png"
import DataInfo from '../components/Info'

export default function Info() {
  const data = {
    title: "Nike Sport Band. Light. Flexible. Breathable.",
    text: "Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.",
    link: "Buy now",
    href: "#services",
  };
  return (
    <>
    <div className="info" id="offers">

        <div className="container info__container">
            
            <DataInfo classBox="info" title={data.title} text={data.text} link={data.link} href={data.href} />
            
            <div className="info__img-box">
                <img className="info__img" src={Img} alt="Band"/>
            </div>

        </div>
        
    </div>
    </>
  );
}
