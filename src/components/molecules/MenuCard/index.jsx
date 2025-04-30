import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../atoms";

export default function MenuCard({ name, image, caption, price, cart, id, handleCart, setAlert, handleId }) {
    const params = useParams();
    const navigate = useNavigate();
    
    return (
        <div className="my-5 overflow-hidden rounded-lg h-72 w-60 bg-slate-200 font-Lilita-one">
            <div className="h-40 overflow-hidden w-60">
                <img src={image} alt={image}/>
            </div>
            <div className="h-32 px-2">
                <p className="text-lg">{name}</p>
                <p className="font-sans text-sm">{caption}</p>
                <div className="flex flex-wrap gap-20">
                    <p className="mt-2 text-sm">Rp{price}</p>
                    <Button 
                    name={cart ? 'Cancel' : 'Order!'} 
                    style={{width: "80px", transform: "scale(0.8)"}} 
                    onClick={cart ? () => {
                        setAlert(true);
                        handleId(id);
                        } : () => {
                            if(params.uid === 'user'){
                                navigate('/login');
                            } else {
                                handleCart(id);
                                window.scrollTo(0, 0);
                            }
                        }} />
                </div>
            </div>
        </div>
    )
}
