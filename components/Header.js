import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/user/1`)
      .then((res) => setUser(res.data))
      .catch(console.error);
  }, []);

  return (
    <header className="bg-light-orange h-16 w-full text-white flex items-center justify-between border-b-4 border-[#C8C8C8] fixed top-0 left-0">
      <div className="ml-4  md:ml-48">
        <Link href="/">
          <a className="font-['Montserrat'] text-xl md:text-3xl  font-black tracking-wider">
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
        <Link href="/profilecreation">
          <a className="flex items-center">
            <CgProfile
              style={{
                width: "30px",
                height: "30px",
                margin: "auto 10px auto 10px",
              }}
            />
            <p>{user.firstname ? user.firstname : "Mon profil"}</p>
          </a>
        </Link>
      </div>
    </header>
  );
}
