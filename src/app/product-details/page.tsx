import Footer from '@/components/footer'
import ProductDetail from '@/components/Product-Details/productDetails'
import Navbar from '@/components/product-page-component/header'
import React from 'react'

function ProductDetails() {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Footer />
    </div>
  )
}

export default ProductDetails