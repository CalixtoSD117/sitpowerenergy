import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='bg-gray-800 w-full p-1 flex flex-col items-center justify-center m-0'>
            <Link className='text-white underline font-normal'>
            Politica de Pricacidad
            </Link>
            <span className='text-white'>© 2017 Corporativo SITPE y Asociados S.A. de C.V.I</span>
        </footer>
    </>
  )
}

export default Footer