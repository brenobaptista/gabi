import Theme from './Theme'

const Hero = (): JSX.Element => (
  <header className='bg-indigo-200 dark:bg-gray-800'>
    <div className='flex items-center container mx-auto h-screen px-8 md:px-24'>
      <div>
        <div className='text-4xl md:text-6xl font-bold'>
          Hey, I’m{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            Gabi
          </span>
          !
        </div>
        <div className='text-2xl md:text-5xl font-bold pb-6'>
          I’m a{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            CAD designer
          </span>
          .
        </div>
        <Theme className='w-10 h-10 p-2 rounded bg-gradient-to-br from-purple-500 to-pink-500' />
      </div>
    </div>
  </header>
)

export default Hero
