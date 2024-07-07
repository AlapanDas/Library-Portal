import React from 'react'
import Combbox from '../Combbox/page.jsx'

type Props = {}

export default function Search({ }: Props) {
  return (
    <div className='bg-container w-[100%] mx-2 rounded-xl p-4'>
      <div>
        <h1 className='font-bold text-3xl text-heading font-poppins mx-6'>Search</h1>
      </div>
      <Combbox />

    </div>
  )
}