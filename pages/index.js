import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'

const Index = (props) => (
       <Layout >
           <h1>Batma TV Shows</h1>
           <ul>
               {props.shows.map(({show})=> (
                   <li>
                       <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                       </Link>
                   </li>
               ))
               }
           </ul>
       </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
    
}

export default Index