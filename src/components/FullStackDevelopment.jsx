import React from 'react';


const FullStackDevelopment = ({ allCourses }) => {
    //return only Full Stack Course Cards
    const fullStackCourses = allCourses.filter(course => course.courseName.includes('Full Stack'));
    // console.log(fullStackCourses);
    
   
      
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {/* Creating Cards Dynamically using Courses array */}
                    {fullStackCourses.map((course)=>{
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