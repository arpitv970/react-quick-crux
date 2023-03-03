import { useState } from 'react';

const EventHandling = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [sum, setSum] = useState(0);
    const handleClick = () => {
        setSum(num1 + num2);
        console.log(sum);
    };
    const getInput1 = (e) => {
        setNum1(parseInt(e.target.value))
        console.log(e.target.value);
    };
    const getInput2 = (e) => {
        setNum2(parseInt(e.target.value))
        console.log(e.target.value);
    };

    return (
        <div>
            <h1 className='text-center mt-5 text-3xl font-bold'>
                Check console
            </h1>
            <input
                onChange={getInput1}
                placeholder='Enter Num 1'
                className='border text-xl border-primary p-5 m-5 rounded-xl flex justify-center items-center mx-auto'
            />
            <input
                onChange={getInput2}
                placeholder='Enter Num 2'
                className='border text-xl border-primary p-5 m-5 rounded-xl flex justify-center items-center mx-auto'
            />
            <button
                onClick={handleClick}
                className='border border-primary px-10 py-5 rounded-xl flex justify-center items-center mx-auto'
            >
                Click
            </button>

            <h2 className='text-center mt-5 font-bold text-xl'>Output</h2>
            <span className='border border-dashed border-primary px-10 py-5 mt-1 w-[10%] rounded-xl flex justify-center items-center mx-auto text-xl'>
                {sum}
            </span>
        </div>
    );
};

export default EventHandling;
