import Image from 'next/image';
import star from '../assets/Star_1.png';

const Faq = () => {
  return (
    <div className='flex flex-col gap-10 my-20'>
      <div className='w-1/2 flex flex-col gap-2 relative'>
        <Image src={star} className='absolute -right-32 top-20' alt='' />
        <h2 className='text-[#FF5555] text-lg font-medium'>FAQ</h2>
        <h1 className='font-bold text-5xl'>Frequently Asked Questions</h1>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-1/2 flex flex-col gap-4'>
          <div className='p-5 bg-[#FF5555] text-white rounded-md'>
            <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.
            </p>
          </div>
          <div className='p-5  rounded-md'>
            <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
            <p className='opacity-50'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.
            </p>
          </div>
          <div className='p-5 bg-[#FF5555] text-white rounded-md'>
            <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.
            </p>
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <div className='p-5  rounded-md'>
            <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
            <p className='opacity-50'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.
            </p>
          </div>
          <div className='p-5 bg-[#FF5555] text-white rounded-md'>
            <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.
            </p>
          </div>
          <div className='p-5  rounded-md'>
            <h1 className='font-semibold text-[28px]'>The Best Financial Accounting App Ever!</h1>
            <p className='opacity-50'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
