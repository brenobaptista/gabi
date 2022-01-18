import Image from 'next/image'

import conveyor from '../../public/images/projects/conveyor.png'
import winch from '../../public/images/projects/winch.png'
import impeller from '../../public/images/projects/impeller.png'
import container from '../../public/images/projects/container.png'
import shaft from '../../public/images/projects/shaft.png'
import support from '../../public/images/projects/support.png'
import { Behance } from './icons'

const Projects = (): JSX.Element => (
  <section className='bg-violet-200 dark:bg-gray-800'>
    <div className='container mx-auto px-8 py-16'>
      <h2 className='text-3xl font-bold tracking-wide text-center mb-4'>
        MY PROJECTS
      </h2>
      <p className='text-gray-600 dark:text-gray-400 mb-20 text-center text-xl'>
        Check out some of my recent projects. Link in the pictures!
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:blur-sm group-hover:opacity-50 dark:group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image src={conveyor} alt='Conveyor belt' placeholder='blur' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/106356227/Correia-Transportadora'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={20} height={20} />
              </a>
            </div>
            <span className='text-2xl font-bold tracking-wide uppercase'>
              Conveyor belt
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:blur-sm group-hover:opacity-50 dark:group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image src={winch} alt='Hydraulic winch' placeholder='blur' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/111241593/Guincho-Hidraulico'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={20} height={20} />
              </a>
            </div>
            <span className='text-2xl font-bold tracking-wide uppercase'>
              Hydraulic winch
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:blur-sm group-hover:opacity-50 dark:group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image src={impeller} alt='Impeller' placeholder='blur' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/121208735/Impelidor'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={20} height={20} />
              </a>
            </div>
            <span className='text-2xl font-bold tracking-wide uppercase'>
              Impeller
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:blur-sm group-hover:opacity-50 dark:group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image src={container} alt='Plastic container' placeholder='blur' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/106044465/Caixa-plastica'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={20} height={20} />
              </a>
            </div>
            <span className='text-2xl font-bold tracking-wide uppercase'>
              Plastic container
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:blur-sm group-hover:opacity-50 dark:group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image src={shaft} alt='Shaft' placeholder='blur' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/106571881/Eixo-mecanico'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={20} height={20} />
              </a>
            </div>
            <span className='text-2xl font-bold tracking-wide uppercase'>
              Shaft
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:blur-sm group-hover:opacity-50 dark:group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <Image src={support} alt='Laptop support' placeholder='blur' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/100552683/Suporte-de-madeira-para-notebook'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={20} height={20} />
              </a>
            </div>
            <span className='text-2xl font-bold tracking-wide uppercase'>
              Laptop support
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Projects
