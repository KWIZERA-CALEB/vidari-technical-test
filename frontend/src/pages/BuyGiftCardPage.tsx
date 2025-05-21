import { useState } from 'react'
import Button from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { useMultistepForm } from "../hooks/useMultiStepForm"
import BuyerInfoForm from "../components/organisms/forms/GiftCard/BuyerInfoForm"
import GiftCardPurchaseForm from "../components/organisms/forms/GiftCard/GiftCardPurchaseForm"
import RecipientGiftCardForm from "../components/organisms/forms/GiftCard/RecipientGiftCardForm"
import Confetti from 'react-confetti'
import toast from 'react-hot-toast'
import useWindowSize from 'react-use/lib/useWindowSize'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import { type GiftCardTypes } from '../utils/types'

const BuyGiftCardPage = () => {
    const [confetti, setConfetti] = useState(false)
    const { width, height } = useWindowSize()
    const [loading, setLoading] = useState(false)
    const { steps, step, currentStepIndex, back, next } = useMultistepForm([<GiftCardPurchaseForm />, <RecipientGiftCardForm />, <BuyerInfoForm />])

    const methods = useForm<GiftCardTypes>({
        mode: 'onChange',
        defaultValues: {
            giftCardAmount: '',
            numberOfGiftCards: '',
            giftCardType: 'Netflix',
        },
    })

    const stepFields: (keyof GiftCardTypes)[][] = [
        ['giftCardAmount', 'giftCardType', 'numberOfGiftCards'],  
    ];

    const { handleSubmit, trigger } = methods

    const onSubmit: SubmitHandler<GiftCardTypes> = async () => {
        setTimeout(() => {
            setLoading(true)
        }, 5000)
        setLoading(false)
        toast.success('Gift card purchased', { 
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

    const handleGoBack = async () => {
        back()
    }

    const handleNext = async () => {
        const isValid = await trigger(stepFields[currentStepIndex]);
        if (isValid) {
            next();
        }
    };


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
                    <p className="text-center">Purchase Gift Card</p>
                    <div className={`border-b-[6px] border-solid ${currentStepIndex === steps.length -1 ? 'w-full' : 'w-[250px]'} absolute bottom-0 right-0 left-0 border-[#2FB92F]`}></div>
                </div>

                <div className='w-full md:w-auto'>
                    <p className="text-center">Fill the Credentials</p>
                    <FormProvider {...methods}>
                        <div className="w-full">
                            {step}
                        </div>
                        <div className='flex items-center pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] justify-between mt-[10px]'>
                            {currentStepIndex == 0 ? 
                            <Link to='/choose-payment'>
                                <Button buttonText='Back' buttonBG='bg-gray-200' buttonTextColor='text-black' />
                            </Link>
                            : 
                                <Button buttonText='Previous' onClick={handleGoBack} buttonBG='bg-gray-200' buttonTextColor='text-black' />
                            }
                            {currentStepIndex === steps.length -1 ? 
                                    loading ? (
                                        <Button isDisabled={true} buttonText='Finishing' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />
                                    )
                                    :
                                    (<Button onClick={handleSubmit(onSubmit)} buttonText='Complete' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' /> 
                                    )
                                : 
                                (<Button onClick={handleNext} buttonText='Continue' buttonBG='bg-[#2FB92F]' buttonTextColor='text-white' />)
                            }
                        </div>
                    </FormProvider>
                </div>
            </div>
        </>
    )
}

export default BuyGiftCardPage