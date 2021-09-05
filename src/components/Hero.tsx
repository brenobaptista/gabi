import Theme from './Theme'

import Behance from './icons/Behance'
import Email from './icons/Email'
import LinkedIn from './icons/LinkedIn'
import Splotch from './icons/Splotch'

const Hero = (): JSX.Element => (
  <header
    className='bg-hero bg-cover bg-fixed'
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
  >
    <div className='absolute h-screen w-screen bg-purple-300 dark:bg-gray-800 opacity-90' />
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
        <button
          type='button'
          aria-label='Redirect to Behance'
          className='w-10 h-10 p-2 mr-4 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500'
        >
          <a
            href='https://www.behance.net/gabrieladasilva'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Behance width={24} height={24} />
          </a>
        </button>
        <button
          type='button'
          aria-label='Redirect to LinkedIn'
          className='w-10 h-10 p-2 mr-4 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500'
        >
          <a
            href='https://www.linkedin.com/in/gabriela-engineering'
            target='_blank'
            rel='noreferrer noopener'
          >
            <LinkedIn width={24} height={24} />
          </a>
        </button>
        <button
          type='button'
          aria-label='Contact me by email'
          className='w-10 h-10 p-2 mr-4 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500'
        >
          <a href='mailto:gabriela.projetista3d@gmail.com'>
            <Email width={24} height={24} />
          </a>
        </button>
        <Theme className='w-10 h-10 p-2 hover:opacity-75 rounded bg-gradient-to-br from-purple-500 to-pink-500' />
      </div>
      <div className='flex justify-around pt-16 lg:pt-0 animate-pulse'>
        <Splotch width={200} height={200} />
      </div>
    </div>
  </header>
)

export default Hero
