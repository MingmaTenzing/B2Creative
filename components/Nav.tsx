import { Bars3Icon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from "../assests/b2creative logo.jpg"


type Props = {}
function Nav({}: Props) {
  return (
    <div className='p-4 border-b sticky top-0 z-10 bg-white'>
        <div className='flex items-center justify-between'>
            <Bars3Icon className='w-6 text-gray-600' />
            <Image src={logo} alt='B2Creative Logo' width={200} height={200} className='  rounded-full w-14' />
            <PhoneIcon className='w-6 text-gray-600' />
        </div>
    </div>
  )
}
export default Nav