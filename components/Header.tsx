import Image from 'next/image';
import WalletCollectionBtn from '@/components/WalletCollectionBtn';

export default function Header() {
    return (
        <header className="w-full h-20 px-3 py-5">
            <div className='w-full h-full flex'>
                <div className='h-10 w-10 flex-none' style={{ position: 'relative' }}>
                    <Image
                        src="/next.svg"
                        fill
                        alt="Enthusaist"
                    />
                </div>
                <div className='h-10 flex-1 px-6 py-1 content-center'>
                    <div className='flex h-full ring-1 ring-black rounded-full'>
                        <div className='h-full w-10'>

                        </div>
                        <input className='h-full w-full' />
                        <div className='h-full w-10'></div>
                    </div>
                </div>
                <div className='h-10 w-20 flex-none justify-end content-center'>
                    <WalletCollectionBtn></WalletCollectionBtn>
                </div>
            </div>
        </header>
    )
}