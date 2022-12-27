
export default function HeaderOptions({Icon , title , selected}) {
  return (
        <div className='flex space-x-4 '>
            <div className='flex items-center hover:cursor-pointer hover:underline hover:decoration-blue-600'>
                <Icon className='h-4 px-1'/>
                <p className=''>{title}</p>
            </div>
        </div>
  )
}
