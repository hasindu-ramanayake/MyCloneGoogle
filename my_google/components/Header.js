
import ProfilePic from './ProfilePic'
import {ViewGridIcon} from '@heroicons/react/solid'

export default function Header() {
  return (
      <div className=' flex space-x-4 p-5 items-center justify-end'>
        <a className=' link' href='https://mail.google.com/mail/u/0/?ogbl'>Gmail</a>
        <a className=' link' href='https://www.google.lk/imghp?hl=en&authuser=0&ogbl '>Image</a>
        <ViewGridIcon className=' h-10 w-10 p-2 rounded-full hover:bg-gray-300 cursor-pointer'/>
        <ProfilePic  url= "https://lh3.googleusercontent.com/a/AEdFTp78HMYwVTwfP3pTCx3EePT1paMRIxOsJlcgsbIdZQ=s32"/>
      </div>
  )
}
