/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react"
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { app } from "../firebase";
import { UseDispatch } from "react-redux";
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
    const auth = getAuth(app);
    const dispatch = UseDispatch();
    const handleGoogleClick = async() => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
                });
                const data = await res.json();
                if(res.ok){
                    dispatch(signInSuccess(data));
                }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle size={24} />
        Login With Google
    </Button>
  )
}
