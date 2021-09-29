import Behance from './icons/Behance'

const Projects = (): JSX.Element => (
  <section className='bg-purple-300 dark:bg-gray-800'>
    <div className='container mx-auto px-8 py-32'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/conveyor.png' alt='Conveyor belt' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/106356227/Correia-Transportadora'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Conveyor belt
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/winch.png' alt='Hydraulic winch' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/111241593/Guincho-Hidraulico'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Hydraulic winch
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/impeller.png' alt='Impeller' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/121208735/Impelidor'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Impeller
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/container.png' alt='Plastic container' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/106044465/Caixa-plastica'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Plastic container
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/shaft.png' alt='Shaft' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/106571881/Eixo-mecanico'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Shaft
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/support.png' alt='Laptop support' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/100552683/Suporte-de-madeira-para-notebook'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Laptop support
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/table.png' alt='Wooden table' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/108563695/Mesa-Industrial'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Wooden table
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/flowerpot.png' alt='Flowerpot' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/120371631/Vaso-Customizado'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Flowerpot
            </span>
          </div>
        </div>
        <div className='group flex justify-center items-center'>
          <div className='group-hover:opacity-25 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <img src='/images/projects/component.png' alt='Custom component' />
          </div>
          <div className='absolute opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none duration-300 ease-in-out'>
            <div className='flex justify-center mb-2'>
              <a
                href='https://www.behance.net/gallery/117784023/Componente-mecanico'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Open this project on Behance'
                className='inline-flex p-2 hover:opacity-75 rounded border-solid border-2 border-gray-800 dark:border-gray-200'
              >
                <Behance width={24} height={24} />
              </a>
            </div>
            <span className='text-3xl font-bold tracking-wider leading-relaxed'>
              Custom component
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Projects
