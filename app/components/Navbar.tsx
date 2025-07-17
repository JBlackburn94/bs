"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-end w-full items-center">
      {/* Desktop */}
      <div className="flex justify-center items-center w-fit w-96 bg-white/10 border border-white/20 shadow-md backdrop-blur-md text-orange z-50 max-md:hidden mt-5 mx-5 px-5 py-3 rounded-full">
        <ul className="flex gap-5 *:hover:underline font-medium uppercase">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#tickets">Tickets</a>
          </li>
          <li>
            <a href="#merch">Watch</a>
          </li>
          <li>
            <a href="#merch">Merch</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="justify-center items-center cursor-pointer hidden max-md:flex m-5 bg-orange/30 border border-orange/40 text-white shadow-md backdrop-blur-md p-5 rounded-full h-12 w-12">
        =
      </div>
    </nav>
  );
}
