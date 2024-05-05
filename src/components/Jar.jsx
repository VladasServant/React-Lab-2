import jar_photo from '../assets/send.monobank.ua_jar_2YsuBSYDfD.png'

const Jar = () => {
    return(
        <div className="relative text-center">
            <img className="w-[215px] h-[215px] mb-[20px]" src={jar_photo} />

            <p className='not-italic font-medium text-[14px] leading-[16px] mb-[4px] mt-[15px]'>Артем К. збирає</p>
            <p className='text-[22px] font-black mb-[12px]'>На ремонт медеваку</p>

        </div>
        
    );
}

export default Jar;