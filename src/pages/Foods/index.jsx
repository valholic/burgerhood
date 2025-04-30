import axios from "axios";
import { useEffect, useState } from "react"
import { MenuCard, AlertSuccess, Cart, Gap, SelectInput, ArrowUp } from "../../components";
import { CartIcon } from "../../assets";

export default function Foods({mainCart}) {
    const [foods, setFoods] = useState([]);
    const [burgers, setBurgers] = useState([]);
    const [sideDishes, setSideDishes] = useState([]);
    const [Check, setCheck] = useState('');
    const [success, setSuccess] = useState(false);

    function handleCart(id) {
        const addedItems = mainCart.filter(menu => {
            return menu._id === id;
        })
        
        if(addedItems.length !== 0) {
            return
        }
        
        const cartItems = foods.filter(food => {
            return food._id === id
        });

        mainCart.push(cartItems[0]);
        setSuccess(true);

    }

    useEffect(() => {
            axios.get(`https://burgerhood-api.vercel.app/v1/menu/getBurgers`)
            .then(result => {
                setBurgers(result.data.data);
                axios.get(`https://burgerhood-api.vercel.app/v1/menu/getSideDishes`)
                .then(result => {
                    setSideDishes(result.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log(err);
            });

            function ConcatFoods(a, b) {
                if(Check === '') {
                    const allFoods = a.concat(b);
                    setFoods(allFoods);
                } else if(Check === 'burger') {
                    const allFoods = a;
                    setFoods(allFoods);
                } else if(Check === 'side-dish') {
                    const allFoods = b;
                    setFoods(allFoods);
                }
            }
    
            ConcatFoods(burgers, sideDishes);
    }, [burgers, sideDishes, Check])
    
    if(foods.length !== 0) {
        return (
            <>
            <div className="w-full bg-yellow-darker">
                <div className="flex flex-row flex-wrap items-center w-4/5 h-auto px-10 m-auto justify-evenly bg-slate-100">
                <Gap height={'80px'} />
                <SelectInput optionArray={['burger', 'side-dish']} onChange={e => setCheck(e.target.value)} style={{backgroundColor: "#ffd466", border: "none"}} />
                    {success && <AlertSuccess text={'Item added to cart!'} /> }
                    {foods.map(food => {
                        return <MenuCard 
                        key={food._id} 
                        name={food.name} 
                        price={food.price} 
                        caption={food.caption} 
                        image={`https://burgerhood-api.vercel.app/${food.image}`}
                        id={food._id}
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
