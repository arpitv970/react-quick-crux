import PropsChild from './PropsChild';
import { useState } from 'react';

const PropsParent = () => {
    const [name, setName] = useState('Eren');
    return (
        <div>
            <h1 className='text-center mt-5 text-3xl font-bold'>Props</h1>
            <PropsChild name={name} />
            <button
                className='border border-primary px-10 py-5 rounded-xl flex justify-center items-center mx-auto'
                onClick={() =>
                    name === 'Eren' ? setName('Mikasa') : setName('Eren')
                }
            >
                Change Name
            </button>
        </div>
    );
};

export default PropsParent;
