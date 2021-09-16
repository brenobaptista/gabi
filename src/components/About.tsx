const About = (): JSX.Element => (
  <section>
    <div className='container mx-auto'>
      <div className='lg:flex items-center justify-around px-8 pt-16 pb-32'>
        <img
          src='/images/gabi.png'
          alt='Gabriela da Silva'
          className='h-60 w-60 rounded-full bg-purple-300 dark:bg-gray-800 mx-auto lg:mx-0 mb-16 lg:mb-0 animate-eclipse'
        />
        <div>
          <h1 className='text-3xl font-bold tracking-wide pb-4'>ABOUT ME</h1>
          <p className='max-w-xl leading-loose pb-4 text-base lg:text-lg text-justify'>
            I’m Gabriela, a mechanical engineer from Brazil. I’m passionate
            about product design. Currently, I work as a freelancer CAD
            designer. I have experience in complex mechanical design projects
            and 3D printing prototypes.
          </p>
          <p className='max-w-xl leading-loose pb-4 text-base lg:text-lg text-justify'>
            My services consist mainly of 3D modeling, 2D technical drawing and
            rendering. I usually use tools like SolidWorks, Autodesk Fusion 360
            and AutoCad in my projects. I’m constantly tinkering with new
            technologies and learning new skills. I believe in CAD designing as
            a means to positively impact businesses in making vital decisions
            about major projects.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
