import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Banknote,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

const footerGroups = [
  {
    title: "Categories",
    links: ["Uniforms", "Books", "Stationery", "Bags", "Shoes", "Accessories"],
  },
  {
    title: "Shop in Patna",
    links: [
      "School Shopping Patna",
      "Uniforms in Patna",
      "Stationery Delivery Patna",
      "Books Online Patna",
      "School Bags Patna",
    ],
  },
  {
    title: "Quick Links",
    links: ["Contact Us", "Help & FAQ", "About Us", "Blog"],
  },
  {
    title: "Policies",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Return Policy",
      "Shipping Policy",
    ],
  },
];

const benefits = [
  {
    icon: Truck,
    label: "Same Day Delivery in Patna",
  },
  {
    icon: Banknote,
    label: "Cash on Delivery",
  },
  {
    icon: ShieldCheck,
    label: "Verified Sellers",
  },
  {
    icon: RotateCcw,
    label: "7-Day Easy Returns",
  },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#111827] text-gray-400">
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-[1340px] grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:px-6 sm:py-12 lg:grid-cols-5 lg:gap-8 lg:px-6">
        {/* Brand & Contact */}
        <div className="min-w-0 lg:col-span-1">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xl font-extrabold text-orange-400 transition hover:text-orange-300"
          >
            <span className="text-2xl">🎒</span>
            <span>SchoolKart</span>
          </a>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Your trusted partner for school shopping. Same-day delivery, COD
            available.
          </p>

          <div className="mt-5 space-y-4 text-sm">
            <a
              href="tel:+918862897001"
              className="flex min-w-0 items-start gap-3 transition hover:text-orange-400"
            >
              <Phone size={18} className="mt-0.5 shrink-0 text-orange-400" />
              <span>+91 88628 97001</span>
            </a>

            <a
              href="mailto:support@schoolkart.in"
              className="flex min-w-0 items-start gap-3 transition hover:text-orange-400"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-orange-400" />
              <span className="break-all">support@schoolkart.in</span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        {/* Footer Link Groups */}
        {footerGroups.map((group) => (
          <div key={group.title} className="min-w-0">
            <h3 className="mb-4 text-base font-bold text-white sm:mb-5">
              {group.title}
            </h3>

            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-start gap-2 text-sm leading-6 transition hover:text-orange-400"
                  >
                    <ChevronRight
                      size={15}
                      className="mt-1 shrink-0 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Benefits Bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto grid max-w-[1340px] grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 rounded-lg px-2 py-2 text-sm sm:justify-start"
            >
              <Icon size={20} className="shrink-0 text-orange-400" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-[1340px] px-4 py-5 text-center text-xs leading-6 sm:px-6 sm:py-6 sm:text-sm">
          © 2026 SchoolKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
