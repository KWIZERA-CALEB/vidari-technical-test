import Input from "../../../atoms/Input"

const BuyerInfoForm = () => {
    return (
        <div className='flex mt-[30px] w-full pr-[20px] pl-[20px] md:pr-[0px] md:pl-[0px] md:w-[400px] flex-col space-y-[10px]'>
            <div>
                <Input inputType="text" inputPlaceholder="Buyer's Email" />
            </div>
            <div className="mb-[5px]">
                <Input inputType="text" inputPlaceholder="Buyer's Name" />
            </div>
            <p>Payment Information</p>
            <div>
                <Input inputType="text" inputPlaceholder="Payment Type" />
            </div>
        </div>
    )
}

export default BuyerInfoForm