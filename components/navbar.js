import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 h-14 w-full fixed z-40 backdrop-blur-lg text-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between relative">
        <div className="pl-6 font-bold before:absolute before:bg-yellow-500 before:w-6 before:h-6 before:-left-1 before:rounded-full">
          ELIANE
        </div>
        <nav className="flex text-xs xs:text-base">
          <Link href="#Home" className="pt-1 xs:pt-0 hover:font-bold">
            Home
          </Link>
          <Link
            href="#MyWork"
            className="pt-1 ml-3 xs:pt-0 sm:ml-6 hover:font-bold"
          >
            My work
          </Link>
          <Link
            href="#Contact"
            className="pt-1 ml-3 xs:pt-0 sm:ml-6 hover:font-bold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
