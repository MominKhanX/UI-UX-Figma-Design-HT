import FreeTrail from '@/components/pricing-page-component/freetrail'
import Plan from '@/components/pricing-page-component/plan'
import Price from '@/components/pricing-page-component/price'
import PriceFaqs from '@/components/pricing-page-component/price-faqs'
import Footer from '@/components/shop-page-component/footer'
import Header from '@/components/shop-page-component/header'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
      <Header />
      <Price />
      <Plan />
      <PriceFaqs />
      <FreeTrail />
      <Footer />
    </div>
  )
}

export default PricingPage;