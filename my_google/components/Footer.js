import Link from "next/link";

export default function Footer() {
  return (
    <footer className="  bg-[#f2f2f2]" >
      <div className=" justify-center items-center border-b border-b-slate-300">
        <p className="font-serif text-sm px-8 py-3 text-gray-500">Sri Lanka</p>
      </div>
      <div className=" flex flex-col md:flex-row justify-between mx-6">
        <div className=' flex items-center justify-center md:justify-start' > 
          <Link className=" linkF" href="https://about.google/?utm_source=google-LK&utm_medium=referral&utm_campaign=hp-footer&fg=1" >About</Link>
          <Link className=" linkF" href="https://www.google.com/intl/en_lk/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" >Advertising</Link>
          <Link className=" linkF" href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1" >Business</Link>
          <Link className=" linkF" href="https://google.com/search/howsearchworks/?fg=1" >How Search works</Link>
        </div>
        <div className=' flex items-center justify-center md:justify-end' >
          <Link className=" linkF" href="https://policies.google.com/privacy?hl=en-LK&fg=1" >Privacy</Link>
          <Link className=" linkF" href="https://policies.google.com/terms?hl=en-LK&fg=1" >Terms</Link>
          <Link className=" linkF" href="#" >Settings</Link>
        </div>
      </div>  
    </footer>
  )
}








