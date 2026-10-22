
const footerGroups = [
  {
    title: "Categories",
    links: ["Uniforms", "Books", "Stationery", "Bags", "Shoes", "Accessories"],
  },
  {
    title: "Shop in Patna",
    links: ["School Shopping Patna", "Uniforms in Patna", "Stationery Delivery Patna", "Books Online Patna", "School Bags Patna"],
  },
  {
    title: "Quick Links",
    links: ["Contact Us", "Help & FAQ", "About Us", "Blog"],
  },
  {
    title: "Policies",
    links: ["Privacy Policy", "Terms of Service", "Return Policy", "Shipping Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400">
      <div className="mx-auto grid max-w-[1340px] gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <a href="/" className="text-xl font-extrabold text-orange-400">
            🎒 SchoolKart
          </a>
          <p className="mt-6 leading-6">
            Your trusted partner for school shopping.
            Same-day delivery, COD available.
          </p>
          <p className="mt-4">☎ +91 88628 97001</p>
          <p className="mt-2">✉ support@schoolkart.in</p>
          <p className="mt-4 text-sm">
            Hyderabad, Telangana, India
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 font-bold text-white">{group.title}</h3>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition hover:text-orange-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-[1340px] flex-wrap justify-center gap-5 px-4 py-6 text-sm">
          <span>✓ Same Day Delivery in Patna</span>
          <span>✓ Cash on Delivery</span>
          <span>✓ Verified Sellers</span>
          <span>✓ 7-Day Easy Returns</span>
        </div>
      </div>

      <div className="border-t border-gray-700 px-4 py-6 text-center text-sm">
        © 2026 SchoolKart. All rights reserved.
      </div>
    </footer>
  );
}
