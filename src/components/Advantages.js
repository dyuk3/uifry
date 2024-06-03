import Image from 'next/image';
import bell from '../assets/bell.png';
import group3 from '../assets/group_3.png';
import group4 from '../assets/group_4.png';
import ellipse from '../assets/ellipse_4.png';
import ellipse2 from '../assets/ellipse_3.png';

import star from '../assets/Star_1.png';
import plus from '../assets/plus.png';

const Advantages = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex items-center mt-10'>
        <div className='w-1/2 flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-medium text-[#FF5555]'>ADVANTAGES</h2>
            <h1 className='text-5xl font-bold'>Why Choose Uifry?</h1>
          </div>
          <div className='flex items-center gap-4 '>
            <Image src={bell} alt='' />
            <h1 className='text-[28px] font-semibold'>Clever Notifications</h1>
          </div>
          <p className='opacity-50'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
            malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.
          </p>
        </div>
        <div className='w-1/2 relative'>
          <Image src={group3} alt='' className='z-20' />
          <Image src={star} alt='' className='absolute -right-40 top-0' />
          <Image src={ellipse} alt='' className='absolute top-[100px] -left-20 -z-50' />
        </div>
      </div>
      <div className='flex items-center '>
        <div className='w-1/2 relative'>
          <Image src={star} className='absolute right-0 -rotate-45' alt='' />
          <Image src={group4} alt='' />
          <Image src={ellipse2} className='absolute top-16 -z-40' alt='' />
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
          <div className='flex items-center gap-4'>
            <Image src={plus} alt='' />
            <h1 className='text-[28px] font-semibold'>Fully Customizable</h1>
          </div>
          <p className='opacity-50'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
            malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
