import React from 'react';

const Career = ({ allCourses }) => {
    //return only Career Course Cards
    const CareerCourses = allCourses.filter(course => course.courseName.includes("Career"));
    // console.log(CareerCourses);
    

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                 {/* Creating Cards Dynamically using Courses  array*/}
                {CareerCourses.map(course => (
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