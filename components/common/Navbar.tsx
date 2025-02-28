"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigationStore } from "@/store/navgation.store";
import { useNvagationItems } from "@/hooks/navigation.hooks";
import { ModeToggle } from "../mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const MobileMenu = () => {
  const { isMenuOpen, toggleMenu } = useNavigationStore();
  const menuItems = useNvagationItems();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.div
            className="fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />

          <motion.div
            className="absolute inset-x-0 top-16 z-40 md:hidden border-b shadow-lg bg-background dark:bg-background/95 px-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-6 space-y-4">
              {menuItems.map(({ href, label, isActive }) => (
                <Link onClick={toggleMenu} key={href} href={href} className={cn(
                    "block text-base font-medium transition-colors hover:text-primary py-2",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}>
                  {label}
                </Link>
              ))}
              <Button className="w-full" onClick={toggleMenu}>
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Get in touch</span>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export function Navbar() {
  const { isMenuOpen, toggleMenu } = useNavigationStore();
  const menuItems = useNvagationItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className={cn(
          "max-w-screen-xl mx-auto px-6 flex h-16 items-center",
          isMenuOpen
            ? "bg-white dark:bg-background lg:bg-background/95 lg:backdrop-blur lg:supports-[backdrop-filter]:bg-background/60"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        )}>
        {/* Logo */}
        <div className="flex-1 md:flex-none">
          <Link href="/" className="flex items-center space-x-2">
            <Image className="dark:hidden" src="/media/ab_logo_pure_black.png" height={40} width={40} alt="Ariel Batoon Logo" />
            <Image className="hidden dark:block" src="/media/ab_logo_pure_white.png" height={40} width={40} alt="Ariel Batoon" />
          </Link>
        </div>

        {/* Desktop Navigations */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-6">
          {menuItems.map(({ href, label, isActive }) => (
            <Link key={href} href={href} className={cn("text-base text-center transition-colors hover:text-primary py-2 px-4",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>
              {label}
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex-1 md:flex-none flex items-center justify-end gap-4">
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <Button className="hidden md:inline-flex">
            <Link href="/contact" className="flex items-center gap-2">
              <span>Get in touch</span>
              <ArrowRight />
            </Link>
          </Button>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={toggleMenu}>
              <span className="border p-2 rounded-full">
                {isMenuOpen ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.5rem] w-[1.5rem]" />}
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigations */}
      <MobileMenu />
    </header>
  );
}