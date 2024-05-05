import Jar from './Jar';
import Jar_Info from './Jar_Info'
import CollectedMoney from './CollectedMoney';


const Left_Part = () => {
    return(
        <div className="bg-[#f3f4f6] w-1/2 p-[22px] flex flex-col items-center">
            <img className="block mx-[auto] my-[42px]" src="https://send.monobank.ua/img/logo_short.png"/>
            <Jar />
            <Jar_Info />
            <CollectedMoney />
        </div>
    );
}

export default Left_Part;