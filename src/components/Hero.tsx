import Theme from './Theme'

const Hero = (): JSX.Element => (
  <header className='bg-indigo-100 dark:bg-gray-700'>
    <div className='container h-screen p-6'>
      <div className='text-4xl lg:text-6xl font-bold'>Hey, I’m Gabi!</div>
      <Theme />
    </div>
  </header>
)

export default Hero
