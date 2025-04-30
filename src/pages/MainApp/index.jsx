import { Routes, Route, useNavigate, useParams, replace } from "react-router-dom";
import Home from "../Home";
import Drinks from "../Drinks";
import Foods from "../Foods";
import Desserts from "../Desserts";
import AddMenu from "../AddMenu";
import Profile from "../Profile";
import CartItems from "../CartItems";
import { Footer, Header } from "../../components/molecules";
import { useEffect, useState } from "react";
import AddPromo from "../AddPromo";
import { ConfirmAlert, Link } from "../../components";

export default function MainApp() {
    const [cartItems, setCartItems] = useState([]);
    const [confirm, setConfirm] = useState('');
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const uid = params.uid;

    useEffect(() => {
        if(uid === undefined) {
            navigate('/user');
        }
    }, [uid, navigate])
    
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
    }, [confirm, navigate, uid])
    
    return (
        <>
        <div className="flex flex-col h-screen">
            {clicked && <ConfirmAlert text={'Are you sure want to sign out?'} handleConfirm={setConfirm} />}
            <div className="absolute right-5 top-5 max-md:hidden">
                {params.uid === `user` ? <Link text={'Sign In'} onClick={() => navigate('/login')} style={{color: "black"}} /> : <Link text={'Sign Out'} onClick={() => setClicked(true)} style={{color: "black"}} />}
            </div>
            <Header />
            <div className="flex-1 w-full m-auto max-w-7xl">
                <Routes>
                    <Route path="/:uid?" element={<Home mainCart={cartItems} />} />
                    <Route path="/:uid?/add-menu" Component={AddMenu} />
                    <Route path="/:uid?/add-promo" Component={AddPromo} />
                    <Route path="/:uid?/drinks" element={<Drinks mainCart={cartItems} />} />
                    <Route path="/:uid?/foods" element={<Foods mainCart={cartItems} />} />
                    <Route path="/:uid?/desserts" element={<Desserts mainCart={cartItems} />} />
                    <Route path="/:uid?/cart-items" element={<CartItems CartItemsArray={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/:uid?/profile" Component={Profile} />
                </Routes>
            </div>
            <Footer />
        </div>
        </>
    )
}
