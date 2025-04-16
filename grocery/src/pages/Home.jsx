import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className=' my-10'>
        <Header/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}

export default Home