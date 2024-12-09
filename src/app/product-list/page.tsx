import Cards from '@/components/product-page-component/cards'
import Company from '@/components/product-page-component/company'
import Header from '@/components/product-page-component/header'
import Hero from '@/components/product-page-component/hero'
import Footer from '@/components/shop-page-component/footer'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Company />
        <Footer />
        <Cards />
    </div>
  )
}

export default ProductPage