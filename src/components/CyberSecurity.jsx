import React from 'react';
import cyber1 from '../assets/cyber1.webp';
import cyber3 from '../assets/cyber3.gif';
import cyber4 from '../assets/cyber4.webp';
import cyber5 from '../assets/cyber5.webp';
const CyberSecurity = () => {
    const courses = [
        {
            id: 1,
            img:cyber1,
            title: '8 Different Types of Cybersecurity and Threats Involved',
            author: 'Tushar Vinocha',
            date: '08 Sep, 2023',
            views: '1894',
            readTime: '4 Min Read'
        },
        {
            id: 2,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp',
            title: 'The Ultimate Cybersecurity Roadmap for Beginners',
            author: 'Srinithi Sankar',
            date: '23 Mar, 2024',
            views: '1443',
            readTime: '3 Min Read'
        },
        {
            id: 3,
            img:cyber3,
            title: 'What is Cybersecurity? Importance and its uses & the growing challenge...',
            author: 'Saakshi Priyadarshini',
            date: '04 Oct, 2023',
            views: '1636',
            readTime: '4 Min Read'
        },
        {
            id: 4,
            img:cyber4,
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            author: 'Jaishree Tomar',
            date: '25 Mar, 2024',
            views: '1397',
            readTime: '4 Min Read'
        },
        {
            id: 5,
            img:cyber5,
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cyb...',
            author: 'Tushar Vinocha',
            date: '25 Mar, 2024',
            views: '1541',
            readTime: '4 Min Read'
        }
    ];

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                 {/* Creating Cards Dynamically using Courses  array*/}
                {courses.map((course)=>{
                        return(
                            <div className="col-4">
                            <div className="card mb-3" key={course.id}>
                            <img src={course.img} class="card-img-top img" alt="..." />
                                <div className="card-body">
                                    <div className="position-absolute absolute">
                                        <div className="card-views d-flex gap-1 px-2 py-1 align-items-center bg-white rounded-pill">
                                            <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg" height="auto" width="auto" alt="eye-icon" />
                                            <p className="m-0">{course.views}</p>
                                        </div>
                                    </div>
                                    <h5 class="card-title">{course.title}</h5>
                                    <p class="card-text text-muted">By {course.author}</p>
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

export default CyberSecurity;