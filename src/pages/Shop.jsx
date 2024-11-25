import React from 'react'
import Header from '../components/layouts/Header'
import SubHeader from '../components/layouts/SubHeader'
import Footer from '../components/layouts/Footer'
import SubFooter from '../components/layouts/SubFooter'

import Sorting from '../components/products/Sorting'
export default function Shop() {
  return (
    <>
        <Header />
        <SubHeader />
        <div>
        <Sorting />
          <h1>Shop</h1>
        </div>
        <SubFooter />
        <Footer />
    </>
  )
}
