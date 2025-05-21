import React from 'react'

interface SelectTypesProps {
    selectOptionTerm: string;
    options: string[];
    value?: string;
    handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectTypesProps> = ({ options, value, selectOptionTerm, handleSelectChange }) => {
    return (
        <select value={value} onChange={handleSelectChange} className='outline-0 bg-transparent placeholder:text-gray-400 w-full border-[1px] border-solid border-gray-400 pl-[20px] pt-[10px] pb-[10px] pr-[20px] rounded-full'>
            <option className='text-[14px] font-afacadFlux' value=''>{selectOptionTerm}</option>
            {options.length == 0 ? 
                (<option className='text-[13px] font-afacadFlux' value=''>No options</option>)
            : 
                (options.map((option, index) => (
                    <option key={index} className='text-[14px] font-afacadFlux' value={option.toLowerCase()}>{option}</option>
                )))
            }
        </select>
    )
}

export default Select