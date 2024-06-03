import Image from 'next/image';
import star from '../assets/Star_1.png';
import group from '../assets/group_5.png';
import group2 from '../assets/group_6.png';
import ellipse from '../assets/ellipse_4.png';

const Testimonials = () => {
  return (
    <div className='flex flex-col relative my-10'>
      <Image src={star} className='absolute right-0 -top-28' alt='' />
      <Image src={star} className='absolute -left-60 rotate-45 bottom-10' alt='' />
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-lg font-medium'>TESTIMONIAL</h2>
        <h1 className='font-bold text-5xl w-96 text-center '>What Our Users Say About Us?</h1>
      </div>
      <div className='flex items-center'>
        <div className='w-1/2 relative'>
          <Image src={group} alt='' />
          <Image src={ellipse} className='absolute top-20 -z-40' alt='' />
        </div>
        <div className='w-1/2 flex flex-col gap-3'>
          <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
          <p className='opacity-50'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
            malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <Image src={group2} a alt='' />
          <p className='font-semibold text-lg'>Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
