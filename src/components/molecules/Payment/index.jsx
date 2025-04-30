import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";
import { Gopay, Grab } from "../../../assets";

export default function Payment({handlePayment, text, setPay, total}) {
    const navigate = useNavigate();

    return (
        <div className="fixed z-50 flex items-center justify-center w-full h-full">
            <div className="fixed top-0 z-30 w-full h-full bg-slate-200 opacity-70"/>
            <div className="absolute z-40 w-1/3 p-3 text-center border-black rounded-lg opacity-100 h-60 font-Lilita-one bg-slate-200">
                <h1 className="mb-3 text-2xl">Confirm payment!</h1>
                <p>Total:</p>
                <p>Rp{total}.000</p>
                <p>{text}</p>
                <div className="flex justify-center gap-3 my-3">
                    <div className="w-10 h-10 border-black rounded-lg border-[2px] cursor-pointer">
                        <img src={Grab} />
                    </div>
                    <div className="w-10 h-10 border-black rounded-lg border-[2px] cursor-pointer">
                        <img src={Gopay} />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <Button name={'Cancel'} style={{width: '60px'}} onClick={() => setPay(false)} />
                    <Button name={'Pay!'} style={{width: '60px'}} onClick={() => {
                        handlePayment();
                        navigate(-1);
                        }} />
                </div>
            </div>
        </div>
    )
}
