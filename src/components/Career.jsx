import React from 'react';

const Career = () => {
    const courses = [
        {
            id: 1,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp',
            title: 'Career in Animation: Jobs, Salary, Future Scope in India (2024)',
            author: 'Saanchi Bhardwaj',
            date: '03 May, 2024',
            views: '2276',
            readTime: '4 Min Read'
        },
        {
            id: 2,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp',
            title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
            author: 'Saakshi Priyadarshini',
            date: '14 Jun, 2024',
            views: '14885',
            readTime: '7 Min Read'
        },
        {
            id: 3,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
            title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            author: 'Jaishree Tomar',
            date: '14 Jun, 2024',
            views: '12698',
            readTime: '5 Min Read'
        },
        {
            id: 4,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2021/07/Blog-1-1-600x314.png',
            title: 'Is Data Science A Good Career Choice In 2024?',
            author: 'Archana',
            date: '16 Apr, 2024',
            views: '1321',
            readTime: '4 Min Read'
        },
        {
            id: 5,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/01/giphy.gif',
            title: 'What Is a Data Engineer? A Complete Guide to this Data Career',
            author: 'Tushar Vinocha',
            date: '16 Apr, 2024',
            views: '2312',
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

export default Career;