import Image from 'next/image';
import { photo } from '@/assets';
import { Suspense } from 'react';
import BtnDownload from '../components/button/BtnDownload';

function HeroSect() {
  return (
    <section className="grid grid-cols-1 gap-12 md:gap-5 pt-16 sm:pt-20 padding-inline md:grid-cols-2 lg:gap-5 justify-center items-center">
      <article className="self-center max-md:order-last">
        <h1 className="text-5xl md:text-[2.5rem] lg:text-[4rem] leading-tight font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
          Muhammad Nasrudin Fahmi
        </h1>
        <p className="mt-5 text-lg lg:text-xl text-teal-900">
          Software developer with a passion for solving problems and building
          scalable applications using modern tech.
        </p>

        <BtnDownload />
      </article>

      <div className="w-full flex md:self-start">
        <Suspense fallback={<h1>Loading ...</h1>}>
          <div className="block size-4/5 md:size-full lg:size-4/5 m-auto">
            <Image
              src={photo.Fahmi}
              width={500}
              height={500}
              alt="Muhammad Nasrudin Fahmi"
              className="rounded-t-3xl size-full md:rounded-t-[10rem] object-center object-cover"
              priority
              layout="responsive"
            />
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default HeroSect;
