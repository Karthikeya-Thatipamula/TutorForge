import ComapanionList from '@/components/ComapanionList'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 >Popular Companions</h1>

      <section className="home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>

      <section className="home-section">
        <ComapanionList/>
        <CTA/>
      </section>
    </main>
  )
}

export default Page