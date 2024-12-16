import ContactUs from '@/components/contact-page-components/contactus'
import Office from '@/components/contact-page-components/office'
import Footer from '@/components/shop-page-component/footer'
import Header from '@/components/shop-page-component/header'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ContactUs />
      <Office />
      <Footer />
    </div>
  )
}

export default ContactPage