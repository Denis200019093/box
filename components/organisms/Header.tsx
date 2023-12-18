import React from "react";
import Logo from "../atoms/Logo";
import Container from "../atoms/Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Logo />
      <nav>Nav</nav>
      <div className="flex items-center gap-2">
        <Link href={"#"}>
          <button className="secondary-btn hover:primary-hover-effect">
            Register
          </button>
        </Link>
        <Link href={"#"}>
          <button className="primary-btn hover:primary-hover-effect">
            Sign in
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
