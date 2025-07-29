import React from 'react'
import article1 from '../assets/article1.jpg'
import article2 from '../assets/article2.jpg'
import Robert from '../assets/robert.jpg'
import Maria from '../assets/maria.jpg'

const articles = [
    {
        id: 1,
        image: article1,
        tag: 'AI & Automation',
        tagColor: 'bg-green-100 text-green-600',
        title: "Top Tech Trends for 2025: What to Expect in AI & Software",
        description: 'Discover the most promising investment opportunities for the coming year, backed by comprehensive market analysis and expert insights from our senior financial advisors.',
        author: {
            avatar: Robert,
            name: 'Robert Chen',
            title: 'Lead AI Strategist',
        },
        readTime: '8 min read',
        date: 'Dec 28, 2024',
    },
    {
        id: 2,
        image: article2,
        tag: 'SaaS Strategy',
        tagColor: 'bg-purple-100 text-purple-600',
        title: 'The Complete Guide to launching a SaaS Product',
        description: 'Step-by-step playbook on validating, designing, building, andscaling your SaaS app - based on lessons from real startup founders and our product consultants.',
        author: {
            avatar: Maria,
            name: 'Maria Rodriguez',
            title: 'SaaS Product Specialist',
        },
        readTime: '12 min read',
        date: 'Dec 26, 2024',
    },
];

const FeaturedArticles = () => {
  return (
    <>
        <section className='mt-1 py-16 px-10 bg-gray-100'>
            <div className='max-w-7xl mx-auto text-center'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
                    Featured Articles
                </h2>
                <p className='text-gray-600 mt-2 max-w-xl mx-auto px-7'>
                    Our most popular and insightful content, handpicked by our tech editors to help you stay ahead in digital innovation.
                </p>

                <div className='grid sm:grid-cols-2 gap-10 space-x-12 mt-6'>
                    {articles.map((article) => (
                        <div 
                            key={article.id}
                            className='bg-white rounded-4xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200 h-auto'
                        >
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className='w-full h-48 object-cover'
                            />

                            <div className='px-10 py-4 text-left'>
                                <span className={`text-xs font-medium px-2 rounded-full ${article.tagColor}`}>
                                    {article.tag}
                                </span>

                                <h2 className='text-2xl font-bold mt-3 text-gray-900'>
                                    {article.title}
                                </h2>

                                <p className='text-sm text-gray-600 mt-2'>
                                    {article.description}
                                </p>

                                <div className='mt-5 flex items-center justify-between text-sm text-gray-500'>
                                    <div className='flex items-center space-x-2'>
                                        <div>
                                            <img 
                                                src={article.author.avatar} 
                                                alt=""
                                                className='w-9 h-9 rounded-full inline-block' 
                                            />
                                        </div>
                                        <div>
                                            <strong         
                                                className='text-gray-700'
                                            >
                                                {article.author.name}
                                            </strong>
                                            <span 
                                                className='block text-xs'
                                            >
                                                {article.author.title}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='text-xs text-right'>
                                        {article.readTime} • {article.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturedArticles