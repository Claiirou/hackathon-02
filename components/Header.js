import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-light-orange h-16 text-white flex items-center justify-between">
      <div className="ml-28  md:ml-48">
        <Link href="/">
          <a className="font-['Montserrat'] text-xl font-bold">Apseedating</a>
        </Link>
      </div>
      <div className="mr-8 flex items-center ">
        <MdNotificationsActive
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
        <MdOutlineMessage
          style={{ width: "30px", height: "30px", margin: "5px" }}
        />
        <CgProfile
          style={{
            width: "30px",
            height: "30px",
            margin: "auto 5px auto 15px",
          }}
        />
        <p>Julie</p>
      </div>
    </header>
  );
}
