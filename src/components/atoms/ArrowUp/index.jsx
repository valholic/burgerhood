import { useNavigate } from "react-router-dom"
import { Arrow } from "../../../assets";
import { useState } from "react";

export default function ArrowUp() {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();
    window.onscroll = function() {
        setScrollY(window.scrollY);
    }

    return (
        <>
            {scrollY !== 0 && <div className="fixed z-20 flex items-center justify-center w-16 h-16 bg-cover rounded-full cursor-pointer left-4 bottom-6 bg-yellow-pastel" onClick={() => window.scrollTo(0, 0)}>
                <img src={Arrow} className="scale-50 -rotate-90" />
            </div>}
        </>
    )
}
