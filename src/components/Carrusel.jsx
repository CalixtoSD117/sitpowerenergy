import React from 'react'
import { ca1, ca2, ca3, ca4, ca5, ca6 } from '../assets'
import { Link } from 'react-router-dom'

const Carrusel = () =>
{
  return (
    <>

      <div id="default-carousel" className="relative w-full border-b-[40px] border-slate-800" data-carousel="slide">
        
        <div className="relative h-52 overflow-hidden  lg:h-[500px]">
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={ca4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="fo1"/>
            <div className='bg-black bg-opacity-40 h-full w-full absolute'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-[300px] lg:w-1/2 h-full gap-2 lg:gap-10'>
            <h1 className='text-black font-semibold text-2xl lg:text-6xl'>
              Somos Expertos en Redes Complejas
            </h1>
            <span className='text-white font-medium text-xs lg:text-xl'>Tenemos una Solucion para todos sus proyectos y necesidades</span>

            <div className='flex flex-row gap-4 transition-all ease-in-out'>

            <Link className='lg:px-2 lg:py-3 p-1 text-xs lg:text-base bg-green-500 hover:bg-green-600 text-white rounded-md font-medium duration-200'>
              Comienze Ahora
            </Link>

            <Link className='lg:px-2 lg:py-3 p-1 text-xs lg:text-base bg-gray-600 hover:bg-gray-700 text-white rounded-md font-medium duration-200'>
              Conozca Mas
            </Link>

            </div>

            </div>
            </div>
            
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={ca5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="fo2"/>
            <div className='bg-black bg-opacity-40 h-full w-full absolute'>
            <div className='absolute flex flex-col items-start justify-center pl-20 w-1/2 h-full gap-10'>
            <h1 className='text-white font-semibold text-6xl'>
            Para nosotros tu seguridad es lo mas importante
            </h1>
            <span className='text-white font-medium text-xl'>Soluciones integrales en seguridad electronica</span>

            <div className='flex flex-row gap-10 transition-all ease-in-out'>

            <Link className='px-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium duration-200'>
              Comienze Ahora
            </Link>

            <Link className='px-2 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-medium duration-200'>
              Conozca Mas
            </Link>

            </div>

            </div>
            </div>
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={ca6} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="fo3"/>
            <div className='bg-black bg-opacity-40 h-full w-full absolute'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-1/2 h-full gap-10'>
            <h1 className='text-white font-semibold text-6xl'>
              Tenga total control en la infrestructura de su empresa
            </h1>
            <span className='text-white font-medium text-xl'>Empieze a tener el control</span>

            <div className='flex flex-row gap-10 transition-all ease-in-out'>

            <Link className='px-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium duration-200'>
              Comienze Ahora
            </Link>

            <Link className='px-2 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-medium duration-200'>
              Conozca Mas
            </Link>

            </div>

            </div>
            </div>
          </div>
         
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={ca3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="fo4"/>
            <div className='bg-black bg-opacity-40 h-full w-full absolute'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-1/2 h-full gap-10'>
            <h1 className='text-white font-semibold text-6xl'>
              Somos expertos en el manejo de energia
            </h1>
            <span className='text-white font-medium text-xl'>Contamos con las mejores soluciones</span>

            <div className='flex flex-row gap-10 transition-all ease-in-out'>

            <Link className='px-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium duration-200 '>
              Comienze Ahora
            </Link>

            <Link className='px-2 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-medium duration-200'>
              Conozca Mas
            </Link>

            </div>

            </div>
            </div>
          </div>
          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={ca2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div className='bg-black bg-opacity-40 h-full w-full absolute'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-1/2 h-full gap-10'>
            <h1 className='text-white font-semibold text-6xl'>
              Contactenos para mas informacion sobre nuestros servicios
            </h1>
            <span className='text-white font-medium text-xl'>No pierdas mas tiempo...</span>

            <div className='flex flex-row gap-10 transition-all ease-in-out'>

            <Link className='px-2 py-3 bg-green-500 duration-200 hover:bg-green-600 text-white rounded-md font-medium'>
              Comienze Ahora
            </Link>

            </div>

            </div>
            </div>
          </div>
        </div>
        
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

    </>
  )
}

export default Carrusel