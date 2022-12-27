import Link from 'next/link';
import { useRouter } from 'next/router';
import { Result } from 'postcss'
import ResultsHeader from '../components/ResultsHeader'
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';
import { API_KEY, CONTEXT_KEY } from '../keys';
import response from '../Response';

export default function search (props) {
    const router = useRouter();

  return (
    <div>
        <header>
            <title>Google Search</title>
            <Link rel="icon" href="/favicon.ico" />
        </header>
        <header>
            <ResultsHeader />
        </header>
        <SearchResults results={props.Results} />
        <Footer />
    </div>
  )
}


export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0"

    const data = useDummyData ? response : await fetch( 
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response => response.json());

    return {
        props: {
            Results: data
        }
    };
}