import { useState } from "react"
import Button from "../components/atoms/Button"
import Input from "../components/atoms/Input"
import { Link } from 'react-router-dom'
import Select from "../components/atoms/Select"

const OffPayments = () => {
    const [country, setCountry] = useState('Rwanda')
    const [choosenPaymentMethod, setChoosenPaymentMethod] = useState('card')

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value)
    };
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full pt-[20px] pb-[20px] w-full">
                <p className="text-center">One Off Payment</p>
                <div className="border-b-[6px] border-solid w-[250px] absolute bottom-0 right-0 left-0 border-[#2FB92F]"></div>
            </div>

            <div className='w-full md:w-auto'>
                <p className="text-center">Fill the Credentials</p>
                <div className='flex mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[400px] flex-col space-y-[10px]'>
                    <div>
                        <Input inputType="text" inputPlaceholder="Buyer's Email" />
                    </div>
                    <div>
                        <Select handleSelectChange={handleCountryChange} selectOptionTerm="Country" options={['🇷🇼 Rwanda', '🇳🇬 Nigeria']} />
                    </div>
                    <div>
                        <Input inputType="number" inputPlaceholder={country === "Rwanda" ? "Amount(Rwf)" : "Amount(Naira)"} />
                    </div>
                    <div className="mb-[5px]">
                        <Input inputType="text" inputPlaceholder="Buyer's Name" />
                    </div>
                    <p>Payment Option</p>
                    <div className="flex flex-row items-center space-x-[6px] w-full">
                        <div onClick={() => setChoosenPaymentMethod('card')} className={` ${choosenPaymentMethod === "card" ? "border-[#2FB92F] bg-[#2FB92F]/[40%]" : "border-gray-400"} w-[50%] border-[1px] border-solid pt-[12px] cursor-pointer pb-[12px] pr-[10px] pl-[10px] rounded-[12px]`}><p>Bank Card</p></div>
                        <div onClick={() => setChoosenPaymentMethod('momo')} className={` ${choosenPaymentMethod === "momo" ? "border-[#2FB92F] bg-[#2FB92F]/[40%]" : "border-gray-400"} w-[50%] border-[1px] border-solid pt-[12px] cursor-pointer pb-[12px] pr-[10px] pl-[10px] rounded-[12px]`}><p>Mobile money</p></div>
                    </div>
                    <div className="mb-[5px]">
                        <Input inputType="text" inputPlaceholder={choosenPaymentMethod === 'momo' ? "Buyer's Phone number" : "Buyer's Bank card"} />
                    </div>
                </div>
                <div className='flex items-center pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] justify-between mt-[10px]'>
                    <Link to='/choose-payment'>
                        <Button buttonText='Back' buttonBG='bg-gray-200' buttonTextColor='text-black' />
                    </Link>
                    <Button buttonText='Continue' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />
                </div>
            </div>
        </div>
    )
}

export default OffPayments