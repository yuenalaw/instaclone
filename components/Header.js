import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Header() {
    const { data: session } = useSession(); //rename it as "session"
    const router = useRouter();

    //for read only values you can jsut do 
    /**
     * const open = useRecoilValue(modalState);
     */
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div onClick={()=> router.push("/")} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src="https://links.papareact.com/ocw" 
                    layout="fill"
                    objectFit="contain"/>
                </div>
                <div onClick={()=> router.push("/")} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src="https://links.papareact.com/jjm" 
                    layout="fill"
                    objectFit="contain"/>
                </div>
                {/* Middle; search input field */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm 
                        border-gray-300 rounded-md focus:ring-black focus:border-black" placeholder="Search" type="text"/>
                    </div>
                </div>

                {/* Right */}

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={()=>router.push("/")} className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>
                    {session ? (
                        <>
                        <div className="relative navBtn">
                            <PaperAirplaneIcon className="navBtn rotate-45"/>
                            <div className="absolute -top-0.5 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex item-center justify-center animate-pulse text-white">
                                Y
                            </div>
                        </div>
                        <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>
                        <UserGroupIcon className="navBtn"/>
                        <HeartIcon className="navBtn"/>
                        <img src={session?.user?.image} 
                        onClick={signOut}
                        alt="profile pic" 
                        className="h-8 w-8 rounded-full cursor-pointer navBtn"/>
                        </>
                        ) : (
                            <button onClick={signIn}>Sign In</button>
                        )}
                </div>
            </div>

        </div>
    )
}
