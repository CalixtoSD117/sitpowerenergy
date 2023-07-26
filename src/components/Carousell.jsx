import { Carousel } from "flowbite-react"
import { ca2, ca3, ca4, ca5, ca6 } from "../assets"

const Carousell = () => {
  return (
    <div className='bg-slate-800 border-b-[50px] border-slate-800 shadow-md '>
      <Carousel slideInterval={5000} className='  h-56  lg:h-[490px]'  >


        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className='w-full h-full object-cover  block '
            alt="1"
            src={ca4}
          />
          <div className='absolute bg-black bg-opacity-40  w-full h-full'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-[300px] lg:w-1/2 h-full gap-2 lg:gap-10'>
            <h1 className='lg:text-6xl text-2xl font-bold text-white'>Somos Expertos en Redes Complejas</h1>

            <span className='text-white font-medium text-xs lg:text-xl'>Tenemos una Solucion para todos sus proyectos y necesidades</span>

            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className='w-full h-full object-cover  block '
            alt="1"
            src={ca5}
          />
          <div className='absolute bg-black bg-opacity-40  w-full h-full'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-[300px] lg:w-1/2 h-full gap-2 lg:gap-10'>
            <h1 className='lg:text-6xl text-2xl font-bold text-white'>Para nosotros tu seguridad es lo mas importante</h1>

            <span className='text-white font-medium text-xs lg:text-xl'>Soluciones integrales en seguridad electronica</span>

            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className='w-full h-full object-cover  block '
            alt="1"
            src={ca6}
          />
          <div className='absolute bg-black bg-opacity-40  w-full h-full'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-[300px] lg:w-1/2 h-full gap-2 lg:gap-10'>
            <h1 className='lg:text-6xl text-2xl font-bold text-white'>Somos Expertos en Redes Complejas</h1>

            <span className='text-white font-medium text-xs lg:text-xl'>Tenemos una Solucion para todos sus proyectos y necesidades</span>

            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className='w-full h-full object-cover  block '
            alt="1"
            src={ca3}
          />
          <div className='absolute bg-black bg-opacity-40  w-full h-full'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-[300px] lg:w-1/2 h-full gap-2 lg:gap-10'>
            <h1 className='lg:text-6xl text-2xl font-bold text-white'>Somos Expertos en Redes Complejas</h1>

            <span className='text-white font-medium text-xs lg:text-xl'>Tenemos una Solucion para todos sus proyectos y necesidades</span>

            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className='w-full h-full object-cover  block '
            alt="1"
            src={ca2}
          />
          <div className='absolute bg-black bg-opacity-40  w-full h-full'>
            <div className='absolute flex flex-col items-start justify-center pl-20  w-[300px] lg:w-1/2 h-full gap-2 lg:gap-10'>
            <h1 className='lg:text-6xl text-2xl font-bold text-white'>Somos Expertos en Redes Complejas</h1>

            <span className='text-white font-medium text-xs lg:text-xl'>Tenemos una Solucion para todos sus proyectos y necesidades</span>

            </div>
          </div>
        </div>
        


      </Carousel>
    </div>
  )
}

export default Carousell