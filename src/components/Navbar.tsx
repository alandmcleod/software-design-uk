import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-primary text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Software Design UK" className="h-12 w-auto" />
          <span className="text-xl font-semibold">Software Design UK</span>
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/about" className="hover:text-secondary">About</Link>
          <Link to="/blog" className="hover:text-secondary">Blog</Link>
          <Link to="/contact" className="hover:text-secondary">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
