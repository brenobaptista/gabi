import Image from 'next/image'

import gabi from '../../public/images/gabi.png'
import Behance from './icons/Behance'
import Email from './icons/Email'
import LinkedIn from './icons/LinkedIn'
import Theme from './Theme'

const Hero = (): JSX.Element => (
  <header
    className='bg-hero bg-cover bg-fixed'
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
  >
    <div className='absolute h-screen w-full bg-purple-300 dark:bg-gray-800 opacity-80 dark:opacity-90' />
    <div className='lg:flex items-center justify-around text-center lg:text-left container mx-auto h-screen pt-16 relative'>
      <div>
        <div className='text-4xl sm:text-7xl font-bold'>
          Hey, I’m{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            Gabi
          </span>
          !
        </div>
        <div className='text-2xl sm:text-6xl font-bold pb-8'>
          I’m a{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            CAD designer
          </span>
          .
        </div>
        <div className='flex space-x-4 justify-center lg:justify-start mb-16 lg:mb-0'>
          <a
            href='https://www.behance.net/gabrieladasilva'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='Open Behance'
            className='w-10 h-10 p-2 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500'
          >
            <Behance width={24} height={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/gabriela-engineering'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='Open LinkedIn'
            className='w-10 h-10 p-2 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500'
          >
            <LinkedIn width={24} height={24} />
          </a>
          <a
            href='mailto:gabriela.projetista3d@gmail.com'
            aria-label='Contact me by email'
            className='w-10 h-10 p-2 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500'
          >
            <Email width={24} height={24} />
          </a>
          <Theme className='w-10 h-10 p-2 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500' />
        </div>
      </div>
      <Image
        src={gabi}
        alt='Gabriela da Silva'
        placeholder='blur'
        priority
        width={240}
        height={240}
        className='rounded-full bg-purple-200 dark:bg-gray-900'
      />
    </div>
  </header>
)

export default Hero
