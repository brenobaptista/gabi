import Heart from './icons/Heart'

const Footer = (): JSX.Element => (
  <footer className='bg-purple-300 dark:bg-gray-800'>
    <div className='text-center py-2 flex flex-col sm:block'>
      <span>© {new Date().getFullYear()} Gabriela da Silva. </span>
      <span>
        Made with
        <div className='inline-flex'>
          <Heart width={26} height={13} />
        </div>
        by{' '}
        <a
          href='https://brenobaptista.vercel.app/'
          className='text-purple-900 dark:text-gray-400 hover:opacity-75'
          target='_blank'
          rel='noreferrer noopener'
        >
          Breno Baptista
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
