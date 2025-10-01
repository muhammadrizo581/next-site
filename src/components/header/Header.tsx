import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto">
        <nav className="flex justify-around text-white text-[24px] font-semibold">
        <Link className="hover:underline" href="/">Home</Link>
        <Link className="hover:underline" href="/product">Products</Link>
        <Link className="hover:underline" href="/user">Users</Link>
        <Link className="hover:underline" href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
