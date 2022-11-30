import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-7xl p-4 h-14 w-full fixed z-40 backdrop-blur-lg">
      <div className="flex justify-between">
        <div className="pl-6 font-bold before:absolute before:bg-yellow-500 before:w-6 before:h-6 before:left-2 before:rounded-full">
          ELIANE
        </div>
        <nav className="flex text-xs xs:text-base">
          <Link href="#Home" className="pt-1 xs:pt-0">
            Home
          </Link>
          <Link href="#MyWork" className="pt-1 ml-3 xs:pt-0 sm:ml-6">
            My work
          </Link>
          <Link href="#Contact" className="pt-1 ml-3 xs:pt-0 sm:ml-6">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
