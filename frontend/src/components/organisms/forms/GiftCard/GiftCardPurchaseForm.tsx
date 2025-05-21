import { useState } from 'react'
import Input from "../../../atoms/Input"
import { Controller, useFormContext } from 'react-hook-form'
import Select from "../../../atoms/Select"
import { type GiftCardTypes } from '../../../../utils/types'

const GiftCardPurchaseForm = () => {
    const [selectedGiftCardType, setSelectedGiftCardType] = useState('netflix')
    const { control, formState: {errors} } = useFormContext<GiftCardTypes>()

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
                    pattern: {
                        value: /^[0-9]$/,
                        message: 'Please enter a valid amount',
                    },
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
                rules={{ 
                    required: 'Gift card amount is required', 
                    pattern: {
                        value: /^[0-9]$/,
                        message: 'Please enter a valid amount',
                    },
                    }}
                render={({ field }) => (
                    <Select handleSelectChange={handleGiftCardTypeChange} value={field.value} selectOptionTerm="Gift card type" options={['Netflix', 'Amazon', 'Lulu']} />
                )}
            />
            {errors.giftCardType && (
                <p className='text-[12px] text-[#FF204E]'>{errors.giftCardType.message}</p>
            )}
            <Controller 
                name="giftCardAmount"
                control={control}
                rules={{ 
                    required: 'Gift card amount is required', 
                    pattern: {
                        value: /^[0-9]$/,
                        message: 'Please enter a valid amount',
                    },
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