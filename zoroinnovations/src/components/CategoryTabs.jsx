import React from 'react'
import iconAll from '../assets/categorySection/categoryIcon-1.png'
import iconWeb from '../assets/categorySection/categoryIcon-2.svg'
import iconAI from '../assets/categorySection/categoryIcon-AI.svg'
import iconTips from '../assets/categorySection/categoryIcon-Tech.svg'
import iconStrategy from '../assets/categorySection/categoryIcon-5.svg'

const categories = [
    {
        id: 1,
        name: "All Categories",
        count: 128,
        icon: iconAll,
        active: true,
    },
    {
        id: 2,
        name: "Web Development",
        count: 42,
        icon: iconWeb
    },
    {
        id: 3,
        name: "AI & Machine Learning",
        count: 35,
        icon: iconAI
    },
    {
        id: 4,
        name: "Tech Tips",
        count: 28,
        icon: iconTips
    },
    {
        id: 5,
        name: "Digital Strategy",
        count: 23,
        icon: iconStrategy
    },
];



const CategoryTabs = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 px-4 py-6'>
        {categories.map((cat) => (
            <button
                key={cat.id}
                className={`flex items-center space-x-5 px-4 py-2 rounded-full shadow-sm text-sm font-medium
                ${cat.active
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray--700 hover:bg-gray-200'
                }`} 
            >
                <img src={cat.icon} alt={cat.name} className='w-5 h-5' />
                <span>{cat.name}</span>
                <span
                    className={`ml-2 font-semibold px-2 py-0.5 rounded-full
                        ${cat.active 
                            ? 'bg-orange-600 text-white' 
                            : 'bg-gray-300 text-gray-700'
                        }`}
                >
                    {cat.count}
                </span>
            </button>
        ))}
    </div>
  )
}

export default CategoryTabs;