import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web 3 Club Africa | HomePage',
  description: 'Join the forefront of Web3 innovation in Africa. Explore boundless opportunities and conquer challenges within the dynamic Web3 landscape. Connect with visionaries and leaders within the African Web3 community.',
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
