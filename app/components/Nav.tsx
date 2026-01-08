"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-linear-to-r from-white to-black relative z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
       <Link href={'/'}> <h1 className="text-l font-extrabold
           bg-linear-to-r from-black to-white
           bg-clip-text text-transparent ">
 Practify
</h1>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/category">Category</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white opacity-40"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full
        transition-all duration-300 overflow-hidden
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-4 px-4 py-4 items-end ">
          <Link href="/category" onClick={() => setOpen(false)}>Category</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      </div>
    </nav>
  );
}
