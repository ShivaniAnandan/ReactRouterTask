import React from 'react';

const allCourses = [
    //FullstackDevelopment Cards
        {
        id:1,
        title:"Best Full-Stack Development Project Ideas in 2024",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
        views:115491,
        author:"Isha Sharma.",
        date:"14 Jun, 2024",
        readTime:"4 Min Read"
        },
        {
        id:2,
        title:"How Long Would It Take to Be a Full Stack Developer?",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
        views:14469,
        author:"Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:3,
        title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus",
        img:"https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
        views:8788,
        author:"Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:4,
        title:"Top 10 Full-Stack Developer Frameworks in 2024",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person-768x512.jpg",
        views:8666,
        author:"Isha Sharma",
        date:"16 Apr, 2024",
        readTime:"5 Min Read"
        },
        {
        id:5,
        img:"https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024.webp",
        title:"Full Stack Developer Roadmap: A Complete Guide [2024]",
        views:6681,
        author:"Meghana D",
        date:"19 Mar, 2024",
        readTime:"6 Min Read"
        },
        //Data Science Cards
        {
            id: 6,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            author: 'Isha Sharma',
            date: '14 Jun, 2024',
            views: '12857',
            readTime: '6 Min Read'
        },
        {
            id: 7,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            author: 'Lukesh S',
            date: '25 Mar, 2024',
            views: '8595',
            readTime: '7 Min Read'
        },
        {
            id: 8,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png',
            title: 'Can A Commerce Student Do Data Science?',
            author: 'Saakshi Priyadarshini',
            date: '16 Apr, 2024',
            views: '7544',
            readTime: '3 Min Read'
        },
        {
            id: 9,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png',
            title: 'Roles and Responsibilities of a Data Scientist',
            author: 'Jaishree Tomar',
            date: '16 Apr, 2024',
            views: '5547',
            readTime: '6 Min Read'
        },
        {
            id: 10,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg',
            title: 'How to become a Data Scientist after Mechanical Engineering?',
            author: 'Lahari Chandana',
            date: '16 Apr, 2024',
            views: '3008',
            readTime: '3 Min Read'
        },
        //CyberSecurity Cards
        {
            id: 11,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png',
            title: '8 Different Types of Cybersecurity and Threats Involved',
            author: 'Tushar Vinocha',
            date: '08 Sep, 2023',
            views: '1894',
            readTime: '4 Min Read'
        },
        {
            id: 12,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            author: 'Lukesh S',
            date: '25 Mar, 2024',
            views: '8595',
            readTime: '7 Min Read'
        },
        {
            id: 13,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
            title: 'What is Cybersecurity? Importance and its uses & the growing challenge...',
            author: 'Saakshi Priyadarshini',
            date: '04 Oct, 2023',
            views: '1636',
            readTime: '4 Min Read'
        },
        {
            id: 14,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png',
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            author: 'Jaishree Tomar',
            date: '25 Mar, 2024',
            views: '1397',
            readTime: '4 Min Read'
        },
        {
            id: 15,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif',
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cyb...',
            author: 'Tushar Vinocha',
            date: '25 Mar, 2024',
            views: '1541',
            readTime: '4 Min Read'
        },
        //Career Cards
        {
            id: 16,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp',
            title: 'Career in Animation: Jobs, Salary, Future Scope in India (2024)',
            author: 'Saanchi Bhardwaj',
            date: '03 May, 2024',
            views: '2276',
            readTime: '4 Min Read'
        },
        {
            id: 17,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp',
            title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
            author: 'Saakshi Priyadarshini',
            date: '14 Jun, 2024',
            views: '14885',
            readTime: '7 Min Read'
        },
        {
            id: 18,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
            title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            author: 'Jaishree Tomar',
            date: '14 Jun, 2024',
            views: '12698',
            readTime: '5 Min Read'
        },
        {
            id: 19,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2021/07/Blog-1-1-600x314.png',
            title: 'Is Data Science A Good Career Choice In 2024?',
            author: 'Archana',
            date: '16 Apr, 2024',
            views: '1321',
            readTime: '4 Min Read'
        },
        {
            id: 20,
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/01/giphy.gif',
            title: 'What Is a Data Engineer? A Complete Guide to this Data Career',
            author: 'Tushar Vinocha',
            date: '16 Apr, 2024',
            views: '2312',
            readTime: '3 Min Read'
        }
];

const AllCourses = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                {/* Creating Cards Dynamically using allCourses  */}
                {allCourses.map(course => (
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

export default AllCourses;
