// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import Footer from './src/component/Fooer'
import Top from './src/component/Top'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div style={{margin:"0 auto", width:1000}}>

   <Top/>
  <Component {...pageProps} />
  <Footer/>
    </div>
    </>
  )
}

