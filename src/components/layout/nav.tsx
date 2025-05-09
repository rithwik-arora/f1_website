import { Link } from "wouter";
import { useTheme } from "@/lib/theme";

export function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-[#daf1ff]/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8">
        <Link href="/">
          <a className="font-bold text-2xl pl-2">Raftaar</a>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/about"><a className="hover:text-primary">About</a></Link>
          <Link href="/gallery"><a className="hover:text-primary">Gallery</a></Link>
        
          <Link href="/contact"><a className="hover:text-primary">Contact</a></Link>

          
        </div>
      </div>
    </nav>
  );
}