import Image from "next/image";

function Contact({ name, profile }) {
    return (
        <div className="flex relative items-center p-2 space-x-2 bg-white hover:bg-gray-100 rounded-xl mb-2 cursor-pointer">
            <Image className="rounded-full" src={profile} alt={name} width={40} height={40} objectFit="contain"/>
            <h2 className="text-sm xl:text-xl">{name}</h2>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
        </div>
    );
}

export default Contact;