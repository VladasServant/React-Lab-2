import Payment_elipse from './Payment_elipse';
import Card_Pay from './Card_Pay';


const Right_Part = () => {
    return(
        <div className="w-1/2 flex flex-col">
            <Payment_elipse />
            <Card_Pay />
        </div>
    );
}

export default Right_Part;