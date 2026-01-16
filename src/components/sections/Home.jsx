import pic from '../../assets/pic.jfif';
import github from '../../assets/github-logo.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
export const Home = () => {
    return (
        <section id="home" className='md:flex items-center justify-between p-3 mt-15 mx-10 md:mx-20 min-h-full'>
            <div className='md:mt-20 lg:mt-0'> 
                <div className='hover:-translate-y-2 transition-all ease-in-out duration-700'>
                    <p className='text-[52px]'>Aspiring <span className='text-purple-800'>Associate Web Developer</span></p>
                    <p className='text-[20px]'>Currently a 3rd Year BSIT student</p>
                </div>
                <div className='flex gap-5 my-5'>
                    <a href="https://github.com/Ryystuffs" target='_blank' className='hover:-translate-y-2 transition-all ease-in-out duration-700'><img src={github} alt="" className='rounded-full h-10'/></a>
                    <a href="https://www.linkedin.com/in/ryan-trinidad/" target='_blank' className='hover:-translate-y-2 transition-all ease-in-out duration-700'><img src={linkedin} alt="" className='rounded-full h-10'/></a>
                    <a href="https://www.facebook.com/ryantrinidad422" target='_blank'className='hover:-translate-y-2 transition-all ease-in-out duration-700'><img src={facebook} alt="" className='h-10'/></a>
                </div>
            </div>
            <div className='hover:-translate-y-2 transition-all ease-in-out duration-700'>
                <img src={pic} alt="" className='mt-20 lg:mt-0 md:w-250 md:my-35 lg:h-200 lg:w-150 rounded-full border-1-black bg-gray-900'/>
            </div>
        </section>
    );
}