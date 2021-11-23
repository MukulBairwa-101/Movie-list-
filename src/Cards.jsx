import React from "react";

function Card( props){
    //console.log(props);
  
    return (
      <>
      <div className="cards">
        <div className="card"> 
            <img src ={props.imgsrc} alt ="img1" className="card_img"/>
            <div className="card_info"> 
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname} </h3>
              <p className="seasons">(Season 1,2,3)</p>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
        </div>
      </div>
      </>
  
    );
  }

  export default Card;