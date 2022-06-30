import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-light-orange h-16 text-white flex items-center justify-between border-b-4 border-[#C8C8C8]">
      <div className="ml-28  md:ml-48">
        <Link href="/">
          <a className="font-['Montserrat'] text-3xl  font-black tracking-wider">
            ApseeDating
          </a>
        </Link>
      </div>
      <div className="mr-8 flex items-center ">
        <MdNotificationsActive
          style={{ width: "30px", height: "30px", margin: "10px" }}
        />
        <MdOutlineMessage
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
        <CgProfile
          style={{
            width: "30px",
            height: "30px",
            margin: "auto 10px auto 10px",
          }}
        />
        <p>Julie</p>
      </div>
    </header>
  );
}
