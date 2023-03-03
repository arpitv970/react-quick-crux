import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <ul className='grid grid-cols-6 w-[90vw] gap-5 mt-5 m-auto p-5 sm:grid-cols-2 sm:gap-2 sm:p-2 '>
                <Link to='/map-filter'>
                    <li className='border border-primary text-primary-500 text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                        Map & Filter
                    </li>
                </Link>

                <Link to='/state'>
                    <li className='border border-primary text-primary-500 text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                        States in React
                    </li>
                </Link>
                <Link to='/props'>
                    <li className='border border-primary text-primary-500 text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                        Props in React
                    </li>
                </Link>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Inline Conditional Expressions
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Event Handling in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Keys in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Forms in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Dynamic Inputs in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    CSS Styling in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Uncontrolled v/s Controlled Components
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Virtual DOM
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    InnerHTML in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    React Fragments
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Stateless v/s Stateful Components
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    REST API Requests
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Debouncing in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Context API in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Class v/s ClassNames in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Higher Order Components
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Lazy Loading in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Helper Functions in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Implementing Recursion in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Running Arrays of Functions
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Custom Hooks in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Promises and Async/Await
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Code Splitting in React(Dynamic Imports)
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Creating a Search Filter in React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Adding TypeScript to React
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    React Testing Library
                </li>
                <li className='border border-primary text-primary-500 line-through text-center h-[100%] w-[100%] flex justify-center items-center rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 cursor-pointer m-auto p-4'>
                    Caching an API Response{' '}
                </li>
            </ul>
        </>
    );
};

export default Home;
