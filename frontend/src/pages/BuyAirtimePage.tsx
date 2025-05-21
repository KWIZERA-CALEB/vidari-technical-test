import { useState } from 'react'
import { Link } from "react-router-dom"
import Button from "../components/atoms/Button"
import Input from "../components/atoms/Input"
import Select from "../components/atoms/Select"
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'
import useWindowSize from 'react-use/lib/useWindowSize'



const BuyAirtimePage = () => {

    const [confetti, setConfetti] = useState(false)
    const { width, height } = useWindowSize()

    const showTemporarySucess = () => {
        toast.success('Airtime purchased', { 
            position: 'bottom-center',
            duration: 5000,            
            className: 'font-roboto text-[15px] font-bold cursor-pointer',
            style: {
                color: '#fff',        
                backgroundColor: '#15B392',
                padding: '6px 20px', 
            },
        });
        setConfetti(true)
        setTimeout(() => {
            setConfetti(false)
        }, 8000)
    }
    return (
        <>
            {confetti &&
                <Confetti
                    width={width}
                    height={height}
                />
            }
            <div className="w-full h-[100vh] flex items-center justify-center">
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full pt-[20px] pb-[20px] w-full">
                    <p className="text-center">Buy Airtime</p>
                    <div className="border-b-[6px] border-solid w-full absolute bottom-0 right-0 left-0 border-[#2FB92F]"></div>
                </div>

                <div className='w-full md:w-auto'>
                    <p className="text-center">Fill the Credentials</p>
                    <div className='flex mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[400px] flex-col space-y-[10px]'>
                        <div>
                            <Input inputType="text" inputPlaceholder="Buyer's Phone" />
                        </div>
                        <div>
                            <Select selectOptionTerm="Country" options={['Rwanda', 'Nigeria']} />
                        </div>
                        <div>
                            <Select selectOptionTerm="Comunication Company" options={['MTN', 'Airtel']} />
                        </div>
                        <div className="mb-[5px]">
                            <Input inputType="text" inputPlaceholder="Buyer's Name" />
                        </div>
                    </div>
                    <div className='flex items-center pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] justify-between mt-[10px]'>
                        <Link to='/choose-payment'>
                            <Button buttonText='Back' buttonBG='bg-gray-200' buttonTextColor='text-black' />
                        </Link>
                        <Button buttonText='Complete' onClick={showTemporarySucess} buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyAirtimePage