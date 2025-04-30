import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { AddImage } from "../../components/molecules";
import { Button, Link } from "../../components";

export default function Profile() {
    const [image, setImage] = useState(null);
    const [profile, setProfile] = useState('');
    const [clicked, setClicked] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    function handleChange(e) {
        setImage(e.target.files[0]);
    }

    function onSubmit() {
        const data = new FormData();
        data.append('profile', image);
        data.append('uid', params.uid);

        axios.post(`https://burgerhood-api.vercel.app/v1/auth/addProfile`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        const data = new FormData();
        data.append('uid', params.uid);

        axios.post(`https://burgerhood-api.vercel.app/v1/auth/fidacc`, data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(result => {
            setName(result.data.data.name);
            setProfile(result.data.data.profile);
            setStatus(result.data.data.status);
        })
        .catch(err => {
            console.log(err)
        })
    }, [params])

    return (
        <>
        <div className="w-full h-screen bg-yellow-darker font-Lilita-one">
            {clicked && <AddImage handleChange={handleChange} handleConfirm={setClicked} onSubmit={onSubmit} />}
            <div className="w-1/2 h-screen m-auto bg-slate-100">
                <div className="w-full h-1/4 bg-custom-image">
                </div>
                <div className="w-40 h-40 m-auto -mt-20 overflow-hidden leading-[160px] text-center rounded-full bg-white">
                    {profile !== undefined && <img src={`https://burgerhood-api.vercel.app/${profile}`} />}
                    {profile === undefined && <Link text={'Add image'} onClick={() => setClicked(true)} />}
                </div>
                <div className="my-2 text-4xl text-center">
                    {name}
                </div>
                <div className="font-sans text-base text-center">
                    ID: {params.uid} 
                </div>
                {status === 'admin' && 
                <div className="flex gap-2 m-auto mt-5 w-60">
                    <Button name={'Add menu'} onClick={() => navigate(`/${params.uid}/add-menu`)} style={{width: "100px"}} />
                    <Button name={'Add promo'} onClick={() => navigate(`/${params.uid}/add-promo`)} style={{width: "100px"}} />
                </div>}
            </div>
        </div>
        </>
    )
}
