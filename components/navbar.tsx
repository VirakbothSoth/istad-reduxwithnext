import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="border-b border-white/5 px-6 py-4 bg-[#0f1117]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-white/90 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/20 border border-blue-500/30
                             flex items-center justify-center text-blue-400 text-xs">⚡</span>
            istadshop
          </Link>
          <div className="flex items-center gap-1">
            <Link href="/products"
              className="text-sm text-white/40 hover:text-white/90 hover:bg-white/5
                         px-3 py-1.5 rounded-lg transition-all duration-150">
              Products
            </Link>
            <Link href="/category"
              className="text-sm text-white/40 hover:text-white/90 hover:bg-white/5
                         px-3 py-1.5 rounded-lg transition-all duration-150">
              Category
            </Link>
          </div>
        </div>
      </nav>
    )
}