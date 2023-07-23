import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { authentication,createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState} from 'react';

const formInput = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
export default function SignUp()
{
    const [form,setForm] = useState(formInput);
    const {displayName,email,password,confirmPassword} = form;
    
    const handleChanges = e => {
        const {name,value} = e.target;
        setForm({...form,[name]:value})

    }
    
    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(password!==confirmPassword){
            alert('Password does not match');
            return;
        }
        try{
            
           await createUserWithEmailAndPassword(authentication,email,password).then(async (userCredential)=>{
            const {user} = userCredential;
            const {email,uid} = user;
            await createUserProfileDocument(email,uid,displayName);


           });

            
        
            
           
            //setUser('');
            
        }catch(e){
            console.log(e);
        }

    }
    return(
        <div className="sign-up">
            <h2 className="title">I do not have a account.</h2>
            <span>Sign Up with Your Email and Password.</span>
            
           <form  onSubmit={handleSubmit}>
           <FormInput name="displayName" type="text" 
           label="Display Name" required onChange={handleChanges} value={displayName}  />
            
            <FormInput name="email" type="email" label="Email" onChange={handleChanges}  value={email} required />
           
            <FormInput name="password" type="password" label="Password" onChange={handleChanges} value={password} required />
           
            <FormInput name="confirmPassword" type="password" label="Password" onChange={handleChanges} value={confirmPassword} required/>

            <CustomButton type="submit" value="Submit" >Sign Up</CustomButton>
           </form> 
            
        </div>
    )
}