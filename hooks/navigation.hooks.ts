import { usePathname } from "next/navigation";

export function useNvagationItems() {
  const pathname = usePathname();

  return [
    { href: "/", label: "Home", isActive: pathname === "/" },
    { href: "/about", label: "About", isActive: pathname === "/about" },
    { href: "/portfolio", label: "Portfolio", isActive: pathname === "/portfolio" },
    { href: "/services", label: "Services", isActive: pathname === "/services" },
  ];
}