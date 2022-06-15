import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
            {src && (
                <Image className="rounded-full"
                    src={src}
                    width={30} height={30} alt="profile"
                    objectFit="contain"
                />
            )}
            {Icon && (
                <Icon className="h-8 text-blue-500" />
            )}
            <h3 className="hidden sm:inline-flex font-medium">{title}</h3>
        </div>
    );
}

export default SidebarRow;