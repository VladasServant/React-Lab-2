import React, { useState } from "react";

const Card_Pay = () => {

    const [menuVisibl, setmenuVisibl] = useState(false)
    const [formHider, setformHidden] = useState(false)
    const [cardNumber, setCardNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCVC] = useState('')
    const [inputError, setInputError] = useState(false)

    const Visibility = () => {
        setmenuVisibl(!menuVisibl);
        setformHidden(!formHider)
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value;
        setCardNumber(value);
        setInputError(!/^[0-9]{16}$/.test(value));
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        setMonth(value);
        setInputError(!/^[0-1][0-9]$/.test(value));
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        setYear(value);
        setInputError(!/^[0-9]{2}$/.test(value));
    };

    const handleCVCChange = (e) => {
        const value = e.target.value;
        setCVC(value);
        setInputError(!/^[0-9]{3}$/.test(value));
    };


    return (
        <div>
            <div className={formHider ? "hidden" : "block pr-[34px]"}>
                <hr className="mb-[8px] border-[#A0A0A0] w-[360px] mt-[24px] ml-[66px]"/>

                <div className="flex justify-center pt-[8px] w-full leading-[24px] rounded-[8px] ml-[23px] mb-5" onClick={Visibility}>
                    <img src="https://send.monobank.ua/img/card.svg" className="w-[16px] h-[26px] mr-[8px]"/>
                    <label className="text-center text-[14px] text-[#e85e5b] font-semibold leading-[24px] cursor-pointer">Оплатити карткою</label>
                </div>
            </div>


            <div className={menuVisibl ? "block pr-[34px]" : "hidden"}>
                <div className="flex justify-center items-center mb-[24px] pt-[20px] ml-8">
                    <hr className="w-[75px] h-[0.1px] border-[#A0A0A0]"/>
                    <p className="text-[14px] font-medium leading-[24px] px-[10px] py-[0]"> або уведіть дані картки</p>
                    <hr className="w-[75px] h-[0.1px] border-[#A0A0A0]"/>
                </div>

                <div className={`h-[72px] ml-[40px] ${inputError && 'error-text'}`}>
                    <input className="bg-none text-left pl-[16px] pr-[10px] rounded-[16px] text-[#000000] h-[56px] max-w-[340px] w-full ml-[34px] mr-auto border-[1px] border-[solid] border-[#ccc] leading-[24px] px-[10px] py-[0]"
                           placeholder="Номер картки"
                           value={cardNumber}
                           onChange={handleCardNumberChange}
                           required
                    />
                </div>

                <div className="flex items-center text-left text-black rounded-[16px] bg-transparent h-14 max-w-[340px] w-full ml-[75px] mr-auto border border-solid border-gray-300 leading-6 px-2 py-0">
                    <input className={`border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6 ${inputError && 'error-text'}`}
                            placeholder="Місяць" 
                            value={month} 
                            onChange={handleMonthChange} 
                            required
                            />
                    <hr className="h-9 mr-5 border-r border-gray-400"/>
                    <input className={`border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6 ${inputError && 'error-text'}`} 
                            placeholder="Рік" 
                            value={year} 
                            onChange={handleYearChange} 
                            required
                            />
                    <hr className="h-9 mr-5 border-r border-gray-400"/>
                    <input className={`border-transparent bg-transparent focus:outline-none w-24 h-full text-left text-black text-base leading-6 ${inputError && 'error-text'}`} 
                            placeholder="CVC2" 
                            value={cvc} 
                            onChange={handleCVCChange} 
                            required
                            />
                </div>

                <div className="justify-center mt-[16px] ml-[32px]">
                    <button className="justify-center flex items-center w-full font-semibold text-[16px] h-[56px] text-[#fff] bg-[#ff3b3b] border-[1px] border-[solid] border-[#ccc] rounded-[16px] max-w-[346px] ml-auto mr-auto mb-4">
                        Поповнити банку
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Card_Pay;