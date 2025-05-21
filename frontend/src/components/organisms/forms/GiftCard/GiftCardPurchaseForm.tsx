import Input from "../../../atoms/Input"

const GiftCardPurchaseForm = () => {
    return (
        <div className='flex mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[400px] flex-col space-y-[10px]'>
            <div>
                <Input inputType="text" inputPlaceholder="Gift card amount" />
            </div>
            <div>
                <Input inputType="text" inputPlaceholder="Gift card type" />
            </div>
            <div>
                <Input inputType="text" inputPlaceholder="Number of Gift cards" />
            </div>
        </div>
    )
}



export default GiftCardPurchaseForm