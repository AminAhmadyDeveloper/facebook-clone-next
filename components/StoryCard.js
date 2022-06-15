import Image from "next/image";

function StoryCard({ name, src, profile }) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 hover:scale-105">
            <Image className="absolute opacity-0 lg:opacity-100 rounded-full z-20 top-10"
                src={profile}
                width={40} height={40}
                objectFit="cover" layout="fixed"
                alt="story-profile"
            />
            <Image className="filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
                objectFit="cover"
                alt="story-content"
            />
            <h5 className="hidden lg:inline absolute bottom-5 left-2 font-semibold text-white">{name}</h5>
        </div>
    );
}

export default StoryCard;