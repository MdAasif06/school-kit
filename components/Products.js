"use client";

import { useState } from "react";
import {
  Heart,
  Star,
  Truck,
  ShieldCheck,
  BadgeCheck,
  Tag,
  ArrowRight,
  MapPin,
  BookOpen,
  Shirt,
  ShoppingBag,
  Pencil,
  PackageCheck,
  ChevronDown,
  Sparkles,
  RotateCcw,
  CreditCard
} from "lucide-react";

const products = [
  {
    name: "Infant Jesus School Unisex Shirt",
    category: "UNIFORMS",
    price: 450,
    school: "Infant Jesus School",
    icon: Shirt,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Infant Jesus School Girls Skirt",
    category: "UNIFORMS",
    price: 600,
    school: "Infant Jesus School",
    icon: Shirt,
    color: "bg-pink-50 text-pink-600",
  },
  {
    name: "Patna School Girls Skirt",
    category: "UNIFORMS",
    price: 500,
    school: "Infant Jesus School",
    icon: Shirt,
    color: "bg-slate-100 text-slate-600",
  },
  {
    name: "Accessories Kit",
    category: "ACCESSORIES",
    price: 700,
    school: "",
    icon: Pencil,
    color: "bg-amber-50 text-amber-600",
  },
  {
    name: "Schoolbag",
    category: "BAGS",
    price: 800,
    school: "",
    icon: ShoppingBag,
    color: "bg-teal-50 text-teal-600",
  },
  {
    name: "Notebook Kit",
    category: "STATIONERY",
    price: 1200,
    school: "",
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-600",
  },
];

const locations = [
  {
    title: "School Shopping Patna",
    desc: "All school supplies",
    icon: ShoppingBag,
  },
  {
    title: "Uniforms in Patna",
    desc: "School uniforms",
    icon: Shirt,
  },
  {
    title: "Stationery Delivery",
    desc: "Same-day delivery",
    icon: Pencil,
  },
  {
    title: "Books Online",
    desc: "NCERT & more",
    icon: BookOpen,
  },
  {
    title: "School Bags",
    desc: "School essentials",
    icon: PackageCheck,
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Quality Products",
    desc: "Quality checks and product authenticity.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Tag,
    title: "Great Prices",
    desc: "Explore products at competitive prices.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Convenient delivery for school essentials.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Sellers",
    desc: "Shop confidently with verified sellers.",
    color: "bg-purple-50 text-purple-600",
  },
];

const faqs = [
  {
    question: "Is Cash on Delivery (COD) available?",
    answer:
      "Cash on Delivery availability depends on the product and delivery location. Check the available payment options during checkout.",
  },
  {
    question: "Which board books do you stock?",
    answer:
      "Browse the books section to explore available textbooks and study materials. Availability may vary by class and board.",
  },
  {
    question: "Can I find uniforms for a specific school?",
    answer:
      "You can browse available school uniforms and check each product listing for school details, sizes and availability.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Delivery time depends on the product, seller and delivery address. Check the estimated delivery information for your order.",
  },
];

export default function Products() {
  const [wishlist, setWishlist] = useState([]);
  const [openFaq, setOpenFaq] = useState(0);

  function toggleWishlist(productName) {
    setWishlist((current) =>
      current.includes(productName)
        ? current.filter((name) => name !== productName)
        : [...current, productName],
    );
  }

  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Popular Products */}
      <section
        id="products"
        className="scroll-mt-6 bg-slate-50 px-3 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-12"
      >
        <div className="mx-auto max-w-[1340px]">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                <Sparkles size={17} />
                SCHOOL ESSENTIALS
              </div>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Popular Products
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                Find everything your child needs for school.
              </p>
            </div>

            <a
              href="#trending"
              className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View Trending
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                isWishlisted={wishlist.includes(product.name)}
                onWishlist={() => toggleWishlist(product.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section
        id="trending"
        className="scroll-mt-6 bg-orange-50/70 px-3 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-12"
      >
        <div className="mx-auto max-w-[1340px]">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Tag size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Trending Products
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Discover school essentials from our collection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
            {products.map((product) => (
              <ProductCard
                key={`trending-${product.name}`}
                product={product}
                isWishlisted={wishlist.includes(product.name)}
                onWishlist={() => toggleWishlist(product.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why SchoolKart */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              The SchoolKart Advantage
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Why Choose <span className="text-blue-600">SchoolKart?</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              A convenient way to shop for everyday school essentials.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, desc, color }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:p-6"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Location */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-[1340px]">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <MapPin size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Shop by Location
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Explore school essentials and categories.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {locations.map(({ title, desc, icon: Icon }) => (
              <a
                key={title}
                href="#products"
                className="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-200 hover:border-blue-300 hover:shadow-md sm:items-start sm:p-5"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-5 text-slate-800">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {desc}
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="mt-1 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Need Help?
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              Quick answers to common shopping questions.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/40"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5">
                      <p className="text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Assurance */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-600 sm:text-sm">
          <span className="flex items-center gap-2">
            <Truck size={18} className="shrink-0 text-emerald-600" />
            Delivery options available
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={18} className="shrink-0 text-blue-600" />
            Verified sellers
          </span>

          <span className="flex items-center gap-2">
            <CreditCard size={18} className="shrink-0 text-purple-600" />
            Secure payment options
          </span>

          <span className="flex items-center gap-2">
            <RotateCcw size={18} className="shrink-0 text-orange-600" />
            Return policy applies
          </span>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product, isWishlisted, onWishlist }) {
  const Icon = product.icon;

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      {/* Product Image Placeholder */}
      <div
        className={`relative flex h-32 items-center justify-center overflow-hidden ${product.color} sm:h-40 lg:h-44`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />

        <div className="relative flex size-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm transition duration-300 group-hover:scale-110 sm:size-20">
          <Icon size={38} strokeWidth={1.5} />
        </div>

        <button
          type="button"
          onClick={onWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          className={`absolute right-2 top-2 flex size-9 items-center justify-center rounded-full shadow-sm transition ${
            isWishlisted
              ? "bg-rose-50 text-rose-600"
              : "bg-white/90 text-slate-500 hover:bg-rose-50 hover:text-rose-600"
          }`}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <span className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-[9px] font-bold tracking-wide text-slate-600 sm:text-[10px]">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {product.school && (
          <span className="mb-2 inline-flex w-fit max-w-full items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium leading-4 text-emerald-700 sm:text-xs">
            <BadgeCheck size={12} className="shrink-0" />
            <span className="truncate">{product.school}</span>
          </span>
        )}

        <h3 className="line-clamp-2 min-h-10 text-xs font-semibold leading-5 text-slate-800 transition group-hover:text-blue-700 sm:text-sm">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1.5">
          <Star
            size={14}
            fill="currentColor"
            className="shrink-0 text-amber-400"
          />
          <span className="text-xs font-semibold text-slate-700">4.5</span>
          <span className="text-[10px] text-slate-400">Sample rating</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="text-lg font-extrabold text-slate-900 sm:text-xl">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="mt-3 flex items-start gap-1.5 text-[10px] leading-4 text-emerald-700 sm:text-xs">
          <Truck size={14} className="mt-0.5 shrink-0" />
          <span>Delivery options available</span>
        </div>

        <div className="mt-2 flex items-start gap-1.5 text-[10px] leading-4 text-slate-500 sm:text-xs">
          <ShieldCheck size={14} className="mt-0.5 shrink-0" />
          <span>Seller verification applies</span>
        </div>
      </div>
    </article>
  );
}
