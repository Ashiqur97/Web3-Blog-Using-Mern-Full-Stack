import {Link} from 'react-router-dom';
import { Navbar } from 'flowbite-react';
export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/">
            <span>Web3</span>
            Blog 
        </Link>
    </Navbar>
  )
}
