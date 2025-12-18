import iconGithub from '../assets/github.png'
export const Card = ({pic, title, description, techStack, link}) => {
    return (
        <div className="bg-[#1f2839] flex justify-around items-center rounded-lg p-5 my-3 hover:-translate-y-2 transition-all ease-in-out duration-700">
            <div className="flex justify-center min-w-[50%] h-80 object-cover">
                <img src={pic} alt={title} className="rounded-lg"/>
            </div>
            <div className="flex-col items-center justify-center max-w-[50%] mx-5">
                <p className='font-bold my-5 text-2xl'>{title}</p>
                <p>{description}</p>
                <div className="flex flex-wrap justify-center gap-2 my-7">
                    {techStack.map((tech,index)=>(
                        <span
                            key={index}
                            className="bg-purple-900 text-blue-200 px-3 py-1 rounded-full"
                        >
                            {tech}  
                        </span>
                    ))}
                </div>
                <div className="my-4 bg-pink-400 p-3 rounded-lg w-50 flex items-center hover:-translate-y-2 transition-all ease-in-out duration-700">
                    <a href={link} target='_blank' className='flex gap-2 items-center text-gray-800'><img src={iconGithub} alt="" className='h-10 w-10'/>View on Github</a>
                </div>
            </div>
        </div>
    );
}