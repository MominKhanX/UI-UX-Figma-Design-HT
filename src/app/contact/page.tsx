import ContactUs from '@/components/contact-page-components/contactus'
import Office from '@/components/contact-page-components/office'
import Footer from '@/components/shop-page-component/footer'
import Header from '@/components/shop-page-component/header'
import React from 'react'

const ContactPage = () => {
  return (
    <>
        <Header />
        <ContactUs />
        <Office />
        <Footer />
    </>
  )
}

export default ContactPage