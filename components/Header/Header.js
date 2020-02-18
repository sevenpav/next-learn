import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Index page</a>
        </Link>
        <Link href="/about">
          <a>About page</a>
        </Link>
        <Link href="/quote">
          <a>Quote page</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
