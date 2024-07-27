import Link from "next/link";

export default function NavBar(){
  return (
      <nav className="flex items gap-6 px-4 py-2">
         <Link href="/portfolio">Portfolio</Link>
         <Link href="/equipe">Equipe</Link>
         <Link href="/Contato">Contato</Link>
      </nav>
  );
}