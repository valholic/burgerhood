import { useEffect, useState } from "react";
import { Arrow } from "../../../assets";
import { Button } from "../../atoms";
import axios from "axios";

export default function PromoAds() {
    const [promos, setPromos] = useState([]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        axios.get(`https://burgerhood-api.vercel.app/v1/promo/getPromos`)
        .then(result => {
            setPromos(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [promos])
    
    if(promos.length !== 0) {
        return (
            <>
            <div className="flex items-center justify-center w-full m-auto">
                <Button img={Arrow} style={{backgroundColor: "#94A3B8", width: "80px", height: "80px", borderRadius: "50%", transform: "scaleX(-1)"}} onClick={index !== 0 ? () => setIndex(index - 1) : () => setIndex(index)} />
                <div className="max-h-60 max-w-[400px]">
                    <img src={`https://burgerhood-api.vercel.app/${promos[index].imagePromo}`} />
                </div>
                <Button img={Arrow} style={{backgroundColor: "#94A3B8", width: "80px", height: "80px", borderRadius: "50%"}} onClick={promos.length > (index + 1) ? () => setIndex(index + 1) : () => setIndex(index)} />
            </div>
            <div className="flex justify-center w-full gap-2 mt-5">
                {
                    promos.map((promo, i) => {
                        if(i === index) {
                            return <div key={promo._id} className="w-3 h-3 block border-[1px] border-black rounded-full bg-black"/>
                        } else {
                            return <div key={promo._id} className="w-3 h-3 block border-[1px] border-black rounded-full bg-none"/>
                        }
                    })
                }
            </div>  
            </>
        )
    }
}
