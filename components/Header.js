import React from "react";
import Link from "next/link";
// import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className="bg-light-orange h-16 flex align-baseline">
      <div className={styles.titleHeader}>
        <Link href="/">
          <a>Apseedating</a>
        </Link>
      </div>
      <div className={styles.profileContainer}></div>
    </header>
  );
}
