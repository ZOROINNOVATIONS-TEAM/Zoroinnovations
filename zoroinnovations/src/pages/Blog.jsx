import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryTabs from '../components/CategoryTabs'
import FeaturedArticles from '../components/FeaturedArticles'
import BlogSection from '../components/BlogSection'
import SubscribeSection from '../components/SubscribeSection'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
	  <Navbar />
	  <Hero />
	  <CategoryTabs />
	  <FeaturedArticles />
    <BlogSection />
    <SubscribeSection />
    <Footer />
    </>
  )
}

export default Blog