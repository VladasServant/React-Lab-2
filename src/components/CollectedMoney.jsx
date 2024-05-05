import React, { useState, useEffect } from 'react';

const CollectedMoney = () => {
  const [collected, setCollected] = useState(0);
  const [target, setTarget] = useState(250000);

  useEffect(() => {
    const storedCollected = parseInt(localStorage.getItem('collected')) || 0;
    const storedTarget = parseInt(localStorage.getItem('target')) || 250000;

    setCollected(storedCollected);
    setTarget(storedTarget);
  }, []);

  return (
    <div className="mt-[16px] flex bg-[#fff] rounded-[16px]">
      <div className="flex gap-[12px] px-[21px] py-[0] mx-[0] my-[12px] border-r border-r-gray-300">
        <img src="https://send.monobank.ua/img/collected.svg" alt="collected" />
        <div>
          <div className="font-normal text-[14px] leading-[17px] text-[#808080]">Накопичено</div>
          <div className="font-medium text-[16px] leading-[24px] text-[#000]">{collected} ₴</div>
        </div>
      </div>
      <div className="flex gap-[12px] px-[21px] py-[0] mx-[0] my-[12px]">
        <img src="https://send.monobank.ua/img/target.svg" alt="target" />
        <div>
          <div className="font-normal text-[14px] leading-[17px] text-[#808080]">Ціль</div>
          <div className="font-medium text-[16px] leading-[24px] text-[#000]">{target} ₴</div>
        </div>
      </div>
    </div>
  );
};

export default CollectedMoney;