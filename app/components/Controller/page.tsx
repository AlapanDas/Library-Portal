'use client'
import React from 'react'
import Search from '../Search/page';
import Settings from '../Settings/page';
import Account from '../Account/page';
import HomeController from '../HomeController/page';

interface params {
  path: String;
}


export default function Controller({ path }: params) {

  if (path === '/account')
    return (
      <Account />
    )
  if (path === '/')
    return (
      <HomeController />
    )
  if (path === '/search')
    return (
      <Search />
    )
  if (path === '/settings')
    return (
      <Settings />
    )
}
