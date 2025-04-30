import { useNavigate, useParams } from "react-router-dom"

export default function Cart({img}) {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="fixed z-20 flex items-center justify-center w-16 h-16 bg-cover rounded-full cursor-pointer right-4 bottom-6 bg-yellow-pastel" onClick={() => {
            if(params.uid === 'user') {
                navigate('/login');
            } else {
                navigate(`/${params.uid}/cart-items`);
                }
            }} >
            <img src={img} className="w-10 h-10" style={{transform: "scaleX(-1)"}} />
        </div>
    )
}
