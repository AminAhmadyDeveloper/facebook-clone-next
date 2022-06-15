import Image from "next/image";
import { useSession, signOut } from "next-auth/react"
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import facebook from "./../assets/images/facebook.png";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src={facebook}
          alt="facebook"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-xl bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            placeholder="Search Facebook"
            className="hidden md:inline-flex flex-shrink items-center ml-2 bg-transparent outline-none placeholder-gray-500"
            type="text"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2 items-center">
            <HeaderIcon Icon={HomeIcon} active={true}/>
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image onClick={signOut} className="rounded-full cursor-pointer" src={session?.user?.image} width={40} height={40} alt="profile" objectFit="contain"/>
        <p className="font-semibold whitespace-nowrap pr-3">{session?.user?.name}</p>
        <ViewGridAddIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
}
