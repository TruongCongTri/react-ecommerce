import React from 'react'
import Header from '../components/layouts/Header'
import SubHeader from '../components/layouts/SubHeader'
import Footer from '../components/layouts/Footer'
import SubFooter from '../components/layouts/SubFooter'

export default function Cart() {
  return (
    <>
        <Header />
        <SubHeader />
        <div>
          <h1>Cart</h1>
        </div>
        <SubFooter />
        <Footer />
    </>
  )
}
