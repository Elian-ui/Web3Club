import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 Club Africa | HomePage',
  description: `Embark on the forefront of Web3 innovation in Africa. Dive into limitless opportunities, 
  overcoming dynamic challenges within the Web3 landscape. 
  Network with visionary leaders in the African Web3 community.`
}


export const dynamic = 'force-dynamic'
import HomePage from './HomePage'
import FooterBottom from './_comps/FooterBottom'

export default function Home() {
  return (
    <main>

      <HomePage />
      <FooterBottom />

    </main>
  )
}
