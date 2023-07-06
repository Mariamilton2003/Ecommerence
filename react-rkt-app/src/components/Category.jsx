import React from 'react';

const Category = ({item}) => {
    return (
        <>
            <div className="flex items-center font-bold text-lg whitespace-nowrap rounded-lg p-4 text-white bg-gray-500">
                {item}
            </div>
        </>
    );
};

export default Category;