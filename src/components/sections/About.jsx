export const About = () => {
    const frontend = ['TailwindCSS', 'Blade', 'JavaScript', 'HTML', 'CSS'];
    const backend = ['PHP', 'Laravel', 'MySQL', 'C++', 'XAMPP'];

    return (
        <section id="about" className="flex justify-center lg:m-40 px-4 sm:px-0 sm:m-1">
            <div className="max-w-5xl w-full">
                <h2 className="text-center text-purple-800 text-4xl md:text-[52px] mb-15 font-extrabold ">
                    About Me
                </h2>
                
                <p className="text-xl md:text-2xl text-center leading-relaxed mb-16">
                    An aspiring <span className="text-purple-700 font-semibold">Web Developer</span> with expertise on full stack development in building scalable websites and creating innovative solutions.
                </p>

                {/* Skills Section */}
                <div className="grid md:grid-cols-2 gap-10 mb-20 hover:-translate-y-2 transition-all ease-in-out duration-700">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="mb-5 text-2xl font-bold hover:border-b-2 hover:border-purple-200 w-fit">Frontend</h3>
                        <div className="flex flex-wrap justify-center md:justify-start">
                            {frontend.map((skill, index) => (
                                <span key={index} className="bg-[#1f2839] text-violet-400 px-4 py-2 rounded-full m-1 text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="mb-5 text-2xl font-bold hover:border-b-2 hover:border-purple-200 w-fit">Backend</h3>
                        <div className="flex flex-wrap justify-center md:justify-start">
                            {backend.map((skill, index) => (
                                <span key={index} className="bg-[#1f2839] text-violet-400 px-4 py-2 rounded-full m-1 text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 hover:-translate-y-2 transition-all ease-in-out duration-700">
                    <div className=" p-6 rounded-2xl">
                        <h3 className="mb-4 text-2xl font-bold">Education</h3>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <p className="font-bold">B.S. in Information Technology</p>
                            <p className="text-gray-600">Rizal Technological University</p>
                            <p className="text-sm italic">2023 - Present</p>
                        </div>
                    </div>

                    <div className=" p-6 rounded-2xl">
                        <h3 className="mb-4 text-2xl font-bold">Experience</h3>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <p className="font-bold">Information Technology Intern</p>
                            <p className="text-gray-600">Silangan National High School</p>
                            <p className="text-sm italic text-gray-500">March 2023 - May 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};