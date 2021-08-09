import React from 'react';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400] lg:h-[500] xl:h-[600] 2xl:h-[700px]'>
            <Image
                src="https://links.papareact.com/0fm" layout="fill"
                objectFit="cover"
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
                <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md mt-2 font-bold hover:shadow-xl hover:text-green-500 active:scale-90 transition duration-150'>I'm flexible</button>
            </div>
        </div>
    )
}
