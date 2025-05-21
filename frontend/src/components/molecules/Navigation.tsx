import Button from '../atoms/Button'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='w-full h-[70px] bg-white pr-[20px] pl-[20px] md:pr-[40px] md:pl-[40px] flex flex-row items-center justify-between'>
            <div className='w-[80px]'>
                <img src='/images/logo.webp' className='w-full' alt='Vidari Logo' />
            </div>
            <div className='flex flex-row items-center space-x-[15px]'>
                <div><p className='cursor-pointer md:block hidden'>Home</p></div>
                <div><p className='cursor-pointer md:block hidden'>About</p></div>
                <div><p className='cursor-pointer md:block hidden'>Payment Center</p></div>
                <div><p className='cursor-pointer md:block hidden'>Guidelines</p></div>
                <div>
                    <Link to='/choose-payment'>
                        <Button buttonText='Explore Now' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />
                    </Link>
                </div>
            </div>
        </div>
    )

}


export default Navigation