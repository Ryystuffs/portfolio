import iconGithub from '../assets/github.png'
export const Card = ({pic, title, description, techStack, link}) => {
    return (
        <div className="bg-gray-800 flex justify-around items-center rounded-lg p-5 my-3">
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
                            className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full tex-sm"
                        >
                            {tech}  
                        </span>
                    ))}
                </div>
                <div className="my-4 bg-blue-950 p-3 rounded-lg w-50 flex items-center">
                    <a href={link} target='_blank' className='flex gap-2 items-center'><img src={iconGithub} alt="" className='h-10 w-10'/>View on Github</a>
                </div>
            </div>
        </div>
    );
}