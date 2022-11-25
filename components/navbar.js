export default function Navbar() {
  return (
    <nav className="p-4">
      <main className="flex justify-between">
        <div className="pl-6 font-bold before:absolute before:bg-yellow-500 before:w-6 before:h-6 before:left-2 before:rounded-full">
          ELIANE
        </div>
        <ul className="flex">
          <li>Home</li>
          <li className="ml-6">My work</li>
          <li className="ml-6">Contact</li>
        </ul>
      </main>
    </nav>
  );
}
