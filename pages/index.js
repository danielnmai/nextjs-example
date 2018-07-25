import Link from "next/link"
const Index = () => (
    <div>
        <Link href="/about" >
            <button>About</button>
        </Link>
        {/* <a href="/about"> About Server-Side</a> */}
        <div>
            <p> Hello Next </p>
        </div>
    </div>  
)
export default Index