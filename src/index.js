import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards"
import "./index.css";
import sdata from "./Sdata"

ReactDOM.render(
  <>
  <h1 className="heading" >List of 5 Netflix Web series of 2020</h1>
    <Card 
     imgsrc={sdata[0].imgsrc}
     title={sdata[0].title}
     sname={sdata[0].sname}
     link={sdata[0].link}
    />
    <Card
      imgsrc={sdata[1].imgsrc}
      title={sdata[1].title}
      sname={sdata[1].sname}
      link={sdata[1].link}
    />
    <Card
      imgsrc={sdata[2].imgsrc}
      title={sdata[2].title}
      sname={sdata[2].sname}
      link={sdata[2].link}
    />
  </>
  ,document.getElementById("root"));