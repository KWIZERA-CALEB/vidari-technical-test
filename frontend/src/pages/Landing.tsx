import { useState, useEffect } from 'react'
import Preloader from "../components/molecules/Preloader"
import Navigation from '../components/molecules/Navigation'

const Landing = () => {
    const [isPreloaderShown, setIsPreloaderShown] = useState(true)

    const handleHidePreloader = () => {
        setTimeout(() => {
            setIsPreloaderShown(false)
        }, 5000)
    }

    useEffect(() => {
        handleHidePreloader()
    }, [isPreloaderShown])

    return (
        <div>
            {isPreloaderShown && <Preloader />}
            <Navigation />
            <div className='w-full flex justify-center mt-[50px]'>
                <div className='w-[600px] flex flex-col items-center'>
                    <img src="/images/phone.png" className='w-[400px]' alt="illustration" />
                    <p className='text-center text-[32px]'>Afforable Cross Border <p className='text-green-500 font-bold'>Payments</p> with Vidari Pay</p>
                </div>
            </div>
            
        </div>
    )
}

export default Landing