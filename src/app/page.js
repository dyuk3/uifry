import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';
import Image from 'next/image';
import star from '../assets/Star_1.png';
import Features from '@/components/Features';
import Advantages from '@/components/Advantages';
import Testimonials from '@/components/Testimonials';
import frame from '../assets/Frame.png';
import Faq from '@/components/Faq';
import ellipse4 from '../assets/ellipse_4.png';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href='https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <main className='max-w-[1090px] mx-auto'>
        <Image
          className='w-[417px] h-[330px] top-[112px] left-[481px] absolute -z-10'
          src={ellipse4}
          alt=''
        />
        <Image src={star} className='absolute right-[100px] top-[50px]' alt='' />
        <Image src={star} className='absolute left-[100px] top-[150px] -rotate-45' alt='' />
        {/* Header Component */}
        <Header />
        {/* Hero Component */}
        <Hero />
        {/* Features Component */}
        <Features />
        {/* Advantages Component */}
        <Advantages />
        {/* Testimonials Component */}
        <Testimonials />
        <Faq />
        <div className='relative my-40'>
          <Image src={star} className='absolute -top-20 -right-40' alt='' />
          <Image src={star} className='absolute top-20 -left-40' alt='' />
          <Image src={ellipse4} className='absolute -top-56 -left-60 -z-50' alt='' />

          <Image src={frame} alt='' />
        </div>
        <Contact />
        {/* Footer */}
        <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='text-center font-medium text-base my-4 mb-10'>
          <p>Copyright 2022 Uifry.com All Rights Reserved</p>
        </div>
      </main>
    </>
  );
}
