import { Card } from "../card";
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
export const Projects = () => {
    const projects =[
        {
            pic: project1,
            title: 'Gym Membership Management System',
            description:'This Gym Management System is a full-stack web application designed to automate facility operations and member attendance. Built on the Laravel framework, the system features a secure, real-time check-in architecture utilizing Simple QrCode and Html5-QrCode for seamless generation and scanning. The user interface is crafted with Tailwind CSS for a modern, responsive experience, while the backend is powered by MySQL and XAMPP Apache to ensure robust data management and reliable performance.',
            techStack:['Laravel','Javascript','Blade','MySQL','SweetAlert'],
            link: 'https://github.com/Ryystuffs/gymsystem'
        },
        {
            pic: project2,
            title: 'Travel Guide',
            description:'A simple travel guide website that helps people plan their trips easily. It provides clear information on the best places to visit, helpful travel tips, and ready-made schedules. The design is easy to use on any device, allowing travelers to find locations and organize their trip details in one place.',
            techStack:['PHP','Javascript','MySQL'],
            link: 'https://github.com/Ryystuffs/BAO-RESERVATION'
        },
        {
            pic: project3,
            title: 'Reservation Management System',
            description:'A streamlined reservation system built to simplify school transactions. It helps students easily purchase books, uniforms, and merchandise, reducing long wait times and making the process at the Business Affairs Office much faster and more organized.',
            techStack:['C++','Visual Studio','MySQL'],
            link: 'https://github.com/Ryystuffs/compass_php_project'
        }   
    ];
    return (
        <section id="projects" className="flex flex-col justify-center items-center mt-20 md:mt-45 mb-35 ">
            <div className="text-center text-purple-800 text-[52px] font-extrabold mb-10">Projects</div>
            <div className="flex flex-wrap justify-center gap-2 max-w-[80%]">
                {projects.map((proj,index)=>(
                    <Card
                        key={index}
                        pic={proj.pic}
                        title={proj.title}
                        description={proj.description}
                        techStack={proj.techStack}
                        link={proj.link}
                    />
                ))}
            </div>
        </section>
    );
}