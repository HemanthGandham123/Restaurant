'use client'
import React from 'react';
import Register from '././pages/account/creation/register';
import Navigation from './components/navigation';

import Link from 'next/link';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* Top Right */}
          <div>
      <h1>Home Page</h1>
      <Navigation />
    </div>
          <nav>
      <ul>
        <li><Link legacyBehavior href="/" passHref><a>Home</a></Link></li>
        <li><Link legacyBehavior href="/account/creation" passHref><a>Sign In</a></Link></li>
        <li><Link legacyBehavior href="/contact" passHref><a>Contact</a></Link></li>
      </ul>
    </nav>
        </div>
      </div>
    </main>
  );
}
