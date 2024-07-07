'use client'
import React from 'react';
import Account from '../Account/page';
import Search from '../Search/page';
import Settings from '../Settings/page';
import HomeController from '../HomeController/page';

// Import the Link component from Next.js
import Link from 'next/link';

export default function Controller(pathname) {
  return (
    <div>
      <nav>
        {/* Use Link components for navigation */}
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/settings">
          <a>Settings</a>
        </Link>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </nav>
      <main>
        {pathname === '/' && <HomeController />}
        {pathname === '/search' && <Search />}
        {pathname === '/settings' && <Settings />}
        {pathname === '/account' && <Account />}
      </main>
    </div>
  );
}
