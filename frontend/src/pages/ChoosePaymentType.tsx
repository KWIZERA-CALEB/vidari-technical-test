import { useState } from 'react'
import Button from "../components/atoms/Button"
import { Link } from 'react-router-dom'


const ChoosePaymentType = () => {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState('gift-card')

    return (
        <div className="w-full h-[100vh] flex items-center justify-start md:justify-center">
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full pt-[20px] pb-[20px] w-full">
                <p className="text-center">Choose Payment</p>
                <div className="border-b-[6px] border-solid w-[120px] absolute bottom-0 right-0 left-0 border-[#2FB92F]"></div>
            </div>

            <div className='w-full md:w-auto'>
                <p className="text-center">Choose Atleast One Option</p>
                <div className='flex flex-col md:flex-row mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[700px] items-center space-y-[10px] space-x-[0px] md:space-y-[0px] md:space-x-[20px]'>
                    <div onClick={() => {setSelectedPaymentOption('gift-card')}} className={`border-[1px] w-full cursor-pointer ${selectedPaymentOption === 'gift-card' ? 'border-[#2FB92F] bg-[#2FB92F]/[40%]' : 'border-gray-400'} border-solid pt-[20px] pb-[20px] pr-[40px] pl-[40px] rounded-[12px] flex flex-row space-x-[15px]`}>
                        <p>Gift Cards</p>
                    </div>
                    <div onClick={() => {setSelectedPaymentOption('air-time')}} className={`border-[1px] w-full cursor-pointer ${selectedPaymentOption === 'air-time' ? 'border-[#2FB92F] bg-[#2FB92F]/[40%]' : 'border-gray-400'} border-solid pt-[20px] pb-[20px] pr-[40px] pl-[40px] rounded-[12px] flex flex-row space-x-[15px]`}>
                        <p>Buy Air time</p>
                    </div>
                    <div onClick={() => {setSelectedPaymentOption('off-payments')}} className={`border-[1px] w-full cursor-pointer ${selectedPaymentOption === 'off-payments' ? 'border-[#2FB92F] bg-[#2FB92F]/[40%]' : 'border-gray-400'} border-solid pt-[20px] pb-[20px] pr-[40px] pl-[40px] rounded-[12px] flex flex-row space-x-[15px]`}>
                        <p>One Off Payment</p>
                    </div>
                </div>
                <div className='flex justify-end mt-[10px] pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px]'>
                    <Link to={`/buy/${selectedPaymentOption}`}>
                        <Button buttonText='Continue' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ChoosePaymentType
