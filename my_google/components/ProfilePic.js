
export default function ProfilePic({url}) {
  return (
    <img loading=' lazy' src={url} alt=' profilePic' 
        className=" rounded-full h-10 cursor-pointer animate-bounce transition duration-100 transform hover:scale-110"

    />
  )
}
