import HeaderOptions from "./HeaderOptions";
import { MapIcon, PhotographIcon, PlayIcon, SearchCircleIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";

export default function HeaderOptionLine() {
  return (
    <div className= 'flex justify-evenly md:justify-start md:pl-44'>
        <div className=' flex space-x-4 '>
                <HeaderOptions Icon={SearchCircleIcon} title="All" ></HeaderOptions>
                <HeaderOptions Icon={PhotographIcon} title="Images" ></HeaderOptions>
                <HeaderOptions Icon={PlayIcon} title="Videos" ></HeaderOptions>
                <HeaderOptions Icon={MapIcon} title="Maps" ></HeaderOptions>
                <HeaderOptions Icon={DotsVerticalIcon} title="More" ></HeaderOptions>
        </div>
        <div className='px-3 md:flex-grow md:ml-32 lg:'>
            <p className=''> Tools</p>
        </div>
    </div>
  )
}
