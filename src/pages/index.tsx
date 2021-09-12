import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = (): JSX.Element => (
  <div className='text-gray-800 dark:text-gray-200 bg-purple-200 dark:bg-gray-900 font-sans antialiased'>
    <Hero />
    <About />
    <Footer />
  </div>
)

export default Home
