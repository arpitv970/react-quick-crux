import { useState, useEffect } from 'react';

const State = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
        console.log('++');
    };
    const decreaseCount = () => {
        setCount(count - 1);
        console.log('--');
    };

    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            <h1 className='text-3xl font-semibold text-center mt-5'>
                States in ReactJS
            </h1>
            <p className='text-2xl mt-5'>{count}</p>
            <span className='flex justify-evenly items-center p-2 w-[20vw]'>
                <button
                    onClick={decreaseCount}
                    className='border border-primary w-10 h-10 text-3xl flex justify-center items-center m-auto p-auto rounded-xl hover:rounded-2xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 text-center'
                >
                    -
                </button>
                <button
                    onClick={increaseCount}
                    className='border border-primary w-10 h-10 text-3xl flex justify-center items-center m-auto p-auto rounded-xl hover:rounded-2xl hover:bg-primary hover:text-white transition-all ease-in-out duration-300 text-center'
                >
                    +
                </button>
            </span>
        </div>
    );
};

export default State;
