import Button from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { useMultistepForm } from "../hooks/useMultiStepForm"
import BuyerInfoForm from "../components/organisms/forms/GiftCard/BuyerInfoForm"
import GiftCardPurchaseForm from "../components/organisms/forms/GiftCard/GiftCardPurchaseForm"
import RecipientGiftCardForm from "../components/organisms/forms/GiftCard/RecipientGiftCardForm"

const BuyGiftCardPage = () => {
    const { steps, step, currentStepIndex, back, next } = useMultistepForm([<GiftCardPurchaseForm />, <RecipientGiftCardForm />, <BuyerInfoForm />])

    const handleNext = async () => {
        next();
    };

    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full pt-[20px] pb-[20px] w-full">
                <p className="text-center">Purchase Gift Card</p>
                <div className="border-b-[6px] border-solid w-[250px] absolute bottom-0 right-0 left-0 border-[#2FB92F]"></div>
            </div>

            <div className='w-full md:w-auto'>
                <p className="text-center">Fill the Credentials</p>
                <div className="w-full">
                    {step}
                </div>
                <div className='flex items-center pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] justify-between mt-[10px]'>
                    <Link to='/choose-payment'>
                        <Button buttonText='Back' buttonBG='bg-gray-200' buttonTextColor='text-black' />
                    </Link>
                    <Button onClick={handleNext} buttonText='Continue' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />
                </div>
            </div>
        </div>
    )
}

export default BuyGiftCardPage