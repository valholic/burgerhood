import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AlertError, Button, Gap, Link, TextInput } from "../../components/atoms";

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onSubmit(e) {
        e.preventDefault()
        const data = new FormData();
        data.append('name', name);
        data.append('password', password);

        axios.post(`https://burgerhood-api.vercel.app/v1/auth/facc`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(result => {
            navigate(`/${result.data.data[0]._id}`);
        })
        .catch(err => {
            setError(err.response.data.message);
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
                {error !== '' && <AlertError text={error} />}
                <Gap height={'20px'} />
                <TextInput name={'Full name'} value={name} onChange={e => setName(e.target.value)} placeholder={'Full name'} minLength={'5'} required />
                <Gap height={'20px'} />
                <TextInput name={'Password'} value={password} onChange={e => setPassword(e.target.value)} placeholder={'Password'} type={'password'} minLength={'8'} required />
                <Gap height={'20px'} />
                <Button name={'Submit'} type={'submit'} />
                <Gap height={'20px'} />
                <Link text={'Don\'t have account? Register here!'} onClick={() => navigate('/register')} />        
            </form>
            </div>
        </div>
        </>
    )
}
