import router from 'next/router'
import React from 'react'
import Container from '../components/Controller/page'
import Navbar from '../components/Navbar/page'

export default function Account() {
  return (
    <div className="flex">
        <Navbar pathname='/account' />
        <Container path={'/account'} />
      </div>
  )
}
