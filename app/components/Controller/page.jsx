'use client'
import React from 'react'
import Search from '../Search/page';
import Settings from '../Settings/page';
import Account from '../Account/page';
import HomeController from '../HomeController/page';




export default function Controller({ params, searchParams }) {

  if (params === '/account')
    return (
      <Account />
    )
  if (params === '/')
    return (
      <HomeController />
    )
  if (params === '/search')
    return (
      <Search />
    )
  if (params === '/settings')
    return (
      <Settings />
    )
}
