
const contests = [
  { name: "Mathematics", classes: "Class 8–10", credits: "₹500", days: 3, color: "border-purple-500" },
  { name: "Science", classes: "Class 6–8", credits: "₹300", days: 5, color: "border-emerald-500" },
  { name: "English", classes: "Class 5–7", credits: "₹200", days: 7, color: "border-blue-500" },
];

export default function Categories() {
  return (
    <>
      <section className="mx-auto max-w-[1340px] px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-purple-800 to-violet-600 px-5 py-4 text-white">
          <div>
            <p className="font-bold text-yellow-300">🦉 VIDYA DIDI · AI TUTOR</p>
            <p className="font-semibold">Quiz contests, real prizes 🎁</p>
          </div>
          <a
            href="#contests"
            className="rounded-full bg-yellow-400 px-5 py-2 font-bold text-black"
          >
            Try Free →
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-900 to-violet-600 px-4 py-10 text-center text-white">
        <p className="font-bold tracking-widest text-yellow-300">
          🦉 VIDYA DIDI AI TUTOR
        </p>
        <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
          Why pay for Uniforms, Books & Stationery?
        </h2>
        <p className="mt-3 font-semibold text-yellow-300">
          Your child can WIN SchoolKart Credits while studying! 🏆
        </p>

        <div className="mx-auto mt-6 grid max-w-3xl gap-4 md:grid-cols-3">
          {[
            ["📱", "Subscribe ₹99", "Get wallet credit back"],
            ["📚", "Study & Win", "Quiz contests with real prizes"],
            ["🛍️", "Shop FREE", "Redeem credits on SchoolKart"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="rounded-xl bg-white/15 p-5">
              <p className="text-3xl">{icon}</p>
              <h3 className="mt-2 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-purple-100">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-black">
            🚀 Subscribe Now — ₹299/month
          </button>
          <a href="#contests" className="rounded-full border border-white/60 px-6 py-3 font-bold">
            🏆 View Live Contests
          </a>
        </div>
      </section>

      <section id="contests" className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          🔴 Live Contests
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {contests.map((contest) => (
            <div
              key={contest.name}
              className={`rounded-2xl border border-t-4 ${contest.color} p-5`}
            >
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="font-bold">{contest.name}</h3>
                  <p className="text-sm text-gray-500">{contest.classes}</p>
                </div>
                <p className="text-xl font-extrabold text-purple-600">
                  {contest.credits}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-red-500">⏰ {contest.days} days left</span>
                <button className="rounded-full bg-gray-100 px-4 py-2 text-blue-600">
                  Join →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-white px-4 py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
          <span>✓ Verified Seller</span>
          <span>🚚 Fast Delivery</span>
          <span>♧ Secure Payment</span>
          <span>↺ Easy Returns</span>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-10 text-white">
        <div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-6">
          <div>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Limited Time Offer
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Back to School Sale!
            </h2>
            <p className="mt-2">Everything your school needs, in one place.</p>
          </div>
          <a href="#products" className="rounded-xl bg-white px-7 py-4 font-semibold text-orange-600">
            Shop Now　›
          </a>
        </div>
      </section>
    </>
  );
}
