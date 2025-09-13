import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-32 min-h-screen">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! This is Prince Rothore{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px]  font-Ovo">
        Rathore Classes – Igniting Minds, Shaping Futures
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Rathore Classes is a premier institute committed to quality education
        and personalized guidance. With the motto “Best Be The Best,” we inspire
        students to excel and shape their future with confidence.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <Link href="/contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 w-fit">Contact me  <Image src={assets.right_arrow_white} alt="" className="w-4" /></Link>
        <Link href="/about" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 w-fit">About us  <Image src={assets.right_arrow_white} alt="" className="w-4" /></Link>
      </div>
    </div>
  );
};

export default Header;
