import React from 'react'
import Navbar from '../components/Navbar/page'
import Container from '../components/Controller/page'

export default function Settings() {
  return (
    <div className='flex'>
      <Navbar pathname='/settings'/>
      <Container params={'/settings'} searchParams={undefined}/>
    </div>
  )
}
