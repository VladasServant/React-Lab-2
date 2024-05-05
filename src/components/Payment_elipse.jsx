import React, { useState, useEffect } from 'react';

const PaymentEllipse = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    validateInput();
  }, [amount]);

  const handleKeyDown = (event) => {
    if (amount === '' && event.key === '0') {
      event.preventDefault();
    }
  };

  const handleButtonClick = (increment) => {
    const newValue = parseInt(amount || '0') + increment;
    setAmount(newValue.toString());
  };

  const handleInputChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  const validateInput = () => {
    let input = amount.replace(/\D/g, '');
    if (input === '') {
      input = '0';
    }
    input = Math.min(parseInt(input), 29999).toString();
    setAmount(input);
  };

  const inputStyle = {
    color: parseInt(amount) < 10 ? 'pink' : 'black',
    width: `${amount.length}ch`,
  };

  const errorText = parseInt(amount) < 10 ? (
    <div className="text-[12px] font-normal text-[rgb(128,128,128)]">
      Сума повинна бути від 10 ₴ до 29 999 ₴
    </div>
  ) : null;

  const handlePayClick = () => {
    console.log("Сума:", amount);
    console.log("Ім'я:", name);
    console.log("Коментар:", comment);

    const currentCollected = parseInt(localStorage.getItem('collected')) || 0;
    const newCollected = currentCollected + parseInt(amount);
    localStorage.setItem('collected', newCollected.toString());

    setAmount('');
    setName('');
    setComment('');
  }

  return (
    <div>
      <div className="w-[435px] h-[265px] flex flex-col items-center mt-[42px] mb-8 mx-auto p-6 rounded-3xl border-[3px] border-solid border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(92.12deg,#57b5f9_0%,#da11ba_100%)_border-box]">
        <div className="text-[14px] text-[#121214] font-['Inter',_'LatoWeb',_'Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] justify-center pt-[24px] flex font-semibold leading-[16px]">
          Сума поповенння
          <img className="flex w-[16px] ml-[0.5em] mb-[20px]" src="https://send.monobank.ua/img/money.png" alt="money" />
        </div>

        <div className="flex mt-[10px] justify-around">
          <input
            className="font-[Inter] text-[48px] font-bold border-[0] text-right"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={handleKeyDown}
            style={inputStyle}
          />
          <div className="ml-[12px] text-[48px] font-bold">₴</div>
        </div>

        {errorText}

        <div className="flex mt-[11px] ml-[20px] w-[340px] h-[42px] justify-between">
          <button
            className="border-[1px] border-[solid] border-[#ccc] rounded-[16px] w-[103px] h-[42px] bg-[white] font-[Inter] text-[16px] font-medium cursor-pointer hover:bg-[#e6e6e6]"
            onClick={() => handleButtonClick(100)}
          >
            + 100₴
          </button>
          <button
            className="border-[1px] border-[solid] border-[#ccc] rounded-[16px] w-[103px] h-[42px] bg-[white] font-[Inter] text-[16px] font-medium cursor-pointer hover:bg-[#e6e6e6]"
            onClick={() => handleButtonClick(500)}
          >
            + 500₴
          </button>
          <button
            className="border-[1px] border-[solid] border-[#ccc] rounded-[16px] w-[103px] h-[42px] bg-[white] font-[Inter] text-[16px] font-medium cursor-pointer hover:bg-[#e6e6e6]"
            onClick={() => handleButtonClick(1000)}
          >
            + 1000₴
          </button>
        </div>
      </div>
      
      <div className="box-content w-[306px] h-[56px] px-[16px] py-[0] mt-[0] mx-[auto] mb-[16px] border-[1px] border-[solid] border-[#ccc] rounded-[16px] transition-all duration-200 ease-in-out hover:shadow-lg">
          <input
            type="text"
            className="border-none h-[41px] w-full text-[16px] mt-[6px] focus:outline-[none] invalid:text-[#fb5155]"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
          />
          <label
            className={`relative -top-[38px] opacity-60 leading-[24px] [transition:all_0.1s_ease] ${
              name ? 'opacity-0' : 'opacity-80'
            }`} >
            Ваше ім'я (необов'язково)
          </label>
        </div>
        <div className="box-content w-[306px] h-[56px] px-[16px] py-[0] mt-[0] mx-[auto] mb-[16px] border-[1px] border-[solid] border-[#ccc] rounded-[16px] transition-all duration-200 ease-in-out hover:shadow-lg">
          <input
            type="text"
            className="border-none h-[41px] w-full text-[16px] mt-[6px] focus:outline-[none] invalid:text-[#fb5155]"
            value={comment}
            onChange={(e) => handleInputChange(e, setComment)}
          />
          <label
            className={`relative -top-[38px] opacity-60 leading-[24px] [transition:all_0.1s_ease] ${
              comment ? 'opacity-0' : 'opacity-80'
            }`} >
            Коментар (необов'язково)
          </label>
        </div>

        <div>
          <div className='flex w-[340px] h-[48px] mt-[0] mx-[auto] mb-[16px] bg-[black] rounded-[8px] justify-center items-center cursor-pointer border-[none]'
            onClick={handlePayClick} >
            <img src="https://send.monobank.ua/img/mono_pay.svg" className='h-[26px]'/>
          </div>

          <div className='flex w-[340px] h-[48px] mt-[0] mx-[auto] mb-[16px] bg-[black] rounded-[8px] justify-center items-center cursor-pointer border-[none]'
            onClick={handlePayClick} >
            <img src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" className='h-[26px]'/>
          </div>
        </div>
        
    </div>
  );
};

export default PaymentEllipse;