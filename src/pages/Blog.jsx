// src/pages/BlogPage.jsx
import React from 'react';
import Header from '../components/Blog/Header';
import HeroSection from '../components/Blog/HeroSection';
import CategoryFilter from '../components/Blog/CategoryFilter';
import FeaturedArticles from '../components/Blog/FeaturedArticles'
import LatestArticles from '../components/Blog/LatestArticles'
import Sidebar from '../components/Blog/Sidebar';
import NewsletterCTA from '../components/Blog/NewsletterCTA';
import Footer from '../components/Blog/Footer';
import '../index.css'; // Ensure your Tailwind CSS is imported here

const Blog = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col">
                <HeroSection />
                <CategoryFilter />
                {/* Featured Articles now takes full width */}
                <FeaturedArticles />

                {/* New grid container for Latest Articles and Sidebar */}
                <div className="w-9/10 mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-9">
                    <div className="lg:col-span-2"> {/* Latest Articles takes 2/3 width on large screens */}
                        <LatestArticles />
                    </div>
                    <div className="lg:col-span-1"> {/* Sidebar takes 1/3 width on large screens */}
                        <Sidebar />
                    </div>
                </div>

                <NewsletterCTA />
            </main>
            <Footer />
        </div>
    );
}

export default Blog;