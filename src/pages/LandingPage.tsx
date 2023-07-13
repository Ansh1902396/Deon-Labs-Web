import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Partner from "../components/Partner";
import Hero from "../components/Hero";
import Section from "../components/Section";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[5438px] overflow-hidden text-center text-77xl text-white font-inter">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#000,_#000)] w-[1920px] h-[1080px]" />
      <div className="absolute top-[669px] left-[348px] rounded-[50%] [background:linear-gradient(180deg,_#524fed,_rgba(210,_92,_252,_0))] [filter:blur(400px)] w-[519px] h-[519px]" />
      <div className="absolute top-[636px] left-[987px] rounded-[50%] [background:linear-gradient(180deg,_#00ff94,_rgba(211,_69,_163,_0))] [filter:blur(400px)] w-[585px] h-[585px]" />
      <div className="absolute top-[3303px] left-[1771px] rounded-[50%] [background:linear-gradient(180deg,_#dadd5a,_rgba(211,_69,_163,_0))] [filter:blur(400px)] w-[585px] h-[585px]" />
      <Hero/>
     <Partner />
      <div className="absolute top-[1510px] left-[0px] w-[1920px] h-[826px] opacity-[0.8]" />
      <Section/>
      <div className="absolute top-[3218px] left-[327px] w-[533px] h-[453px]">
        <div className="absolute top-[0px] left-[0px] rounded-7xl [background:linear-gradient(125.97deg,_#ff306e,_rgba(0,_0,_0,_0))] w-[533px] h-[453px]" />
      </div>
      <div className="absolute top-[2505px] left-[623px] text-[54px] font-semibold">
        Key Points of deon Labs
      </div>
      <div className="absolute top-[2716px] left-[314px] w-[1296px] h-[1959px] text-left text-3xl">
        <Card/>
        <Card2/>
        <div className="absolute top-[1004px] left-[9px] w-[1283px] h-[453px]">
          <div className="absolute top-[0px] left-[0px] rounded-7xl bg-gray-100 w-[1283px] h-[453px]" />
          <div className="absolute top-[0px] left-[750px] w-[533px] h-[453px]">
            <div className="absolute top-[0px] left-[0px] rounded-7xl [background:linear-gradient(125.97deg,_#ff306e,_rgba(0,_0,_0,_0))] box-border w-[533px] h-[453px] border-[20px] border-solid border-white" />
            <img
              className="absolute top-[77px] left-[58px] w-[417px] h-[299px] object-cover"
              alt=""
              src="/3d-11@2x.png"
            />
          </div>
          <Card/>
          <Card2/>
        </div>
        
      </div>
      <div className="absolute top-[5177px] left-[1406.3px] rounded-[50%] [background:linear-gradient(180deg,_#524fed,_rgba(210,_92,_252,_0))] [filter:blur(600px)] w-[519px] h-[519px] [transform:_rotate(0.58deg)] [transform-origin:0_0]" />
      <div className="absolute top-[4869px] left-[486px] w-[949px] h-[374px] text-left text-[24px]">
        <div className="absolute top-[0px] left-[209px] w-[532px] h-[138px]">
          
          <b className="absolute top-[42px] left-[0px] text-21xl flex text-center items-center justify-center w-[532px]">{`You build Web3 product, We will build ecosystem for you!!
 `}</b>
        </div>
        <div className="absolute top-[217px] left-[0px] w-[949px] h-[157px]">
          <div className="absolute top-[0px] left-[0px] rounded-[37px] [background:linear-gradient(-86.41deg,_#423333,_#edb7b7)] w-[949px] h-[157px]" />
          <img
            className="absolute top-[47px] left-[316px] w-[317px] h-16 object-cover"
            alt=""
            src="/group-24-1@2x.png"
          />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default LandingPage;
