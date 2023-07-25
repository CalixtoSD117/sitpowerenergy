import React from 'react'
import { logotipo } from '../assets'
import { links_quienes_somos, links_servicios, redessociales } from '../constants'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'

const Navbar = () =>
{
  return (
    <nav className='fixed w-full p-2 lg:pl-24lg: pr-24 bg-slate-700 shadow-md flex flex-row items-center justify-between'>
      <div className='bg-gray-50 rounded-full w-[100px] h-[62px] flex justify-center items-center'>
        <img className='w-[60px]' src={logotipo} alt="logo" />
      </div>
      <div className='lg:flex lg:flex-row items center gap-10 hidden'>
        <ul className='flex flex-row items-center gap-5 transition-all ease-in-out '>

          <Link className='text-white font-semibold hover:bg-slate-600 rounded-md duration-300 p-2' to='/' >Inicio</Link>

          <Menu >
            <Menu.Button  className='text-white font-semibold hover:bg-slate-600 rounded-md p-2 duration-300 '>Quienes Somos</Menu.Button>
            <Transition
          className='absolute z-50 mt-[165px] bg-white rounded-md w-[300px] p-2 shadow-md flex flex-col gap-2'
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items >
            {
                links_quienes_somos.map((link) => (
              <Menu.Item key={link.id}>

                  <div>

                  <div className='hover:bg-slate-100 rounded-md p-1 flex flex-row gap-2 items-center'>
                    <span>{link.icon}</span>
                  <Link className='text-base font-normal w-full' to={link.url}>{link.name}</Link>
                  
                  </div>
                  <hr className='border-gray-200' />
                  </div>
                  
              </Menu.Item>
              
              ))
            }
            </Menu.Items>
            </Transition>
          </Menu>

          <Menu>
            <Menu.Button className='text-white font-semibold hover:bg-slate-600 rounded-md duration-300 p-2'>Servicios</Menu.Button>
            <Transition
          className='absolute z-50 mt-[270px] bg-white rounded-md w-[300px] p-2 shadow-md flex flex-col gap-2'
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items >
            {
                links_servicios.map((link) => (
              <Menu.Item key={link.id}>
                  <div>
                  <div className='hover:bg-slate-100 rounded-md p-1 flex flex-row gap-2 items-center'>

                  <span>{link.icon}</span>
                  <Link className='w-full'  to={link.url}>{link.name}</Link>
                  
                  
                  </div>
                  <hr className='border-gray-200' />
                  </div>
                  
              </Menu.Item>
              
              ))
            }
            </Menu.Items>
            </Transition>
          </Menu>

          <Link className='text-white font-semibold hover:bg-slate-600 rounded-md p-2 duration-300 ' to='/contacto' >Contacto</Link>

        </ul>
        <ul className='flex flex-row items-center gap-4'>
          {redessociales.map((redsocial) => (
            <a
              key={redsocial.id}
              className={`shadow-md p-2 rounded-full ${redsocial.hover} transition-all duration-300 ease-in-out`}
              target='_blank'
              href={redsocial.url}
            >
              {redsocial.icon}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar