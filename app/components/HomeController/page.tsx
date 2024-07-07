import React from 'react'
import Card from '../Card/page'

type Props = {}

export default function HomeController({ }: Props) {
  return (
    <div className='bg-container w-[100%] mx-2 rounded-xl p-4'>
      <div>
        <h1 className='font-bold text-3xl text-heading font-poppins mx-6'>HOME</h1>
        <Card />
      </div>
    </div>
  )
}