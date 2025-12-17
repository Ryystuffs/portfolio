import pic from '../../assets/pic.png';
export const Home = () => {
    return (
        <section id="home" className='flex items-center justify-between p-7.5 min-h-full'>
            <div className=''> 
                <p className='text-[52px]'>Aspiring Associate Web Developer </p>
                <p className='text-[20px]'>Currently a 3rd Year BSIT student</p>
            </div>
            <div>
                <img src={pic} alt="" />
            </div>
        </section>
    );
}