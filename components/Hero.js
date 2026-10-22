"use client";

import { Truck, Banknote, RotateCcw, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    image: "ban-1.png",
    // title: "Uniforms, Bags & Shoes: 40% Off!",
    // button: "Shop Now",
  },
  {
    image: "ban-2.png",
    // title: "Everything Your School Needs",
    // button: "Explore Products",
  },
  {
    image: "ban-3.png",
    // title: "Back to School Sale!",
    // button: "Shop Now",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1340px] gap-6 px-4 py-6 lg:grid-cols-[2fr_1fr]">
      <div className="overflow-hidden rounded-2xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="school-banner"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.image}>
              <div
                className="flex min-h-75 flex-col items-start justify-center bg-cover bg-center px-6 py-10 md:min-h-[360px] md:px-10"
                style={{
                  backgroundImage: `url('${banner.image}')`,
                }}
              >
                {banner.title && (
                  <h1 className="max-w-lg text-3xl font-extrabold text-blue-900 md:text-5xl">
                    {banner.title}
                  </h1>
                )}

                {banner.button && (
                  <a
                    href="#products"
                    className="mt-6 rounded-full bg-blue-600 px-5 py-3 font-bold text-white"
                  >
                    {banner.button}
                  </a>
                )}

                {banner.cod && (
                  <p className="mt-8 text-sm font-semibold text-gray-500">
                    COD Available
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-medium text-blue-600">
          SCHOOL SHOPPING, MADE SIMPLE
        </p>

        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900">
          Everything your <span className="text-orange-500">school</span> needs
        </h2>

        <p className="mt-3 leading-6 text-gray-600">
          Quality uniforms, textbooks and stationery from verified sellers.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#products"
            className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Find Your School　›
          </a>
          <button className="rounded-xl border px-4 py-3 font-semibold">
            Become a Seller
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mt-3">
          <p className="flex items-center gap-2">
            <Truck size={18} className="text-blue-600" />
            Same-day delivery
          </p>

          <p className="flex items-center gap-2">
            <Banknote size={18} className="text-green-600" />
            Cash on Delivery
          </p>

          <p className="flex items-center gap-2">
            <RotateCcw size={18} className="text-orange-500" />
            7-day returns
          </p>

          <p className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-purple-600" />
            Genuine uniforms
          </p>
        </div>
      </div>
    </section>
  );
}
