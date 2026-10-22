"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  MapPin,
  Heart,
  Bell,
  ShoppingCart,
  UserRound,
  Menu,
  X,
} from "lucide-react";

const categories = [
  ["🎽", "Uniforms"],
  ["📚", "Books"],
  ["✏️", "Stationery"],
  ["🎒", "Bags"],
  ["👟", "Shoes"],
  ["🎀", "Accessories"],
];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      alert(`Searching for: ${search}`);
    }
  }

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-[#203e87] text-sm text-white">
        <div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-2 px-3 py-2 sm:px-5 sm:py-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a href="tel:+918862897001" className="flex items-center gap-1.5">
              <Phone size={15} />
              <span>+91 88628 97001</span>
            </a>

            <span className="hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5">
              <MapPin size={15} />
              <span>Patna</span>
              <button className="underline underline-offset-2">(Change)</button>
            </div>
          </div>

          <button className="text-xs font-medium hover:underline sm:text-sm">
            Become a Seller
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-[1340px] flex-wrap items-center gap-3 border-b border-gray-200 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:flex-nowrap lg:gap-6">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-xl font-extrabold text-orange-500 sm:text-2xl"
        >
          🎒 SchoolKart
        </a>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden min-w-0 max-w-xl flex-1 overflow-hidden rounded-full border border-gray-200 bg-gray-50 md:flex"
        >
          <Search className="my-auto ml-3 shrink-0 text-gray-400" size={20} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for uniforms, books, stationery..."
            className="min-w-0 flex-1 bg-transparent px-3 py-3 outline-none"
          />

          <button
            type="submit"
            className="shrink-0 bg-orange-500 px-5 font-semibold text-white transition hover:bg-orange-600"
          >
            Search
          </button>
        </form>

        {/* Action Buttons */}
        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5 lg:ml-0">
          <button
            aria-label="Wishlist"
            className="flex items-center gap-1.5 transition hover:text-orange-500 sm:gap-2"
          >
            <Heart size={20} />
            <span className="hidden sm:inline">Wishlist</span>
          </button>

          <button
            aria-label="Notifications"
            className="transition hover:text-orange-500"
          >
            <Bell size={20} />
          </button>

          <button
            aria-label="Shopping Cart"
            className="flex items-center gap-1.5 transition hover:text-orange-500 sm:gap-2"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>
          </button>

          <button className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-2.5 py-2 transition hover:bg-blue-600 sm:gap-2 sm:px-3">
            <UserRound className="text-white" size={20} />
            <span className="text-sm font-medium text-white">Login</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-700 hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="flex w-full min-w-0 overflow-hidden rounded-full border border-gray-200 bg-gray-50 md:hidden"
        >
          <Search className="my-auto ml-3 shrink-0 text-gray-400" size={19} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none"
          />

          <button
            type="submit"
            aria-label="Search"
            className="shrink-0 bg-orange-500 px-4 text-white transition hover:bg-orange-600"
          >
            <Search size={19} />
          </button>
        </form>
      </div>

      {/* Categories Navigation */}
      <nav
        className={`border-b border-gray-200 bg-white ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="mx-auto flex max-w-[1340px] flex-col gap-1 px-3 py-3 sm:px-5 md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-3 md:py-4 lg:gap-x-10">
          {categories.map(([icon, name]) => (
            <a
              key={name}
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50 hover:text-blue-600 md:gap-2 md:px-0 md:py-1"
            >
              <span className="text-lg">{icon}</span>
              {name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
