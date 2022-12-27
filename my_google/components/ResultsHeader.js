import { CogIcon, MapIcon, PhotographIcon, PlayIcon, SearchCircleIcon } from "@heroicons/react/outline";
import { CameraIcon, DotsVerticalIcon, MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";
import HeaderOptionLine from "./HeaderOptionLine";
import { useRouter } from "next/router";
import { useRef } from "react";
import ProfilePic from "./ProfilePic";

export default function ResultsHeader() {

    const searchRoute = useRouter();
    const searchRef = useRef(null);
  
    const onSearch = (e) => {
      e.preventDefault();
      const searchValue = searchRef.current.value;
      if ( !searchValue) return;
      searchRoute.push(`search?term=${searchValue}`);
    }


  return (
        <div className=' flex flex-col'>
            <div className=' flex items-center '>
                <Image 
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                        alt="Google logo" 
                        width={92} height={30}
                        className ='mx-7 items-center justify-center' />
                <div className=' flex flex-grow items-center m-4 pr-5'>
                    <form onSubmit={onSearch} className=" flex flex-grow items-center border rounded-full justify-center px-3 w-3/6 max-w-xl
                                        py-1 hover:shadow-lg focus-within:shadow-lg focus-within:max-w-4xl">
                        <input ref={searchRef} className=" px-4 py-1 flex-grow outline-none "/>
                        <MicrophoneIcon className=" h-5 m-2"/>
                        <CameraIcon className=" h-5 m-2 "/>
                        <SearchIcon className=" h-5 m-2"/>
                    </form>
                </div>
                <div className='hidden lg:flex items-center justify-center m-7 px-6 '>
                    <CogIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-300 cursor-pointer sm:visible' />
                    <ViewGridIcon className=' h-10 w-10 p-2 rounded-full hover:bg-gray-300 cursor-pointer sm:visible'/>
                    <ProfilePic className='hidden md:visible'  url= "https://lh3.googleusercontent.com/a/AEdFTp78HMYwVTwfP3pTCx3EePT1paMRIxOsJlcgsbIdZQ=s32"/>
                </div>
            </div>
            <div className='border-b'>
                <HeaderOptionLine />
            </div>
        </div>
  )
}
