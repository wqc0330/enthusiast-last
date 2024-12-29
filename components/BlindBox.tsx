import Image from 'next/image';
import NftCarousel from '@/components/NftCarousel';

export default function BlindBox() {
    return (
        <div className='h-72 w-full rounded-lg bg-sky-400 py-4 px-3'>
            <div className="flex w-full">
                <div className="h-10 w-10 flex-none" style={{ position: `relative` }}>
                    <Image
                        src="/file.svg"
                        fill
                        alt="Enthusaist"
                    />
                </div>

                <div className='flex-1'>
                    <span>精品盲盒</span>
                </div>

                <div className="h-10 w-10 flex-none" style={{ position: `relative` }}>
                    <Image
                        src="/window.svg"
                        fill
                        alt="Enthusaist"
                    />
                </div>
            </div>

            <div className='flex w-full pl-1 mt-2'>
                <div className='flex-1'>
                    <div>Day</div>
                    <div>6.34 ETH</div>
                    <div>-43%</div>
                </div>
                <div className='flex-1'>
                    <div>Day</div>
                    <div>6.34 ETH</div>
                    <div>-43%</div>
                </div>
            </div>

            <div className='pt-2'>
                <NftCarousel basis='basis-2/5'></NftCarousel>
            </div>
        </div>
    )
}