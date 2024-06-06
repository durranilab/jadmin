import React, {useState} from 'react';
import TextInput from "../comps/TextInput";
import PrimaryButton from "../comps/PrimaryButton";
import SecondaryButton from "../comps/SecondaryButton";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const clearAll = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <div className={'contain-layout h-screen '}>
            <div className={'flex flex-col bg-gray-100 rounded-2xl m-8 p-6 py-24 my-24'}>
                <h1 className={'text-3xl mx-auto'}>Login Hi</h1>

                <div className={'mx-auto py-12'}>

                    <div className={'flex gap-2 items-center'}>
                        <TextInput type={'text'}
                                   id={'email'}
                                   value={email}
                                   onChange={(e) => {
                                       setEmail(e.target.value)
                                   }}
                                   placeholder={'Email'}
                                   name={'email'}
                                   required={true}/>
                    </div>

                    <div className={'flex gap-2 mt-2 items-center'}>
                        <TextInput type={'password'}
                                   id={'password'}
                                   value={password}
                                   onChange={(e) => {
                                       setPassword(e.target.value)
                                   }}
                                   placeholder={'Password'}
                                   name={'password'}
                                   required={true}/>
                    </div>

                    <div className={'flex  gap-2 mt-2 items-center justify-between py-4'}>
                        <PrimaryButton text={'Login'}/>
                        <SecondaryButton text={'Clear'} onClick={clearAll}/>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Login;
