import React from 'react';
import './sign-in.styles.scss';
import { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle,authentication} from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
const defaultFormFields = {
    email: '',
    password: '',
}

export default function SignIn(){
    const [form,setForm] = useState(defaultFormFields);
    const { email, password } = form;
    const handleChange = e =>{
        const {name,value} = e.target;
        setForm({...form,[name]:value})

    }
    const formEraser = () => {
        setForm(defaultFormFields);
    }
     
    const handleSubmit = async e => {
        e.preventDefault();
        try{
         await signInWithEmailAndPassword(authentication,email, password);
         formEraser();

        }catch(e){
            console.log(e.message);
        }

    }
    return(
        <div className='sign-in'>
            <h2 className='title'>Already have an account</h2>
            <span>Sign in With your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="email" onChange={handleChange} type="email" name='email'  value={email} />
                <FormInput label="password" type="password" name='password' onChange={handleChange} value={password} />
                <div className="buttons">
                      <CustomButton type="submit">Sign In</CustomButton>
                      <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>

            </form>
            <div style={{margin : 10}}/>
          
        </div>
    )
}