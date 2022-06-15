import Image from "next/image";
import {
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon
} from "@heroicons/react/outline"

function Post({ name, email, message, image, timestamp, postImage }) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 shadow-md rounded-t-lg">
                <div className="flex items-center space-x-2">
                    <Image className="rounded-full" src={image} width={40} height={40} alt={timestamp} />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>
                <p className="pt-4">{message}</p>

                {postImage && (
                    <div className="relative h-56 md:h-96 bg-white mt-4">
                        <Image className="rounded-xl" src={postImage} objectFit="cover" layout="fill" alt={timestamp} />
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center rounded-b-2xl bg-white text-gray-400 border-t shadow-md">
                <div className="inputIcon rounded-none rounded-bl-2xl">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like ( 0 Likes )</p>
                </div>
                <div className="inputIcon rounded-none">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Share</p>
                </div>
                <div className="inputIcon rounded-none rounded-br-2xl">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
            </div>
        </div>
    );
}

export default Post;