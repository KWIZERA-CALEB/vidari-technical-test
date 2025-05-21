import { useState } from 'react'
import Input from "../../../atoms/Input"
import { Controller, useFormContext } from 'react-hook-form'
import Select from "../../../atoms/Select"
import { type GiftCardTypes } from '../../../../utils/types'

const GiftCardPurchaseForm = () => {
    const [selectedGiftCardType, setSelectedGiftCardType] = useState('netflix')
    const { control, formState: {errors} } = useFormContext<GiftCardTypes>()
    const [choosenGiftCard, setChoosenGiftCard] = useState('netflix')

    const handleGiftCardTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGiftCardType(e.target.value)
        console.log(selectedGiftCardType)
    }
    return (
        <div className='flex mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[400px] flex-col space-y-[10px]'>
            <Controller 
                name="giftCardAmount"
                control={control}
                rules={{ 
                    required: 'Gift card amount is required', 
                    }}
                render={({ field }) => (
                    <Input value={field.value} onChange={field.onChange} inputType="number" inputPlaceholder="Gift card amount" />
                )}
            />
            {errors.giftCardAmount && (
                <p className='text-[12px] text-[#FF204E]'>{errors.giftCardAmount.message}</p>
            )}
            <Controller 
                name="giftCardType"
                control={control}
                render={({ field }) => (
                    <Select handleSelectChange={handleGiftCardTypeChange} value={field.value} selectOptionTerm="Gift card type" options={['Netflix', 'Amazon', 'Lulu']} />
                )}
            />
            <div className="grid grid-cols-1 gap-[2px] md:grid-cols-2 w-full">
                <div onClick={() => setChoosenGiftCard('netflix')} className={` ${choosenGiftCard === "netflix" ? "border-[#2FB92F] bg-[#2FB92F]/[40%]" : "border-gray-400"} flex flex-row space-x-[10px] items-center border-[1px] border-solid pt-[12px] cursor-pointer pb-[12px] pr-[10px] pl-[10px] rounded-[12px]`}><img src='/images/netflix.png' className='w-[50px]' alt='' /><p>Netflix</p></div>
                <div onClick={() => setChoosenGiftCard('amazon')} className={` ${choosenGiftCard === "amazon" ? "border-[#2FB92F] bg-[#2FB92F]/[40%]" : "border-gray-400"} flex flex-row space-x-[10px] items-center border-[1px] border-solid pt-[12px] cursor-pointer pb-[12px] pr-[10px] pl-[10px] rounded-[12px]`}><img src='/images/amazon.png' className='w-[50px]' alt='' /><p>Amazon</p></div>
                <div onClick={() => setChoosenGiftCard('hulu')} className={` ${choosenGiftCard === "hulu" ? "border-[#2FB92F] bg-[#2FB92F]/[40%]" : "border-gray-400"} flex flex-row space-x-[10px] items-center border-[1px] border-solid pt-[12px] cursor-pointer pb-[12px] pr-[10px] pl-[10px] rounded-[12px]`}><img src='/images/hulu.png' className='w-[30px]' alt='' /><p>Hulu</p></div>
                <div onClick={() => setChoosenGiftCard('ebay')} className={` ${choosenGiftCard === "ebay" ? "border-[#2FB92F] bg-[#2FB92F]/[40%]" : "border-gray-400"} flex flex-row space-x-[10px] items-center border-[1px] border-solid pt-[12px] cursor-pointer pb-[12px] pr-[10px] pl-[10px] rounded-[12px]`}><img src='/images/ebay.png' className='w-[30px]' alt='' /><p>Ebay</p></div>
            </div>
            {errors.giftCardType && (
                <p className='text-[12px] text-[#FF204E]'>{errors.giftCardType.message}</p>
            )}
            <Controller 
                name="numberOfGiftCards"
                control={control}
                rules={{ 
                    required: 'Number of gift cards is required', 
                    // pattern: {
                    //     value: /^[0-9]$/,
                    //     message: 'Please enter a valid amount',
                    // },
                    }}
                render={({ field }) => (
                    <Input inputType="number" value={field.value} onChange={field.onChange} inputPlaceholder="Number of Gift cards" />
                )}
            />
            {errors.giftCardAmount && (
                <p className='text-[12px] text-[#FF204E]'>{errors.giftCardAmount.message}</p>
            )}
        </div>
    )
}



export default GiftCardPurchaseForm