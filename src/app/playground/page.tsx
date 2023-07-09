import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';

const query = groq`*[_type=='landing']`;

const page = async () => {
  const fetchHero = await client.fetch(query);
  const [heroContent] = [fetchHero[0]];

  return (
    <div className='p-10'>
      <h1 className='text-4xl'>{heroContent.heading}</h1>
      <div className='relative w-full h-[17rem] sm:h-[25rem] md:h-[28rem] lg:h-[35rem]'>
        <Image
          src={urlForImage(heroContent.heroImage).url()}
          className='mt-2 h-full object-cover object-left lg:object-center rounded-lg'
          fill
          alt='Main image'
        />
      </div>
      <h2 className='text-xl mt-4'>{heroContent.sub_heading}</h2>
    </div>
  );
};

export default page;
