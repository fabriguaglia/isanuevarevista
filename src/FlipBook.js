import React, { Component } from "react";
import HTMLFlipBook from "react-pageflip";


import Image from "./assets/images/NewsLetter/00.png";
import Image1 from "./assets/images/NewsLetter/01.png";
import Image2 from "./assets/images/NewsLetter/02.png";
import Image3 from "./assets/images/NewsLetter/03.png";
import Image4 from "./assets/images/NewsLetter/04.png";
import Image5 from "./assets/images/NewsLetter/05.png";
import Image6 from "./assets/images/NewsLetter/06.png";
import Image7 from "./assets/images/NewsLetter/07.png";
import Image8 from "./assets/images/NewsLetter/08.png";


export default class FlipBook extends Component {
  render() {
    const transparentLinkStyle = {
      padding: '10px',
      backgroundColor: 'transparent',
      color: 'white',
      borderRadius: '5px',
      border: '1px solid white',
      opacity: '0.5',
      textDecoration: 'none'
    };
    const linkContainerStyle = {
      position: 'absolute',
      bottom: '10px',
      right: '114px'
    };

    return (
      <>
        <HTMLFlipBook width={422} height={601}>
          <div className="">
            <img src={Image} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image1} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image2} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image3} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image4} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image5} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image6} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image7} width="422" height="601" alt="" />
          </div>
          <div className="">
            <img src={Image8} width="422" height="601" alt="" />
          </div>
        </HTMLFlipBook>
      </>
    );
  }
}
