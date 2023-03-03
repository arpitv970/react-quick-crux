const PropsChild = (props) => {
    const { name } = props;
    return (
        <div className='text-center text-2xl mt-5 flex justify-center items-center'>
            {name}
        </div>
    );
};

export default PropsChild;
