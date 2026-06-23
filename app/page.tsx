import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex flex-col">
      {/* Main */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6">
        {/* Hero */}
        <section className="py-24 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full
                          border border-blue-500/20 bg-blue-500/10 text-blue-400 mb-6">
            ⚡ Powered by Redux Toolkit + RTK Query
          </div>
          <h1 className="text-5xl font-medium leading-tight tracking-tight text-white/90 mb-5">
            Modern state management,<br />
            <span className="text-blue-400">finally simple.</span>
          </h1>
          <p className="text-base text-white/40 leading-relaxed mb-8 max-w-lg">
            A hands-on class project exploring Redux Toolkit, RTK Query, and the Next.js App Router —
            built lesson by lesson at ISTAD.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/products"
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500
                         text-white transition-colors duration-150">
              Browse products
            </Link>
            <Link href="/category"
              className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/10
                         text-white/50 hover:text-white/90 hover:border-white/20
                         transition-all duration-150">
              View categories
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-3 mb-16">
          {[
            { label: "Products", value: "24", sub: "via RTK Query" },
            { label: "Categories", value: "5", sub: "filterable" },
            { label: "Redux slices", value: "3", sub: "counter · product · api" },
          ].map((s) => (
            <div key={s.label}
              className="rounded-xl border border-white/5 bg-white/3 px-5 py-4">
              <p className="text-xs text-white/30 mb-1">{s.label}</p>
              <p className="text-2xl font-medium text-white/90">{s.value}</p>
              <p className="text-xs text-blue-400/70 mt-1">{s.sub}</p>
            </div>
          ))}
        </section>

        {/* Feature cards */}
        <section className="mb-24">
          <p className="text-xs font-medium uppercase tracking-widest text-white/20 mb-4">
            What you&apos;re learning
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                icon: "🗄",
                title: "RTK Query",
                desc: "Auto-generated hooks handle caching, loading, and error states — no manual thunks needed.",
                tag: "useGetProductsQuery()",
              },
              {
                icon: "🧩",
                title: "Slices",
                desc: "Reducers and actions live together. One createSlice call replaces actions, types, and reducers.",
                tag: "createSlice()",
              },
              {
                icon: "🔁",
                title: "Typed hooks",
                desc: "useAppSelector and useAppDispatch wrap the Redux hooks with your store's exact types.",
                tag: "useAppDispatch()",
              },
            ].map((f) => (
              <div key={f.title}
                className="rounded-xl border border-white/5 bg-white/3
                           hover:border-blue-500/20 hover:bg-white/5
                           transition-all duration-150 p-5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20
                                flex items-center justify-center text-lg mb-4">
                  {f.icon}
                </div>
                <h3 className="text-sm font-medium text-white/90 mb-2">{f.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed mb-4">{f.desc}</p>
                <code className="text-xs text-blue-400/70 bg-blue-500/10 px-2 py-1 rounded-md">
                  {f.tag}
                </code>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/20 text-xs">
            <span className="w-5 h-5 rounded bg-blue-500/10 border border-blue-500/20
                             flex items-center justify-center text-blue-400 text-[10px]">⚡</span>
            istadshop — ISTAD class project
          </div>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <span>Next.js 15</span>
            <span className="text-white/10">·</span>
            <span>Redux Toolkit</span>
            <span className="text-white/10">·</span>
            <span>RTK Query</span>
          </div>
        </div>
      </footer>

    </div>
  );
}