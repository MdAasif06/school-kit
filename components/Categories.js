
"use client";

import {
  GraduationCap,
  Trophy,
  BookOpen,
  ShoppingBag,
  Smartphone,
  Clock,
  ArrowRight,
  CheckCircle2,
  Truck,
  ShieldCheck,
  RotateCcw,
  CreditCard,
  Sparkles,
  Star,
  Zap,
  Gift,
} from "lucide-react";

const contests = [
  {
    name: "Mathematics",
    classes: "Class 8–10",
    credits: "₹500",
    days: 3,
    color: "border-purple-500",
    iconColor: "bg-purple-100 text-purple-700",
    icon: GraduationCap,
  },
  {
    name: "Science",
    classes: "Class 6–8",
    credits: "₹300",
    days: 5,
    color: "border-emerald-500",
    iconColor: "bg-emerald-100 text-emerald-700",
    icon: Sparkles,
  },
  {
    name: "English",
    classes: "Class 5–7",
    credits: "₹200",
    days: 7,
    color: "border-blue-500",
    iconColor: "bg-blue-100 text-blue-700",
    icon: BookOpen,
  },
];

const learningFeatures = [
  {
    icon: Smartphone,
    title: "Subscribe & Earn",
    description: "Get wallet credits with your membership.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Trophy,
    title: "Study & Win",
    description: "Test your knowledge and win rewards.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: ShoppingBag,
    title: "Shop with Credits",
    description: "Redeem credits on school essentials.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const trustFeatures = [
  { icon: ShieldCheck, label: "Verified Sellers" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: RotateCcw, label: "Easy Returns" },
];

export default function Categories() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* AI Tutor Promotional Strip */}
      <section className="mx-auto max-w-[1340px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-[#24105c] via-purple-800 to-violet-600 p-4 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <GraduationCap size={27} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                Vidya Didi · AI Tutor
              </p>
              <h2 className="mt-1 text-sm font-semibold sm:text-base">
                Learn more. Play quizzes. Win rewards.
              </h2>
            </div>
          </div>

          <a
            href="#contests"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-yellow-300"
          >
            Try Free
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* AI Tutor Hero */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1340px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#24105c] via-purple-800 to-violet-600 text-white shadow-xl">
          <div className="grid items-center gap-8 p-5 sm:p-8 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-14">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-purple-100 sm:text-sm">
                <Sparkles size={16} className="text-yellow-300" />
                Meet Vidya Didi
              </div>

              <h1 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Learn, compete, and earn{" "}
                <span className="text-yellow-300">
                  SchoolKart Credits.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-purple-100 sm:text-base">
                Make learning rewarding. Participate in quiz contests,
                improve your knowledge, and discover rewards for your
                school essentials.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contests"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-yellow-300"
                >
                  <Trophy size={18} />
                  Explore Contests
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#learning-benefits"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Discover Benefits
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-purple-100">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-yellow-300" />
                  Learn at your pace
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-yellow-300" />
                  Rewarding quizzes
                </span>
              </div>
            </div>

            {/* Learning Benefits Card */}
            <div
              id="learning-benefits"
              className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-yellow-400 text-purple-950">
                  <Star size={23} />
                </div>

                <div>
                  <h2 className="font-bold text-white">
                    Your learning journey
                  </h2>
                  <p className="mt-1 text-xs text-purple-100 sm:text-sm">
                    Learn today, achieve tomorrow
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {learningFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 p-3 transition hover:bg-white/15 sm:p-4"
                    >
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${feature.color}`}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-bold sm:text-base">
                          {index + 1}. {feature.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-purple-100 sm:text-sm">
                          {feature.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={18}
                        className="ml-auto shrink-0 text-purple-200"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Contests */}
      <section
        id="contests"
        className="scroll-mt-6 bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-purple-700">
                <Trophy size={18} />
                LEARN & ACHIEVE
              </div>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Live Contests
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Challenge yourself, sharpen your skills, and compete
                for exciting rewards.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              Contests available
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contests.map((contest) => {
              const Icon = contest.icon;

              return (
                <article
                  key={contest.name}
                  className={`flex min-w-0 flex-col rounded-2xl border border-gray-200 border-t-4 ${contest.color} bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${contest.iconColor}`}
                    >
                      <Icon size={25} />
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-medium text-slate-500">
                        Prize credits
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {contest.credits}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {contest.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {contest.classes}
                  </p>

                  <div className="my-5 border-t border-dashed border-gray-200" />

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-700 sm:text-sm">
                      <Clock size={16} />
                      {contest.days} days left
                    </span>

                    <button
                      type="button"
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      Join Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Rewards, eligibility, and contest availability are subject
            to the applicable contest terms.
          </p>
        </div>
      </section>

      {/* Trust Features */}
      <section className="border-y border-gray-200 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {trustFeatures.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-0 items-center justify-center gap-3 sm:justify-start"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                <Icon size={21} />
              </div>

              <span className="text-xs font-semibold leading-5 text-slate-700 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Back to School Sale */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-[1340px] overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10 lg:p-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold sm:text-sm">
                <Gift size={16} />
                Back to School
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Everything for a great school year.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-orange-50 sm:text-base sm:leading-7">
                Discover school uniforms, books, bags, and stationery
                in one convenient place.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#products"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-orange-600 shadow-sm transition hover:bg-orange-50 sm:w-auto sm:px-8"
              >
                <ShoppingBag size={19} />
                Shop Now
                <ArrowRight size={18} />
              </a>

              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-orange-50">
                <Zap size={14} />
                Your school essentials, made simple
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
