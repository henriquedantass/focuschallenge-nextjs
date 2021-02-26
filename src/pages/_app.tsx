import '../styles/global.css';


import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountDownContext';



function MyApp({ Component, pageProps }) {
  return (
     
           <Component {...pageProps} /> 
  
  )

}

export default MyApp


