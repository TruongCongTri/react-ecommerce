import React from 'react'
import Header from '../components/layouts/Header'
import SubHeader from '../components/layouts/SubHeader'
import Footer from '../components/layouts/Footer'
import SubFooter from '../components/layouts/SubFooter'

import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
    console.log('Contact page');
    
  return (
    <>
        <Header />
        <SubHeader />
        <ContactForm />
        <SubFooter />
        <Footer />
    </>
  )
}
