import axios from "axios";
import { useEffect, useState } from "react"
import { MenuCard, AlertSuccess, ArrowUp, Cart, Gap, SelectInput } from "../../components";
import { CartIcon } from "../../assets";

export default function Drinks({mainCart}) {
    const [drinks, setDrinks] = useState([]);
    const [smoothies, setSmoothies] = useState([]);
    const [sodas, setSodas] = useState([]);
    const [Check, setCheck] = useState('');
    const [success, setSuccess] = useState(false);

    function handleCart(id) {
        const addedItems = mainCart.filter(menu => {
            return menu._id === id;
        })
        
        if(addedItems.length !== 0) {
            return
        }
        
        const cartItems = drinks.filter(drink => {
            return drink._id === id
        });

        mainCart.push(cartItems[0]);
        setSuccess(true);
    }

    useEffect(() => {
        axios.get(`https://burgerhood-api.vercel.app/v1/menu/getSmoothies`)
        .then(result => {
            setSmoothies(result.data.data);
            axios.get(`https://burgerhood-api.vercel.app/v1/menu/getSodas`)
            .then(result => {
                setSodas(result.data.data);
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        });

        function ConcatDrinks(a, b) {
            if(Check === '') {
                const allDrinks = a.concat(b);
                setDrinks(allDrinks);
            } else if(Check === 'smoothie') {
                const allDrinks = a;
                setDrinks(allDrinks);
            } else if(Check === 'soda') {
                const allDrinks = b;
                setDrinks(allDrinks);
            }
        }

        ConcatDrinks(smoothies, sodas)
    }, [smoothies, sodas, Check])
    
    if(drinks.length !== 0) {
        return (
            <>
            <div className="w-full bg-yellow-darker">
                <div className="flex flex-row flex-wrap items-center w-4/5 h-auto px-10 m-auto justify-evenly bg-slate-100">
                <Gap height={'80px'} />
                <SelectInput optionArray={['smoothie', 'soda']} onChange={e => setCheck(e.target.value)} style={{backgroundColor: "#ffd466", border: "none"}} />
                    {success && <AlertSuccess text={'Item added to cart!'} /> }
                    {drinks.map(drink => {
                        return <MenuCard 
                        key={drink._id} 
                        name={drink.name} 
                        price={drink.price} 
                        caption={drink.caption} 
                        image={`https://burgerhood-api.vercel.app/${drink.image}`}
                        id={drink._id}
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
