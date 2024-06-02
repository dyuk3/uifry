import Image from 'next/image';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex justify-between items-center py-10'>
      <Image src={logo} alt='' className='cursor-pointer' />
      <div className='flex gap-6 text-xl font-medium -ml-80'>
        <p className='text-[#FF5555] font-bold cursor-pointer'>Home</p>
        <p className='cursor-pointer'>About Us</p>
        <p className='cursor-pointer'>Pricing</p>
        <p className='cursor-pointer'>Features</p>
      </div>
      <button className='bg-black text-white p-3 px-10 rounded'>Download</button>
    </div>
  );
};

export default Header;
