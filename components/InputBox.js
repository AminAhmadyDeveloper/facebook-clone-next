import Image from "next/image";
import { useSession } from "next-auth/react"
import { collection, store, addDoc, updateDoc, documentRef, serverTimestamp, bucketRef, storage, getDownloadURL, uploadString } from "./../firebase"
import {
    EmojiHappyIcon,
    CameraIcon,
    VideoCameraIcon,
} from "@heroicons/react/solid"
import { useRef, useState } from "react"

function InputBox() {
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        addDoc(collection(store, 'posts'), {
            message: inputRef.current.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: serverTimestamp(),
        }).then(post => {
            if (imageToPost) {
                const uploadTask = uploadString(bucketRef(storage, `posts/${post.id}`), imageToPost, "data_url")
                uploadTask.then(image => {
                    getDownloadURL(image.ref).then(downloadUrl => {
                        updateDoc(documentRef(store, post.path), {
                            postImage: downloadUrl,
                        })
                        removeImageFromPost();
                    })
                })
            }
        })

        inputRef.current.value = "";
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }

    const removeImageFromPost = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image className="rounded-full"
                    src={session?.user?.image}
                    width={40} height={40}
                    alt="profile"
                    objectFit="contain"
                />
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        type="text"
                        ref={inputRef}
                        placeholder={`What's on your mind ${session?.user?.name} ?`}
                    />
                    <button hidden onClick={sendPost}>Submit</button>
                </form>
                {imageToPost && (
                    <div onClick={removeImageFromPost} className="flex flex-col cursor-pointer filter hover:brightness-110 transition duration-150 hover:scale-105">
                        <Image className="rounded-xl" src={imageToPost} alt="post-image" objectFit="cover" height={60} width={100} />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon hover:bg-red-50">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div className="inputIcon hover:bg-yellow-50">
                    <EmojiHappyIcon className="h-7 text-yellow-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
                <div onClick={() => { filePickerRef.current.click() }} className="inputIcon hover:bg-green-50">
                    <CameraIcon className="h-7 text-green-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filePickerRef} onChange={addImageToPost} hidden type="file" />
                </div>
            </div>
        </div>
    );
}

export default InputBox;