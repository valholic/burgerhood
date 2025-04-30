import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Gap, InputImage, Link, SelectInput, Textarea, TextInput } from "../../components/atoms";

export default function AddMenu() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [caption, setCaption] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting form data");

        const data = new FormData();
        data.append('name', name);
        data.append('price', price);
        data.append('caption', caption);
        data.append('type', type);
        data.append('image', image);

        console.log("FormData:", Array.from(data.entries()));

        axios.post('https://burgerhood-api.vercel.app/v1/menu/addMenu', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(result => {
            console.log("Response:", result);
            navigate(-1);
        })
        .catch(err => {
            console.error("Error:", err);
        });
    }

    return (
        <div className="w-1/2 h-auto min-h-screen m-auto bg-yellow-100 font-Lilita-one right-1/4">
            <Gap height={'20px'} />
            <p className="text-3xl text-center">Add the new menu!</p>
            <form onSubmit={handleSubmit}>
                <Gap height={'20px'} />
                <TextInput 
                    name={"menu's name"} 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder={"Menu's name"} 
                    required
                />
                <Gap height={'20px'} />
                <InputImage  
                    onChange={handleImageChange} 
                    required
                    img={imagePreview}
                    style={{ width: "150px", height: "150px", marginInline: "10%" }}
                />
                <Gap height={'20px'} />
                <Textarea 
                    name={'caption'}
                    placeholder={'Write the caption here...'} 
                    value={caption} 
                    onChange={e => setCaption(e.target.value)}
                    required
                />
                <Gap height={'20px'} />
                <SelectInput  
                    onChange={e => setType(e.target.value)} 
                    optionArray={['burger', 'ice-cream', 'side-dish', 'pudding', 'cake', 'soda', 'smoothie']}
                    required
                />
                <Gap height={'20px'} />
                <TextInput  
                    name={'Price'} 
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                    required
                    placeholder={'Price...'} 
                />
                <Gap height={'20px'} />
                <Button name={'Submit'} onClick={handleSubmit} />
                <Gap height={'20px'} />
                <Link text={'Back'} onClick={() => navigate(-1)} />
            </form>
        </div>
    )
}
