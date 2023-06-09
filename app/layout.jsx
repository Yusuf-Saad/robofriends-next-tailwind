import './globals.css';
import RobotsContextProvider from './components/RobotsContextProvider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'RoboFriends',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-center`}>
          <h1 className='text-4xl mt-4 text-white'>RoboFriends</h1>
          <RobotsContextProvider>{children}</RobotsContextProvider>
      </body>
    </html>
  )
}