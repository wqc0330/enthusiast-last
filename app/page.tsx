import HomeCarousel from '@/components/HomeCarousel';
import NftCarousel from '@/components/NftCarousel';
import BlindBox from '@/components/BlindBox';

export default function Home() {
  return (
    <div className="flex flex-col w-full space-y-10">
      <div className="w-full">
        <HomeCarousel></HomeCarousel>
      </div>

      <div className='w-full'>
        <h2>最新藏品</h2>
        <hr className="border border-gray-200 h-0.5 my-4" />
        <div>
          <NftCarousel basis='basis-1/2'></NftCarousel>
        </div>
        <div className='pt-6'>
          <button className='w-full bg-black/15 rounded-lg py-3'>查看所有藏品</button>
        </div>
      </div>

      <div className='w-full pb-10'>
        <h2>热门盲盒</h2>
        <hr className="border border-gray-200 h-0.5 my-4" />
        <div className='flex flex-col space-y-5'>
          {Array.from({ length: 3 }).map((_, index) => (
            <BlindBox></BlindBox>
          ))}
        </div>
        <div className='pt-6'>
          <button className='w-full bg-black/15 rounded-lg py-3'>查看所有盲盒</button>
        </div>
      </div>
    </div>
  );
}
