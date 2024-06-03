import Image from 'next/image';
import heroImg from '../assets/HeroImg.png';
import ring from '../assets/rings.png';
import ellipse from '../assets/Ellipse_1.png';
import phone1 from '../assets/phone_1.png';
import phone2 from '../assets/phone_2.png';
import star from '../assets/Star_1.png';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MdOutlinePlayCircle } from 'react-icons/md';

const Hero = () => {
  return (
    <div className='my-24 flex items-center'>
      <div className='w-[618px] '>
        <p className='font-bold text-6xl'>Make The Best Financial Decisions</p>
        <p className='my-10 opacity-50 text-lg'>
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
          Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className='flex items-center gap-10 font-semibold'>
          <button className='bg-black text-white p-3 px-10 rounded flex items-center gap-4 hover:scale-110'>
            Get Started <HiArrowLongRight size={30} />
          </button>
          <button className='flex items-center gap-4 hover:scale-110'>
            <MdOutlinePlayCircle size={40} /> Watch Video
          </button>
        </div>
        <Image src={heroImg} alt='' />
      </div>
      <div>
        <Image src={ring} alt='' className='absolute top-[85px] right-[49px] -z-50' />
        <Image
          className='w-[417px] h-[330px] top-[552px] right-[281px] absolute -z-10'
          src={ellipse}
          alt=''
        />
        <Image src={phone1} className='absolute top-[237px] right-[50px] z-10' alt=' ' />
        <Image src={phone2} className='absolute top-[160px] right-[80px] z-20' alt=' ' />
        <Image src={phone1} className='absolute top-[80px] right-[300px] z-30' alt=' ' />
        <Image src={star} className='absolute bottom-[220px] left-[420px] -rotate-45' alt='' />
        <Image src={star} className='absolute  bottom-[122px] right-[581px] -rotate-180' alt='' />
      </div>
    </div>
  );
};

export default Hero;
