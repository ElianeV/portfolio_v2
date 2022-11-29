export default function Navbar() {
  return (
    <div className="max-w-7xl p-4 h-14 w-full fixed z-40 backdrop-blur-lg">
      <div className="flex justify-between">
        <div className="pl-6 font-bold before:absolute before:bg-yellow-500 before:w-6 before:h-6 before:left-2 before:rounded-full">
          ELIANE
        </div>
        <nav className="flex">
          <a>Home</a>
          <a className="ml-6">My work</a>
          <a className="ml-6">Contact</a>
        </nav>
      </div>
    </div>
  );
}
