import { Bars3Icon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from "../assests/b2creative logo.jpg"
import Link from 'next/link'


type Props = {}
function Nav({}: Props) {
  return (
    <div className='p-4 border-b sticky top-0 z-10 bg-white  '>
        <div className=' lg:hidden flex items-center justify-between'>
            <Bars3Icon className='w-6 text-gray-600' />
         <Link href="/">
          <Image src={logo} alt='B2Creative Logo' width={200} height={200} className='  rounded-full w-14' />
         </Link>  
            <PhoneIcon className='w-6 text-gray-600' />
        </div>

        <div  className='  px-[200px] items-center hidden lg:flex justify-between '>
       <Link href="/">
       <Image src={logo} alt='B2Creative Logo' width={200} height={200} className='  rounded-full w-14' />
       </Link> 
        <div className='flex items-center space-x-10  text-sm text-gray-600 font-semibold'>
            <Link href="/about">About</Link>
            <Link href="/contact" className=' border border-black  px-4 py-3 hover:bg-green-500 hover:border-green-500 transition-all ease-linear duration-200 hover:text-white  rounded-md'>Contact Us</Link>
        </div>
        </div>
    </div>
  )
}
export default Nav