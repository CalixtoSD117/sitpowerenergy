import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CardsServices, Carousel, Carrusel } from '../components'
import { carousel } from '../constants'
import { Link } from 'react-router-dom'

const Home = () =>
{
  return (
    <div>
      <div className='absolute z-50 '>
        <Navbar />
      </div>
      <div className='pt-[78px]'>
        <Carrusel/> 
        {/* <Carousel/> */}
      </div>
      <div className='mt-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-semibold'>Nuestros Servicios</h1>
          <hr className='w-80 m-2 border-green-200' />
        </div>
        <CardsServices />
      </div>
      <div>
        <h1>Soluciones Tecnologicas </h1>
      </div>
      <div>
        <h1>Alianzas de negocios</h1>
      </div>
      <div>
        <h1>Platiquenos de Su Proyecto</h1>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Home