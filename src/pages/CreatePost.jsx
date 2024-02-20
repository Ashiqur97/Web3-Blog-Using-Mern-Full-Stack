import { Select, TextInput,FileInput, Button } from "flowbite-react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { getStorage,ref,uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";

export default function CreatePost() {
    const [file,setFile] = useState(null);
    const [imageUploadProgress,setImageUploadProgress] = useState(null);
    const [imageUploadError,setImageUploadError] = useState(null);

    const handleUploadImage = async() => {
        try {
            if(!file) {
                setImageUploadError('Please select an image to upload');
                return;
            }
            setImageUploadError(null);
            // eslint-disable-next-line no-unused-vars
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageUploadProgress(progress.toFixed(0));
                }
            )
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
        <form className="flex flex-col gap-4">
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
            />
                <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='javascript'>Web3 Basic</option>
            <option value='reactjs'>Defi && Ethereum</option>
            <option value='nextjs'>Smart Contract Security Audit</option>
                </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                <FileInput 
                type='file' 
                accept='image/*' 
                onChange={(e) => setFile(e.target.files[0])}
                />
                <Button 
                type="button" 
                gradientDuoTone='purpleToBlue'
                size='sm'
                outline
                onClick={handleUploadImage}
                 > Upload Image</Button>
            </div>
            <ReactQuill theme="snow" placeholder="Write Something" 
            className='h-72 mb-12' required />
            <Button type="submit" gradientDuoTone='purpleToBlue'>Publish</Button>
        </form>
    </div>
  )
}
