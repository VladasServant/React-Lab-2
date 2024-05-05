const Footer = () => {
    return (

    <div className="flex w-[990px] justify-between items-center pt-[20px] text-[#fff]">
        <div className="font-medium text-[13px] leading-[16px] opacity-80">АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від <br/>
            20.01.1994, у держреєстрі банків №226</div>
        
        <div className="flex">
            <div className="bg-[rgba(255,_255,_255,_0.126)] border-[0.5px] border-[rgba(255,255,255,0.4)] h-[40px] rounded-[18px] font-semibold text-[14px] mt-[8px] leading-[24px] flex justify-center items-center px-[18px] py-[0] mr-[16px] cursor-pointer hover:bg-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.6)]">
                <img src="https://send.monobank.ua/img/cup.svg" className="w-[16px] h-[16px] mr-[8px]"/>
                <label className="">Провести розіграш</label>
            </div>

            <div className="bg-[rgba(255,_255,_255,_0.126)] border-[0.5px] border-[rgba(255,255,255,0.4)] h-[40px] rounded-[18px] font-semibold text-[14px] mt-[8px] leading-[24px] flex justify-center items-center px-[18px] py-[0] mr-[16px] cursor-pointer hover:bg-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.6)]">
                <img src="https://send.monobank.ua/img/gamepad.svg" className="w-[16px] h-[16px] mr-[8px]"/>
                <label className="">Віджет для стрімів</label>
            </div>
        </div>
    </div>

    );
}

export default Footer;