import React from "react";
import Images from "./Images";
function Cards(props) {
    return(
      <>
            <div className="card">
            <Images imgsrc={props.imgsrc}/>
          <div className="cardInfo">
            <span className="cardCategory"> {props.title} </span>
            <h3 className="cardTitle"> {props.sname} </h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
          </div>
      </>
    );
  }

  export default Cards;