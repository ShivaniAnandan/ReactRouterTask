import React from 'react';
import data3 from '../assets/data3.png';
import data4 from '../assets/data4.png';
import data5 from '../assets/data5.jpg';
const DataScience = () => {
    const courses = [
        {
            id: 1,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            author: 'Isha Sharma',
            date: '14 Jun, 2024',
            views: '12857',
            readTime: '6 Min Read'
        },
        {
            id: 2,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            author: 'Lukesh S',
            date: '25 Mar, 2024',
            views: '8595',
            readTime: '7 Min Read'
        },
        {
            id: 3,
            img:data3,
            title: 'Can A Commerce Student Do Data Science?',
            author: 'Saakshi Priyadarshini',
            date: '16 Apr, 2024',
            views: '7544',
            readTime: '3 Min Read'
        },
        {
            id: 4,
            img:data4,
            title: 'Roles and Responsibilities of a Data Scientist',
            author: 'Jaishree Tomar',
            date: '16 Apr, 2024',
            views: '5547',
            readTime: '6 Min Read'
        },
        {
            id: 5,
            img: data5,
            title: 'How to become a Data Scientist after Mechanical Engineering?',
            author: 'Lahari Chandana',
            date: '16 Apr, 2024',
            views: '3008',
            readTime: '3 Min Read'
        }
    ];

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                {/* Creating Cards Dynamically using Courses  array*/}
                {courses.map(course => (
                    <div key={course.id} className="col-4">
                        <div className="card mb-3">
                            <img src={course.img} className="card-img-top img" alt={course.title} />
                            <div className="card-body">
                                <div className="position-absolute absolute">
                                    <div className="card-views d-flex gap-1 px-2 py-1 align-items-center bg-white rounded-pill">
                                        <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg" height="auto" width="auto" alt="eye-icon" />
                                        <p className="m-0">{course.views}</p>
                                    </div>
                                </div>
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text text-muted">By {course.author}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text"><small className="text-muted">{course.date}</small></p>
                                    <p className="card-text"><small className="text-muted">{course.readTime}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            </div>
        </div>
    );
};

export default DataScience;