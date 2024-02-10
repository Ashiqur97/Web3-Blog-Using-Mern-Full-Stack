/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react"
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider } from "firebase/auth";

export default function OAuth() {
    const handleGoogleClick = async() => {
        const provider = new GoogleAuthProvider();
    }
  return (
    <Button type="button" gradientDuoTone="blue" outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle size={24} />
        Login With Google
    </Button>
  )
}
