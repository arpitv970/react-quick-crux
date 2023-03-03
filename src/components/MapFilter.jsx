const MapFilter = () => {
    const users = ['Hyuga', 'Uchiha', 'Senju', 'Namekaze'];
    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            <h1 className='text-3xl font-semibold text-center mt-5'>Map</h1>
            <div className='flex w-[80vw] mx-auto justify-evenly items-center mt-5'>
                {users.map((u) => {
                    return (
                        <div className='border mx-auto flex justify-center items-center border-red-500 text-center p-5 w-[20%]'>
                            {u}
                        </div>
                    );
                })}
            </div>
            <h1 className='text-3xl font-semibold text-center mt-5'>Filter</h1>
            <div className='flex w-[80vw] mx-auto justify-evenly items-center mt-5'>
                {users
                    .filter((uName) => uName.includes('a'))
                    .map((u) => {
                        return (
                            <div className='border mx-auto flex justify-center items-center border-red-500 text-center p-5 w-[20%]'>
                                {u}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default MapFilter;
