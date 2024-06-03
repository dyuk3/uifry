import Image from 'next/image';
import logo from '../assets/logo.png';
import email from '../assets/mail.png';
import phone from '../assets/phone.png';

const links = ['Home', 'About Us', 'Bookings', 'Blog'];
const legal = ['Terms of Use', 'Privacy Policy', 'Cookie Policy'];
const products = ['Take Tour', 'Live Chat', 'Reviews'];

const Contact = () => {
  return (
    <div className='flex gap-20 my-20 '>
      <div className='flex flex-col gap-4'>
        <Image src={logo} alt=' ' />
        <div className='flex items-center gap-2'>
          <Image src={email} alt='' />
          Help@frybix.com
        </div>
        <div className='flex items-center gap-2'>
          <Image src={phone} alt='' />
          +1234 456 678 89
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium'>Links</h2>
        <ul className='font-medium text-base flex flex-col gap-2'>
          {links.map((link, index) => (
            <li className='cursor-pointer' key={index}>
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium'>Legal</h2>
        <ul className='font-medium text-base flex flex-col gap-2'>
          {legal.map((legal, index) => (
            <li className='cursor-pointer' key={index}>
              {legal}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium'>Product</h2>
        <ul className='font-medium text-base flex flex-col gap-2'>
          {products.map((product, index) => (
            <li className='cursor-pointer' key={index}>
              {product}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-medium'>Newsletter</h2>
        <ul className='font-medium text-base flex flex-col gap-2'>
          <li className='cursor-pointer'>Stay Up To Date</li>
        </ul>
        <div>
          <input type='email' className=' p-2 border py-3  ' placeholder='Your email' />
          <button className='bg-black text-white font-medium py-3  px-6 rounded-sm hover:scale-110'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
