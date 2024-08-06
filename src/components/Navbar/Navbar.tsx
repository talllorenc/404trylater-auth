import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between p-4">
        <Link href="/">404trylater-auth</Link>
        <div className="flex items-center gap-4">
          <Link href="/account">Account</Link>
          <Link href="/sign-in">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
