import { useEffect, useState } from "react";
import { MenuCard, Payment, ArrowUp, Button, ConfirmAlert, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

export default function CartItems({CartItemsArray, setCartItems}) {
    const [items, setItems] = useState([]);
    const [alert, setAlert] = useState(false);
    const [confirm, setConfirm] = useState('');
    const [currentId, setCurrentId] = useState('');
    const [pay, setPay] = useState(false);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    
    function handlePayment() {
        setCartItems([]);
        setPay(false);
    } 

    useEffect(() => {
        function OnCart() {
            setItems(CartItemsArray);
        };
        OnCart();
    }, [CartItemsArray])

    useEffect(() => {
        const priceArray = CartItemsArray.map(item => {
            return (Number(item.price) * 1000);
        });

        const totalPrice = priceArray.reduce((a, b) => a + b, 0);
        if(totalPrice.toString().length > 6) {
            setTotal(totalPrice / 1000000)
        } else {
            setTotal(totalPrice / 1000);
        }

        function DeleteItem(id) {
            let index
            CartItemsArray.filter((item, i) => {
                if(item._id === id) {
                    index = i
                    CartItemsArray.splice(index, 1);
                }
            });
        }
        
        if(confirm === 'yes') {
            setConfirm('');
            DeleteItem(currentId);
            setAlert(false);
        } else if(confirm === 'no') {
            setConfirm('');
            setAlert(false);
        } else if(confirm === '') {
            return
        }
    }, [confirm, currentId, CartItemsArray, pay])
    
    return (
        <div className="w-full bg-yellow-darker font-Lilita-one">
            <div className="flex flex-row flex-wrap w-4/5 h-auto min-h-screen px-10 m-auto justify-evenly bg-slate-100">
                {alert && <ConfirmAlert text={'Are you sure to cancel this order?'} handleConfirm={setConfirm} />}
                {pay && <Payment handlePayment={handlePayment} text={'Choose payment methods!'} setPay={setPay} total={total} />}
                <div className="w-full mt-5">
                    <Link text={'Back'} onClick={() => navigate(-1)} />
                </div>
                    {items.length !== 0 ? items.map(item => {
                        return <MenuCard
                        key={item._id}
                        name={item.name}
                        caption={item.caption}
                        price={item.price}
                        image={`https://burgerhood-api.vercel.app/${item.image}`}
                        cart={true}
                        id={item._id}
                        setAlert={setAlert}
                        handleId={setCurrentId} />
                    }) : "You haven't order yet!"}
                {items.length !== 0 && <div className="w-full">
                    <Button name={'Pay!'} style={{width: "150px"}} onClick={() => setPay(true)} />
                    <Gap height={'20px'} />
                </div>}
            </div>
            <ArrowUp />
        </div>
    )
}
