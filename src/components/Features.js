import star from '../assets/star-05.png';
import icon from '../assets/icon.png';
import cube from '../assets/cube-02.png';
import Image from 'next/image';
import ellipse from '../assets/Ellipse_1.png';
import ellipse2 from '../assets/ellipse_3.png';
import star1 from '../assets/Star_1.png';
import group from '../assets/group_12.png';

const data = [
  {
    name: 'Budgeting Intervals',
    desc: 'Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.',
    icon: star,
  },
  {
    name: 'Budgeting Intervals',
    desc: 'Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.',
    icon: cube,
  },
  {
    name: 'Budgeting Intervals',
    desc: 'Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.',
    icon: icon,
  },
];

const Features = () => {
  return (
    <div className='flex  '>
      <div className='w-1/2 relative'>
        <Image src={star1} className='absolute -left-[50px] top-[50px] -rotate-45' alt='' />
        . <Image className='-top-[80px] -left-[40px] absolute -z-10' src={ellipse2} alt='' />
        <Image className='absolute -top-20' src={group} alt='' />
      </div>
      <div className='w-1/2 relative'>
        .{' '}
        <Image
          className='top-[0px] h-[300px] w-[300px] -right-[150px] absolute -z-10'
          src={ellipse2}
          alt=''
        />
        <h2 className='text-[#FF5555] text-lg'>FEATURES</h2>
        <h1 className='font-bold text-5xl mb-10'>Uifry Premium</h1>
        <div className='flex flex-col gap-8'>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col justify-center gap-2'>
              <p className='flex items-center gap-1 font-semibold'>
                <Image src={item.icon} alt='' />
                {item.name}
              </p>
              <p className='opacity-50'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
