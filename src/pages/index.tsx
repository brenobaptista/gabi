import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home = (): JSX.Element => (
  <div className='text-gray-800 dark:text-gray-200 bg-purple-200 dark:bg-gray-900 transition-colors motion-reduce:transition-none font-sans antialiased'>
    <Hero />
    <About />
    <Projects />
    <Footer />
  </div>
)

export default Home
