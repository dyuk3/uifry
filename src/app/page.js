import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';
import ellipse from '../assets/Ellipse_1.png';
import Image from 'next/image';
import star from '../assets/Star_1.png';
import Features from '@/components/Features';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href='https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='max-w-[1090px] mx-auto'>
        <Image
          className='w-[417px] h-[330px] top-[112px] left-[481px] absolute -z-10'
          src={ellipse}
          alt=''
        />
        <Image src={star} className='absolute right-[100px] top-[50px]' alt='' />
        <Image src={star} className='absolute left-[100px] top-[150px] -rotate-45' alt='' />
        <Header />
        <Hero />
        <Features />
      </main>
    </>
  );
}
