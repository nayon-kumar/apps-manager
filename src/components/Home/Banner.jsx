import { FaGooglePlay } from "react-icons/fa";
import MyContainer from "../Shared/MyContainer";
import play from "@/assets/play.png";
import app from "@/assets/app.png";
import hero from "@/assets/hero.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="pt-40 bg-[#F1F5E8]">
      <MyContainer>
        <div className="text-center">
          <h2 className="text-[#001931] font-bold text-3xl md:text-5xl">
            We Build <br />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text ">
              Productive
            </span>{" "}
            Apps
          </h2>
          <p className="text-[#627382] mt-4">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <div className="font-semibold text-xl text-[#001931] flex items-center justify-center gap-4 flex-wrap mt-10">
            <button className="px-6 py-3 cursor-pointer rounded-sm hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white flex gap-2.5 items-center justify-center border border-[#D2D2D2]">
              <Image src={play} alt="Google play" height={32} width={32} />
              Google Play
            </button>
            <button className="px-6 py-3 cursor-pointer rounded-sm hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white flex gap-2.5 items-center justify-center border border-[#D2D2D2]">
              <Image src={app} alt="App store" height={32} width={32} />
              App Store
            </button>
          </div>
        </div>
        <div className="mt-10">
          <Image className="mx-auto" src={hero} alt="Hero" />
        </div>
      </MyContainer>
    </div>
  );
};

export default Banner;
