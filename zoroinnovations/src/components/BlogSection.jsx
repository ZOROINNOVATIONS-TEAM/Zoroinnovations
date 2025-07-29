import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';


import img1 from '../assets/blogSection/articleImages/img1.jpg'
import img2 from '../assets/blogSection/articleImages/img2.jpg'
import img3 from '../assets/blogSection/articleImages/img3.jpg'
import img4 from '../assets/blogSection/articleImages/img4.jpg'
import img5 from '../assets/blogSection/articleImages/img5.jpg'
import img6 from '../assets/blogSection/articleImages/img6.jpg'

import author1 from '../assets/blogSection/authorImage/author1.jpg'
import author2 from '../assets/blogSection/authorImage/author2.jpg'
import author3 from '../assets/blogSection/authorImage/author3.jpg'
import author4 from '../assets/blogSection/authorImage/author4.jpg'
import author5 from '../assets/blogSection/authorImage/author5.jpg'
import author6 from '../assets/blogSection/authorImage/author6.jpg'

import postImg1 from '../assets/blogSection/postImages/postImg1.jpg'
import postImg2 from '../assets/blogSection/postImages/postImg2.jpg'
import postImg3 from '../assets/blogSection/postImages/postImg3.jpg'

const articles = [
  {
    id: 1,
    title: "Web Development in 2025: Frameworks to Watch",
    desc: "React, Nest.js, Svelte? We break down the future of front-end dev and help you decide where to invest your dev time and talnt.",
    tag: "Web Development",
    tagColor: "bg-blue-100 text-blue-600",
    author: "James Wilson",
    authorImg: author1,
    date: "Dec 24, 2024",
    image: img1,
  },
  {
    id: 2,
    title: "AI Tools for Business: How to choose the right One",
    desc: "Understand the types of AI solutions (NLP, computer vision, chatbots) and how to select the best fit for your industry, budget, and goals.",
    tag: "AI & ML",
    tagColor: "bg-yellow-100 text-yellow-700",
    author: "Sarah Kim",
    authorImg: author2,
    date: "Dec 22, 2024",
    image: img2,
  },
  {
    id: 3,
    title: "Top 10 SaaS Tools to Boost Team Productivity in 2025",
    desc: "Explore the best collaboration, communication, and workflow SaaS platforms that can supercharge your team’s efficiency.",
    tag: "SaaS",
    tagColor: "bg-green-100 text-green-700",
    author: "Michael Chung",
    authorImg: author3,
    date: "Dec 20, 2024",
    image: img3,
  },
  {
    id: 4,
    title: "Digital Transformation for SMBs: A Complete Playbook",
    desc: "Learn how small and medium businesses can adopt scalable tech solutions without blowing the budget.",
    tag: "Digital product strategy",
    tagColor: "bg-orange-100 text-orange-700",
    author: "Lisa Thompson",
    authorImg: author4,
    date: "Dec 18, 2024",
    image: img4,
  },
  {
    id: 5,
    title: "Should Your App Use Blockchain? Pros & Pitfalls",
    desc: "Blockchain is trending — but should you use it? We break down when it’s a good idea (and when it’s not).",
    tag: "Blockchain & Security",
    tagColor: "bg-purple-100 text-purple-700",
    author: "David Park",
    authorImg: author5,
    date: "Dec 16, 2024",
    image: img5,
  },
  {
    id: 6,
    title: "LMS vs Custom eLearning Platform: What to Build?",
    desc: "Compare standard Learning Management Systems with fully custom eLearning platforms for startups and training businesses.",
    tag: "Tech stack selection",
    tagColor: "bg-indigo-100 text-indigo-700",
    author: "Jennifer Adams",
    authorImg: author6,
    date: "Dec 14, 2024",
    image: img6,
  },
];

const posts = [
	{
		id: 1,
		heading: 'Launching Your First AI App: A Beginner\'s Guide',
		date: 'Dec 12, 2024',
		image: postImg1,
	},
	{
		id: 2,
		heading: 'Choosing the Right Tech Stack for Your Startup',
		date: 'Dec 10, 2024',
		image: postImg2,
	},
	{
		id: 3,
		heading: 'How to Scale a SaaS Product Efficiently',
		date: 'Dec 8, 2024',
		image: postImg3,
	},
]

const BlogSection = () => {
  return (
    <>
      <section className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-6 gap-8">
          {/* Left Column - Articles */}
          <div className="lg:col-span-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <button className="w-44 text-left text-sm px-3 py-1 rounded-lg border border-gray-400 hover:bg-gray-200 transition-colors">
                Most Recent
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <h3 className="mt-2 font-semibold text-gray-900 text-md">
                      {item.title}
                    </h3>
                    <p className="text-sm h-16 text-gray-600 mb-6">{item.desc}</p>

                    <div className="mt-1 flex items-end justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.authorImg}
                          alt={item.author}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <span>{item.author}</span>
                      </div>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-600">
              <button className="p-2 rounded hover:bg-gray-100">
                <FaChevronLeft />
              </button>
              {[1, 2, 3, "...", 12].map((num, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded ${
                    num === 1 ? "bg-orange-500 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              ))}
              <button className="p-2 rounded hover:bg-gray-100">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-2 space-y-10">
            {/* NewsLatter */}
            <div className="bg-orange-500 text-white p-10 rounded-3xl">
              <h2 className="text-2xl font-semibold mb-3">Stay Informed</h2>
              <p className="text-lg mt-1 mb-4">
                Get weekly on AI, SaaS, and digital innovation -- right in your
                inbox.
              </p>
              <input
                type="email"
                placeholder='Enter your email'
                className="w-full px-3 py-2 bg-white text-gray-700 rounded-xl mb-3 "
              />
              <button className="w-full bg-white text-orange-600 font-semibold py-2 rounded hover:bg-gray-100">
                Subscribe Now
              </button>
              <p className="text-sm mt-2 text-gray-200">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Popular Posts */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-gray-900">
                Popular Posts
              </h4>

			  	{posts.map((post, idx) => (
					<div key={idx} className="flex items-center space-x-4">
						<img 
							src={post.image}
							alt={post.heading}
							className="w-16 h-12 rounded-2xl object-cover"
						/>

						<ul className="text-sm py-2 text-gray-800">
							<li>
								<strong>
									{post.heading}
								</strong>
                  				<br />
                  				<span className="text-xs text-gray-500">{post.date}</span>
                			</li>
						</ul>
					</div>
				))}
              {/* <ul className="text-sm space-y-3 text-gray-700">
                <li>
                  <strong>
                    Launching Your First AI App: A Beginner’s Guide
                  </strong>
                  <br />
                  <span className="text-xs text-gray-500">Dec 12, 2024</span>
                </li>
                <li>
                  <strong>
                    Choosing the Right Tech Stack for Your Startup
                  </strong>
                  <br />
                  <span className="text-xs text-gray-500">Dec 10, 2024</span>
                </li>
                <li>
                  <strong>How to Scale a SaaS Product Efficiently</strong>
                  <br />
                  <span className="text-xs text-gray-500">Dec 8, 2024</span>
                </li>
              </ul> */}
            </div>

			{/* Categories */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="font-bold text-xl mb-6 text-gray-900">Categories</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between"><span>AI & Machine Learning</span><span>42</span></li>
              <li className="flex justify-between"><span>SaaS & Cloud</span><span>35</span></li>
              <li className="flex justify-between"><span>Insurance Guide</span><span>28</span></li>
              <li className="flex justify-between"><span>Web Development</span><span>23</span></li>
              <li className="flex justify-between"><span>Startup Strategy</span><span>18</span></li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
