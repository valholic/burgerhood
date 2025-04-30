import { useEffect, useState } from "react";
import axios from 'axios';
import { MenuCard, PromoAds, AlertSuccess, Cart, ArrowUp, } from "../../components";
import { CartIcon } from "../../assets";

export default function Home({mainCart}) {
    const [menus, setMenus] = useState([]);
    const [success, setSuccess] = useState(false);

    function handleCart(id) {
        const addedItems = mainCart.filter(menu => {
            return menu._id === id;
        })
        
        if(addedItems.length !== 0) {
            return
        }
        
        const cartItems = menus.filter(menu => {
            return menu._id === id
        });

        mainCart.push(cartItems[0]);
        setSuccess(true);
    }

    useEffect(() => {
        axios.get(`https://burgerhood-api.vercel.app/v1/menu/getAllMenus`)
        .then(result => {
            setMenus(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    if(menus.length !== 0) {
        return (
            <div className="w-full bg-yellow-darker">
                <div className="flex flex-row flex-wrap items-center w-4/5 h-auto px-10 m-auto justify-evenly bg-slate-100">
                <PromoAds />
                {success && <AlertSuccess text={'Item added to cart!'} /> }
                {menus.map(menu => {
                    return <MenuCard key={menu._id} 
                    name={menu.name} 
                    price={menu.price} 
                    caption={menu.caption} 
                    image={`https://burgerhood-api.vercel.app/${menu.image}`}
                    id={menu._id}
                    cart={false}
                    handleCart={handleCart} />
                })
                }
                </div>
                <ArrowUp />
                <Cart img={CartIcon} />
            </div>
        )
    }
}
