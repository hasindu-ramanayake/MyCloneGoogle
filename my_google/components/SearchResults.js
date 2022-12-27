import PaginationButton from "./PaginationButton"

export default function SearchResults( {results}) {

  return (
    <div className='mx-auto w-full px-3 pl-[5%] md:pl-44 '>
        <p className= ' text-gray-600 text-md mb-5 mt-3' > About {results.searchInformation?.totalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>
        {results.items.map( (result) => {
            return (
              <div key={result.link} className = 'max-w-xl mb-8'>
                <div className='group flex flex-col'>
                  <a href={result.link} className = 'text-sm'>{result.formattedUrl}</a>
                  <a href={result.link} 
                    className=' truncate text-xl text-blue-800 font-medium group-hover:underline'>{result.title}</a>
                
                </div>
                <p className=' line-clamp-2'>{result.snippet}</p>

                
              </div>
        )}) }
        <PaginationButton />
    </div>
  )
}
