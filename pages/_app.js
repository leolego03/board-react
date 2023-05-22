import '../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://localhost:8080",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
