import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ConfirmAlert } from "../../atoms";

export default function HamburgerMenu({ham, handleHam}) {
    const [confirm, setConfirm] = useState('');
    const [clicked, setClicked] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(confirm === 'yes') {
            setClicked(false);
            setConfirm('');
            navigate('/login');
        } else if(confirm === 'no') {
            setClicked(false);
            setConfirm('');
        } else if(confirm === '') {
            return;
        }
    }, [confirm, navigate])

    return (
        <>
            {clicked && <ConfirmAlert text={'Are you sure want to sign out?'} handleConfirm={setConfirm} />}
            <div className="w-5 h-auto m-10 cursor-pointer md:hidden" onClick={() => {
                ham ? handleHam(false) : handleHam(true);
                }}>
                {!ham &&
                    <>
                        <div className="w-full h-1 my-1 bg-black rounded-sm"/>
                        <div className="w-full h-1 my-1 bg-black rounded-sm"/>
                        <div className="w-full h-1 my-1 bg-black rounded-sm"/>
                    </>
                }
                {ham &&
                    <>
                        <div className="w-full h-1 my-1 rotate-45 translate-y-2 bg-black rounded-sm"/>
                        <div className="w-full h-1 my-1 -rotate-45 bg-black rounded-sm"/>
                        <div className="fixed w-40 h-auto rounded-lg right-24 top-15 bg-yellow-darker">
                            <ul className="flex flex-wrap">
                                <li className="w-40 h-10 py-2 text-xl text-center text-black" onClick={params === `/${params.uid}` ? () => navigate() : () => navigate(`/${params.uid}`)}>
                                    Home
                                </li>
                                <li className="w-40 h-10 py-2 text-xl text-center text-black" onClick={params === `/${params.uid}/foods` ? () => navigate(): () => navigate(`/${params.uid}/foods`)}>
                                    Foods
                                </li>
                                <li className="w-40 h-10 py-2 text-xl text-center text-black" onClick={params === `/${params.uid}/drinks` ? () => navigate(): () => navigate(`/${params.uid}/drinks`)}>
                                    Drinks
                                </li>
                                <li className="w-40 h-10 py-2 text-xl text-center text-black" onClick={params === `/${params.uid}/desserts` ? () => navigate(): () => navigate(`/${params.uid}/desserts`)} >
                                    Desserts
                                </li>
                                <li className="w-40 h-10 py-2 text-xl text-center text-black" onClick={params === `/${params.uid}/profile` ? () => navigate(): () => navigate(`/${params.uid}/profile`)}>
                                    Profile
                                </li>
                                {
                                    params.uid === 'user' ? 
                                    <li onClick={() => navigate('/login')} className="w-40 h-10 py-2 text-xl text-center text-black">
                                        Sign In
                                    </li> : 
                                    <li onClick={() => setClicked(true)} className="w-40 h-10 py-2 text-xl text-center text-black">
                                        Sign Out
                                    </li>
                                }
                            </ul>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
