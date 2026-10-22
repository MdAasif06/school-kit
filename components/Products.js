
const products = [
  {
    name: "Infant Jesus School Unisex Shirt",
    category: "UNIFORMS",
    price: 450,
    school: "Infant Jesus School",
    emoji: "👔",
    color: "bg-blue-50",
  },
  {
    name: "Infant Jesus School Girls Skirt",
    category: "UNIFORMS",
    price: 600,
    school: "Infant Jesus School",
    emoji: "👗",
    color: "bg-pink-50",
  },
  {
    name: "Patna School Girls Skirt",
    category: "UNIFORMS",
    price: 500,
    school: "Infant Jesus School",
    emoji: "👗",
    color: "bg-slate-100",
  },
  {
    name: "Accessories Kit",
    category: "ACCESSORIES",
    price: 700,
    school: "",
    emoji: "✏️",
    color: "bg-yellow-50",
  },
  {
    name: "Schoolbag",
    category: "BAGS",
    price: 800,
    school: "",
    emoji: "🎒",
    color: "bg-teal-50",
  },
  {
    name: "Notebook Kit",
    category: "STATIONERY",
    price: 1200,
    school: "",
    emoji: "📚",
    color: "bg-green-50",
  },
];

const locations = [
  ["School Shopping Patna", "All school supplies"],
  ["Uniforms in Patna", "School uniforms"],
  ["Stationery Delivery", "Same-day delivery"],
  ["Books Online", "NCERT & more"],
  ["School Bags", "All brands"],
];

export default function Products() {
  return (
    <>
      <section id="products" className="bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-[1340px]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Products in Patna</h2>
              <p className="mt-1 text-gray-500">Popular school supplies</p>
            </div>
            <button className="font-semibold text-blue-600">View All ›</button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50 px-4 py-8">
        <div className="mx-auto max-w-[1340px]">
          <h2 className="text-2xl font-bold">🔥 Trending in Patna</h2>
          <p className="mt-1 text-gray-500">Most popular this week</p>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <ProductCard key={`trending-${product.name}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-4 py-10">
        <div className="mx-auto max-w-[1340px]">
          <h2 className="text-center text-3xl font-bold">
            Why Choose <span className="text-blue-600">SchoolKart?</span>
          </h2>

          <div className="mt-8 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🏅", "Quality Products", "Verified quality and authenticity"],
              ["📈", "Best Prices", "Competitive prices and discounts"],
              ["⚡", "Fast Delivery", "Quick delivery across India"],
              ["⭐", "Trusted Sellers", "Verified and rated sellers"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow">
                  {icon}
                </div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-[1340px]">
          <h2 className="mb-6 text-2xl font-bold">Shop by Location</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {locations.map(([title, desc]) => (
              <a
                key={title}
                href="#products"
                className="rounded-xl border bg-white p-5 transition hover:border-blue-400"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="mb-5 text-2xl font-bold">Frequently Asked Questions</h2>
        <details className="mb-3 rounded-xl border p-4">
          <summary className="cursor-pointer font-semibold">
            Is Cash on Delivery (COD) available?
          </summary>
          <p className="mt-3 text-gray-600">
            Cash on Delivery availability depends on the product and delivery location.
          </p>
        </details>
        <details className="rounded-xl border p-4">
          <summary className="cursor-pointer font-semibold">
            Which board books do you stock?
          </summary>
          <p className="mt-3 text-gray-600">
            Browse the books section for available textbooks and study material.
          </p>
        </details>
      </section>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`flex h-36 items-center justify-center text-6xl sm:h-44 ${product.color}`}>
        {product.emoji}
      </div>

      <div className="p-3">
        {product.school && (
          <span className="inline-block rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
            {product.school}
          </span>
        )}

        <p className="mt-2 text-xs font-medium text-blue-600">
          {product.category}
        </p>
        <h3 className="mt-1 min-h-10 text-sm font-semibold leading-5">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-amber-500">
          ★★★★☆ <span className="text-gray-500">4.5</span>
        </p>

        <p className="mt-2 text-xl font-extrabold">
          ₹{product.price}
        </p>

        <p className="mt-2 text-xs text-emerald-600">
          ● Same day delivery
        </p>
        <p className="mt-1 text-xs text-gray-500">Sold by verified seller</p>
      </div>
    </article>
  );
}
