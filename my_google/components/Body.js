import { SearchIcon } from "@heroicons/react/outline";
import { CameraIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";


export default function Body( ) {
  const searchRoute = useRouter();
  const searchRef = useRef(null);

  const onsearch = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    if ( !searchValue) return;
    searchRoute.push(`search?term=${searchValue}`);
  }

  return (
    <div className=" flex flex-col items-center flex-grow ">
        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width={300} height={100} />
        <form onSubmit={onsearch} className=" flex flex-row items-center border rounded-full justify-center px-3 w-5/6 max-w-2xl
                            py-1 mt-5 mb-2 hover:shadow-lg focus-within:shadow-lg ">
            <SearchIcon className=" h-4"/>   
            <input ref={searchRef} className=" px-4 py-1 flex-grow outline-none "/>
            <MicrophoneIcon className=" h-5 m-2"/>
            <CameraIcon className=" h-5 m-2 "/>
        </form>  
        <div className="flex flex-row m-2">
            <button onClick={onsearch} type="submit" className=" btn" >Google Search</button>
            <button type="submit" className=" btn" >I'm Feeling Luck</button>
        </div>
    </div>
  )
}
