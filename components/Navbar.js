"use client";

import { useState } from "react";
import { Wishlist, Heart, Bell, ShoppingCart, UserRound } from "lucide-react";

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
          <div>☎ +91 88628 97001　⌖ Patna (Change)</div>
          <button>Become a Seller</button>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1340px] flex-wrap items-center gap-4 border-b px-4 py-5">
        <a href="/" className="text-xl font-extrabold text-orange-500">
          🎒 SchoolKart
        </a>

        <form
          onSubmit={handleSearch}
          className="w-full flex flex-1 overflow-hidden rounded-full border bg-gray-50"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for uniforms, books, stationery..."
            className="max-w-md flex-1 bg-transparent px-5 py-2 outline-none"
          />
          <button className="bg-orange-500 px-6 font-semibold text-white hover:bg-orange-600">
            Search
          </button>
        </form>

        <div className="flex items-center gap-5">
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

          <button className="flex items-center gap-2 bg-blue-500 p-2 rounded-xl">
            <div className="flex gap-5">
              <UserRound className="text-white" size={20} />
              <span className="text-white">Login</span>
            </div>
          </button>
        </div>
      </div>

      <nav className="mx-auto flex max-w-[1340px] flex-wrap gap-x-10 gap-y-4 border-b px-4 py-5">
        {categories.map(([icon, name]) => (
          <a
            key={name}
            href="#products"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <span>{icon}</span>
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}
