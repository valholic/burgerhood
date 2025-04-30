import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Gap, Link, TextInput } from "../../components/atoms";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const status = 'user';
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        data.append('status', status);

        console.log(data)

        axios.post(`https://burgerhood-api.vercel.app/v1/auth/cacc`, data, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        .then(result => {
            navigate('/login');
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <>
        <div className="static w-screen h-screen bg-repeat-round bg-custom-image">
            <div className="absolute z-10 w-1/2 h-screen bg-yellow-100 font-Lilita-one right-1/4">
            <form onSubmit={onSubmit}>
                <Gap height={'170px'} />
                <p className="text-3xl text-center">Log In to Your Account!</p>
                <Gap height={'20px'} />
                <TextInput name={'Full name'} value={name} onChange={e => setName(e.target.value)} placeholder={'Full name'} minLength={'5'} required />
                <Gap height={'20px'} />
                <TextInput name={'Email'} value={email} onChange={e => setEmail(e.target.value)} placeholder={'Email'} type={'email'} required />
                <Gap height={'20px'} />
                <TextInput name={'Password'} value={password} onChange={e => setPassword(e.target.value)} placeholder={'Password'} minLength={'8'} type={'password'} required />
                <Gap height={'20px'} />
                <Button name={'Submit'} type={'submit'} />
                <Gap height={'20px'} />
                <Link text={'Already have account? Log in here!'} onClick={() => navigate('/login')} />        
            </form>
            </div>
        </div>
        </>
    )
}
