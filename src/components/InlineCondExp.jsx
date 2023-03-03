import { useState } from 'react';

const InlineCondExp = () => {
    const [value, setValue] = useState(false);
    return (
        <div>
            <h1 className='text-center mt-5 text-3xl font-bold'>Props</h1>
            <div className='flex justify-center items-center'>
                {value ? <p>True</p> : <p> False</p>}
            </div>
            <button
                className='border border-red-500 flex justify-center items-center mx-auto'
                onClick={() => (value ? setValue(false) : setValue(true))}
            >
                Change Name
            </button>
        </div>
    );
};

export default InlineCondExp;
