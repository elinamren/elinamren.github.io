import { useEffect } from "react";
import elin from "../images/elin.png";
import AreBiz from "./logos/AreBiz";
import Funken from "./logos/Funken";
import HurtigrutenSvalbard from "./logos/Hurtigruten";
import Jelpen from "./logos/Jelpen";
import LetsDeal from "./logos/LetsDeal";
import Mymowo from "./logos/Mymowo";
import NHR from "./logos/Nhr";
import Ostersund from "./logos/Ostersund";
import Riviera from "./logos/Riviera";
import Sparklubben from "./logos/Sparklubben";
import Tulo from "./logos/Tulo";
import Vemdalen from "./logos/Vemdalen";
import WWF from "./logos/Wwf";


const Home = () => {

  return (
    <>
      <div className="hello">
        <div className="hello-img">
          <img src={elin} alt="a portrait of elin in black and white" />
        </div>
        <div className="hello-text">
          <h1>Hi, I’m Elin!</h1>
          <h2>
            I am a creative Frontend Developer
            <br />
            living in Östersund.
          </h2>
        </div>
      </div>
      <div className="companies-wrapper">
        <h3>Companies I have had the opportunity to work with</h3>
        <div className="companies">
          <a href="http</div>s://www.mymowo.com" target="_blank" rel="noopener noreferrer">
            <Mymowo />
          </a>
          <a href="https://ostersund.ai/" target="_blank" rel="noopener noreferrer">
            <Ostersund />
          </a>          
          <a href="https://www.funkenlodge.com/en/" target="_blank" rel="noopener noreferrer">
            <Funken />
          </a>
          <a href="https://letsdeal.se/" target="_blank" rel="noopener noreferrer">
            <LetsDeal />
          </a>
          <a href="https://www.vemdalen.se/" target="_blank" rel="noopener noreferrer">
            <Vemdalen />
          </a>
          <a href="https://nordichotels.com/" target="_blank" rel="noopener noreferrer">
          <NHR />
          </a>
          <a href="https://jelpen.se/" target="_blank" rel="noopener noreferrer">
            <Jelpen />
          </a>
          <a href="https://hurtigrutensvalbard.com/no" target="_blank" rel="noopener noreferrer">
            <HurtigrutenSvalbard />
          </a>          
          <a href="https://hotelriviera.no/" target="_blank" rel="noopener noreferrer">
            <Riviera />
          </a>
          <a href="https://worldoftulo.com/" target="_blank" rel="noopener noreferrer">
            <Tulo />
          </a>
          <a href="https://sparklubben.se/" target="_blank" rel="noopener noreferrer">
            <Sparklubben />
          </a>
          <a href="https://arebusinessforum.se/" target="_blank" rel="noopener noreferrer">
            <AreBiz />
          </a>
          <a href="https://welovecities.org/" target="_blank" rel="noopener noreferrer">
            <WWF />
          </a>          
        </div>
      </div>
    </>
  );
};

export default Home;
