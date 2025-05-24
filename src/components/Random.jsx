import React from 'react';
import Spinner from './Spinner';
import useGif from './useGif';

const Random = () => {
      const { gif, loading, fetchData } = useGif();

      return (
            <div className='max-w-xl mx-auto bg-gradient-to-br from-pink-500 to-pink-700 p-6 rounded-xl shadow-md flex flex-col items-center gap-4 mt-6'>
                  <h1 className='text-2xl font-bold text-white uppercase underline'>Randomized GIF</h1>
                  {loading ? <Spinner /> : gif && <img src={gif} alt="Random GIF" className='rounded-lg shadow-md max-w-full' />}
                  <button
                        className='bg-white cursor-pointer text-pink-700 font-semibold px-4 py-2 rounded-lg w-2/3 hover:bg-pink-100 transition'
                        onClick={fetchData}
                  >
                        Generate
                  </button>
            </div>
      );
};

export default Random;
