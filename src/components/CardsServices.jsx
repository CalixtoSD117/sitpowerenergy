import React from 'react'
import { Link } from 'react-router-dom'
import { links_servicios } from '../constants'

const CardsServices = () =>
{
    return (
        <div className='grid-cols-3 grid justify-center items-center pl-10 pr-10'>
            {links_servicios.map((services) => (
                <div key={services.id} className='mx-10 my-4 bg-white shadow-md rounded-md'>
                    <div className=''>
                        <img className='w-full h-56 object-cover rounded-t-md' src={services.img} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-normal'>
                            {services.name}
                        </h1>
                    </div>
                    <div className='flex flex-row items-center justify-center p-2 transition-all ease-in-out'>
                    <Link className='bg-green-600 p-2 rounded-lg text-white font-semibold hover:bg-green-700 duration-300'>Conozca Más</Link>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default CardsServices