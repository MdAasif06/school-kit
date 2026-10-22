"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Heart,
  Bell,
  ShoppingCart,
  UserRound,
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

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      alert(`Searching for: ${search}`);
    }
  }

  return (
    <header className="bg-white">
      <div className="bg-[#203e87] text-white text-sm">
        <div className="mx-auto flex max-w-[1340px] flex-wrap justify-between gap-2 px-4 py-3">
          <div className="flex items-center gap-2">
            <Phone size={15} /> +91 88628 97001 <MapPin size={15} /> Patna
            (Change)
          </div>
          <button>Become a Seller</button>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1340px] flex-wrap items-center justify-between gap-6 border-b border-gray-200 px-4 py-4 text-sm font-medium text-slate-700">
        <a href="/" className="text-xl font-extrabold text-orange-500">
          🎒 SchoolKart
        </a>

        <form
          onSubmit={handleSearch}
          className="flex min-w-0 max-w-xl flex-1 overflow-hidden rounded-full border bg-gray-50"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for uniforms, books, stationery..."
            className="min-w-0 flex-1 bg-transparent px-5 py-2 outline-none"
          />

          <button className="shrink-0 bg-orange-500 px-6 font-semibold text-white hover:bg-orange-600">
            Search
          </button>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-5">
          <button className="flex items-center gap-2">
            <Heart size={20} />
            <span>Wishlist</span>
          </button>

          <button aria-label="Notifications">
            <Bell size={20} />
          </button>

          <button className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-500 p-2">
            <UserRound className="text-white" size={20} />
            <span className="text-white">Login</span>
          </button>
        </div>
      </div>

      <nav className="w-full border-b border-gray-200 bg-white">
  <div className="mx-auto flex w-full max-w-[1340px] flex-wrap items-center gap-x-10 gap-y-4 px-4 py-5">
    {categories.map(([icon, name]) => (
      <a
        key={name}
        href="#products"
        className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
      >
        <span>{icon}</span>
        {name}
      </a>
    ))}
  </div>
</nav>
    </header>
  );
}
