"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Portfolio Sign – Top Leftmost */}
        <a
          href="#"
          className="
            text-2xl md:text-3xl font-extrabold
            bg-gradient-to-r
            from-cyan-400
            via-teal-500
            to-emerald-600
            bg-clip-text
            text-transparent
          "
        >
          Portfolio
        </a>

        {/* Navigation Links – Top Right */}
        <div className="flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                text-gray-300 font-medium
                hover:bg-gradient-to-r
                hover:from-cyan-400
                hover:via-teal-500
                hover:to-emerald-600
                hover:bg-clip-text
                hover:text-transparent
                transition
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
