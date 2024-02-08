import { Footer } from "flowbite-react"
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white'>
                Web3 
              </span>
              Blog
            </Link>
                </div>  
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                    <Footer.Link
                  href='https://github.com/Ashiqur97'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  BlockChain Audit and Web Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Web3 Blog
                </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
            <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/Ashiqur97'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
        </div>
    </Footer>
  )
}
