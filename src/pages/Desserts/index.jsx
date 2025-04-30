import axios from "axios";
import { useEffect, useState } from "react"
import { MenuCard, AlertSuccess, Cart, Gap, SelectInput, ArrowUp } from "../../components";
import { CartIcon } from "../../assets";

export default function Desserts({mainCart}) {
    const [desserts, setDesserts] = useState([]);
    const [iceCreams, setIceCreams] = useState([]);
    const [cakes, setCakes] = useState([]);
    const [puddings, setPuddings] = useState([]);
    const [Check, setCheck] = useState('');
    const [success, setSuccess] = useState(false);

    function handleCart(id) {
        const addedItems = mainCart.filter(menu => {
            return menu._id === id;
        })
        
        if(addedItems.length !== 0) {
            return
        }
        
        const cartItems = desserts.filter(dessert => {
            return dessert._id === id
        });

        mainCart.push(cartItems[0]);
        setSuccess(true);
    }

    useEffect(() => {
        axios.get(`https://burgerhood-api.vercel.app/v1/menu/getIceCreams`)
        .then(result => {
            setIceCreams(result.data.data);
            axios.get(`https://burgerhood-api.vercel.app/v1/menu/getCakes`)
            .then(result => {
                setCakes(result.data.data);
                axios.get(`https://burgerhood-api.vercel.app/v1/menu/getPuddings`)
                .then(result => {
                    setPuddings(result.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        });

        function ConcatDesserts(a, b, c) {
            if(Check === '') {
                const allDesserts = a.concat(b.concat(c));
                setDesserts(allDesserts);
            } else if(Check === 'ice-cream') {
                const allDesserts = a;
                setDesserts(allDesserts);
            } else if(Check === 'cake') {
                const allDesserts = b;
                setDesserts(allDesserts);
            } else if(Check === 'pudding') {
                const allDesserts = c;
                setDesserts(allDesserts);
            }
        }

        ConcatDesserts(iceCreams, cakes, puddings)
    }, [iceCreams, cakes, puddings, Check])
    
    if(desserts.length !== 0) {
        return (
            <>
            <div className="w-full bg-yellow-darker">
                <div className="flex flex-row flex-wrap items-center w-4/5 h-auto px-10 m-auto justify-evenly bg-slate-100">
                    <Gap height={'80px'} />
                    <SelectInput optionArray={['ice-cream', 'cake', 'pudding']} onChange={e => setCheck(e.target.value)} style={{backgroundColor: "#ffd466", border: "none"}} />
                    {success && <AlertSuccess text={'Item added to cart!'} /> }
                    {desserts.map(dessert => {
                        return <MenuCard 
                        key={dessert._id} 
                        name={dessert.name} 
                        price={dessert.price} 
                        caption={dessert.caption} 
                        image={`https://burgerhood-api.vercel.app/${dessert.image}`}
                        id={dessert._id}
                        handleCart={handleCart} />
                    })}
                </div>
                <ArrowUp />
                <Cart img={CartIcon} />
            </div>
            </>
        )
    }
}
