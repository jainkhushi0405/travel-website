export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-2xl font-bold">
        Travel
      </h1>

      <ul className="flex gap-8">
        <li>Flights</li>
        <li>Hotels</li>
        <li>About</li>
      </ul>

      <button className="border px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
}