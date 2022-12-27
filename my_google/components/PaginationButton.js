import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router"


function PaginationButton() {
    const router = new useRouter();
    const startIndex = Number(router.query.start || 0);
  return (
    <div className=' flex justify-between max-w-lg text-blue-700 mb-10'>
        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`} >
                <div className=' forwardBackword'>
                    <ChevronLeftIcon className=' h-5'/>
                    <p>Previors</p>
                </div>
            </Link>
        )}

        <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
            <div className=' forwardBackword'>
                <ChevronRightIcon className=' h-5'/>
                <p>Next</p>
            </div>
        </Link>
    </div>
  )
}

export default PaginationButton