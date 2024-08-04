//Banner Image Component

import React, { forwardRef } from 'react';
import Image from 'next/image';

interface Props {
  bannerBg: string;
  bannerImg: string;
  title: string;
  description: string;
  cta: string;
}

const BannerImageComp = forwardRef<HTMLDivElement, Props>(
  ({ bannerBg, bannerImg, title, description, cta }, ref) => {
    return (
      <div ref={ref} className='relative mt-[10vh] mx-[30vw] border-2 border-black'>
        <div className='absolute top-[5vh] left-[5vw] z-10'>
          <h1 className='text-2xl text-black'>{title}</h1>
          <p className='mt-[5vh] text-gray-400'>{description}</p>
          <button className='bg-yellow-400 text-black border-black border-2 px-[1vw] py-[0.5vh] mt-[43.7vh] ml-[8vw] text-sm'>{cta}</button>
        </div>

        {bannerImg ? (
          <Image
            src={bannerImg}
            width={200}
            height={150}
            loading='lazy'
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
            alt='No Banner Image Selected'
            className='absolute top-[32.4vh] left-[10vw] transition-opacity opacity-0 duration-[2s]'
          />
        ) : (
          <div>Loading......</div>
        )}
        {bannerBg ? (
          <Image src={bannerBg} width={500} height={500} loading='lazy' alt='bannerBg' />
        ) : (
          <div>Loading......</div>
        )}
      </div>
    );
  }
);

export default BannerImageComp;
