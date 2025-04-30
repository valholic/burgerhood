import { useNavigate, useParams } from "react-router-dom";
import { BurgerHood } from "../../../assets";
import { Link } from "../../atoms";
import HamburgerMenu from "../HamburgerMenu";
import { useState } from "react";

export default function Header() {
    const params = useParams();
    const navigate = useNavigate();
    const [ham, setHam] = useState(false);
    
    return (
        <div className="flex items-center justify-start h-16 min-w-full px-10 py-2 bg-yellow-pastel font-Lilita-one">
            <div className="w-20 h-20">
                <img src={BurgerHood} alt="Burger Hood" />
            </div>
            <div className="w-full max-md:flex max-md:justify-end">
                <div className="flex flex-wrap gap-8 ml-36 max-md:hidden ">
                    <Link text={'Home'} onClick={params === `/${params.uid}` ? () => navigate() : () => navigate(`/${params.uid}`)} style={{color: '#000'}} />
                    <Link text={'Foods'} onClick={params === `/${params.uid}/foods` ? () => navigate(): () => navigate(`/${params.uid}/foods`)} style={{color: '#000'}} />
                    <Link text={'Drinks'} onClick={params === `/${params.uid}/drinks` ? () => navigate(): () => navigate(`/${params.uid}/drinks`)} style={{color: '#000'}} />
                    <Link text={'Desserts'} onClick={params === `/${params.uid}/desserts` ? () => navigate(): () => navigate(`/${params.uid}/desserts`)} style={{color: '#000'}} />
                    <Link text={'Profile'} onClick={params === `/${params.uid}/profile` ? () => navigate(): () => navigate(`/${params.uid}/profile`)} style={{color: '#000'}} />
                </div>
                <HamburgerMenu handleHam={setHam} ham={ham} />
            </div>
        </div>
    )
}
