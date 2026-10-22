
export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1340px] gap-6 px-4 py-6 lg:grid-cols-[2fr_1fr]">
      <div className="flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-[#203e87] px-5 py-10 text-center text-white md:min-h-[350px]">
        <div className="mb-8 flex w-full justify-around text-3xl">
          <span>🎒</span>
          <span>📚</span>
          <span>✏️</span>
          <span>🎒</span>
          <span>📚</span>
          <span>✏️</span>
        </div>

        <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
          Uniforms, Bags & Shoes: 40% Off!
        </h1>

        <a
          href="#products"
          className="mt-7 rounded-full bg-yellow-400 px-7 py-3 font-bold text-blue-950 hover:bg-yellow-300"
        >
          Shop at schoolkart.in →
        </a>

        <p className="mt-12 text-sm font-semibold">COD Available</p>
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

        <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-5 text-sm text-gray-600">
          <p>🚚 Same-day delivery</p>
          <p>✓ Cash on Delivery</p>
          <p>♙ 7-day returns</p>
          <p>♧ Genuine uniforms</p>
        </div>
      </div>
    </section>
  );
}
