import { useState } from "react";
import { Button, Gap, InputImage, Link, TextInput } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddPromo() {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    function handleImage(e) {
        setImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    }

    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('imagePromo', image);

        axios.post(`https://burgerhood-api.vercel.app/v1/promo/addPromo`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(result => {
            navigate(-1);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="w-1/2 h-auto min-h-screen m-auto bg-yellow-100 font-Lilita-one right-1/4">
            <form onSubmit={onSubmit}>
                <Gap height={'170px'} />
                <p className="text-3xl text-center">Add the new promo!</p>
                <Gap height={'20px'} />
                <TextInput name={"promo's name"} placeholder={"Promo's name..."} onChange={e => setName(e.target.value)} />
                <Gap height={'20px'} />
                <InputImage onChange={e => handleImage(e)} img={imagePreview} style={{ width: "250px", height: "150px", marginInline: "10%" }} />
                <Gap height={'20px'} />
                <Button name={'Submit'} type={'submit'} />
                <Gap height={'20px'} />
                <Link text={'Back'} onClick={() => navigate(-1)} />
            </form>
        </div>
    )
}
