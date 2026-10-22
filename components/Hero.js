
"use client";

import { Truck, Banknote, RotateCcw, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    image: "ban-1.png",
  },
  {
    image: "ban-2.png",
  },
  {
    image: "ban-3.png",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1340px] grid-cols-1 gap-4 px-3 py-4 sm:gap-5 sm:px-5 sm:py-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-6">
      {/* Banner Slider */}
      <div className="min-w-0 overflow-hidden rounded-xl sm:rounded-2xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="school-banner w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.image}>
              <div
                className="h-[190px] w-full bg-cover bg-center bg-no-repeat xs:h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]"
                style={{
                  backgroundImage: `url('/${banner.image}')`,
                }}
                role="img"
                aria-label="School shopping promotional banner"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Content */}
      <div className="flex min-w-0 flex-col justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 md:p-8 lg:p-6 xl:p-8">
        <p className="text-xs font-semibold tracking-wide text-blue-600 sm:text-sm">
          SCHOOL SHOPPING, MADE SIMPLE
        </p>

        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
          Everything your{" "}
          <span className="text-orange-500">school</span> needs
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
          Quality uniforms, textbooks and stationery from verified sellers.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#products"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600 sm:px-5 sm:text-base"
          >
            Find Your School <span className="ml-2">›</span>
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-gray-50 sm:px-5 sm:text-base"
          >
            Become a Seller
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-600 min-[380px]:grid-cols-2 sm:gap-4 lg:gap-3">
          <p className="flex min-w-0 items-center gap-2">
            <Truck size={19} className="shrink-0 text-blue-600" />
            <span>Same-day delivery</span>
          </p>

          <p className="flex min-w-0 items-center gap-2">
            <Banknote size={19} className="shrink-0 text-green-600" />
            <span>Cash on Delivery</span>
          </p>

          <p className="flex min-w-0 items-center gap-2">
            <RotateCcw size={19} className="shrink-0 text-orange-500" />
            <span>7-day returns</span>
          </p>

          <p className="flex min-w-0 items-center gap-2">
            <ShieldCheck size={19} className="shrink-0 text-purple-600" />
            <span>Genuine uniforms</span>
          </p>
        </div>
      </div>
    </section>
  );
}

