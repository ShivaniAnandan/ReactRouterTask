import React from 'react';
import fsd1 from '../assets/fsd1.jpg';
import fsd3 from  '../assets/fsd3.png';
import fsd5 from '../assets/fsd5.webp';

const FullStackDevelopment = () => {
    let courses = [
        {
        id:1,
        title:"Best Full-Stack Development Project Ideas in 2024",
        img:fsd1,
        iconimg:"https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg",
        views:115491,
        author:"By Isha Sharma.",
        date:"14 Jun, 2024",
        readTime:"4 Min Read"
        },
        {
        id:2,
        title:"How Long Would It Take to Be a Full Stack Developer?",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
        views:14469,
        author:"By Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:3,
        title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus",
        img:fsd3,
        views:8788,
        author:"By Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:4,
        title:"Top 10 Full-Stack Developer Frameworks in 2024",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person-768x512.jpg",
        views:8666,
        author:"By Isha Sharma",
        date:"16 Apr, 2024",
        readTime:"5 Min Read"
        },
        {
        id:5,
        title:"Full Stack Developer Roadmap: A Complete Guide [2024]",
        img:fsd5,
        views:6681,
        author:"By Meghana D",
        date:"19 Mar, 2024",
        readTime:"6 Min Read"
        },
    ]
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {/* Creating Cards Dynamically using Courses array */}
                    {courses.map((course)=>{
                        return(
                            <div className="col-4">
                            <div className="card mb-3">
                            <img src={course.img} class="card-img-top img" alt="..." />
                                <div className="card-body">
                                    <div className="position-absolute absolute">
                                        <div className="card-views d-flex gap-1 px-2 py-1 align-items-center bg-white rounded-pill">
                                            <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg" height="auto" width="auto" alt="eye-icon" />
                                            <p className="m-0">{course.views}</p>
                                        </div>
                                    </div>
                                    <h5 class="card-title">{course.title}</h5>
                                    <p class="card-text text-muted">{course.author}</p>
                                    <div className="d-flex justify-content-between">
                                    <p class="card-text"><small class="text-muted">{course.date}</small></p>
                                    <p class="card-text"><small class="text-muted">{course.readTime}</small></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default FullStackDevelopment;