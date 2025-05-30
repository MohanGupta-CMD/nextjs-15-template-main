'use client';

import { Github, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import ThemeToggle from './ThemeToggle';

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/[0.85] backdrop-blur-lg border-b border-[var(--border)] shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 max-w-full">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold font-poppins bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
            NextBoiler
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://nextjs.org/docs"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            Documentation
          </Link>
          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            Deploy
          </Link>
          <Link
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            Examples
          </Link>
          <Link
            href="https://github.com/AnwarHossainSR/nextjs-15-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
          </Link>
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          onClick={handleToggle}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-50 bg-[var(--background)] border-b border-[var(--border)] shadow-lg md:hidden animate-in slide-in-from-top duration-300 max-w-full">
            <div className="container py-6 flex flex-col space-y-4 px-4 sm:px-6 max-w-full">
              <Link
                href="https://nextjs.org/docs"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                onClick={handleToggle}
              >
                Documentation
              </Link>
              <Link
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                onClick={handleToggle}
              >
                Deploy
              </Link>
              <Link
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                onClick={handleToggle}
              >
                Examples
              </Link>
              <div className="flex items-center justify-between">
                <Link
                  href="https://github.com/AnwarHossainSR/nextjs-15-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                  onClick={handleToggle}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
