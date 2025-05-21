import Input from "../../../atoms/Input"

const RecipientGiftCardForm = () => {
    return (
        <div className='flex mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[400px] flex-col space-y-[10px]'>
            <div>
                <Input inputType="text" inputPlaceholder="Recipient's Email" />
            </div>
            <div>
                <Input inputType="text" inputPlaceholder="Recipient's Name" />
            </div>
        </div>
    )
}

export default RecipientGiftCardForm