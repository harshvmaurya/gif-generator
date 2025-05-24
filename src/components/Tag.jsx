import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from './useGif';

const Tag = () => {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='max-w-xl mx-auto bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-md flex flex-col items-center gap-4 mt-6'>
      <h1 className='text-2xl font-bold text-white uppercase underline'>{`Random ${tag} GIF`}</h1>
      {loading ? <Spinner /> : gif && <img src={gif} alt="Tagged GIF" className='rounded-lg shadow-md max-w-full' />}
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter tag..."
        className='text-xl px-4 py-2 rounded-md w-2/3 bg-purple-200 hover:bg-purple-500 text-gray-800'
      />
      <button
        className='bg-white cursor-pointer text-purple-700 font-semibold px-4 py-2 rounded-lg w-2/3 hover:bg-purple-100 transition'
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
