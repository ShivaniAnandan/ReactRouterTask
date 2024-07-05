import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FullStackDevelopment from './components/FullStackDevelopment'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import Career from './components/Career'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AllCourses from './components/AllCourses';
import fsd1 from './assets/fsd1.jpg';
import fsd3 from  './assets/fsd3.png';
import fsd4 from './assets/fsd4.jpg';
import fsd5 from './assets/fsd5.webp';
import data3 from './assets/data3.png';
import data4 from './assets/data4.png';
import data5 from './assets/data5.jpg';
import cyber1 from './assets/cyber1.webp';
import cyber3 from './assets/cyber3.gif';
import cyber4 from './assets/cyber4.webp';
import cyber5 from './assets/cyber5.webp';
import career4 from './assets/career4.png';
import career5 from './assets/career5.gif';

function App() {
  const allCourses = [
    //FullstackDevelopment Cards
        {
        id:1,
        courseName :"Full Stack",
        title:"Best Full-Stack Development Project Ideas in 2024",
        img:fsd1,
        views:115491,
        author:"Isha Sharma.",
        date:"14 Jun, 2024",
        readTime:"4 Min Read"
        },
        {
        id:2,
        courseName :"Full Stack",
        title:"How Long Would It Take to Be a Full Stack Developer?",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
        views:14469,
        author:"Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:3,
        courseName :"Full Stack",
        title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus",
        img:fsd3,
        views:8788,
        author:"Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:4,
        courseName :"Full Stack",
        title:"Top 10 Full-Stack Developer Frameworks in 2024",
        img:fsd4,
        views:8666,
        author:"Isha Sharma",
        date:"16 Apr, 2024",
        readTime:"5 Min Read"
        },
        {
        id:5,
        courseName :"Full Stack",
        img:fsd5,
        title:"Full Stack Developer Roadmap: A Complete Guide [2024]",
        views:6681,
        author:"Meghana D",
        date:"19 Mar, 2024",
        readTime:"6 Min Read"
        },
        //Data Science Cards
        {
            id: 6,
            courseName: "Data Science",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            author: 'Isha Sharma',
            date: '14 Jun, 2024',
            views: '12857',
            readTime: '6 Min Read'
        },
        {
            id: 7,
            courseName: "Data Science",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            author: 'Lukesh S',
            date: '25 Mar, 2024',
            views: '8595',
            readTime: '7 Min Read'
        },
        {
            id: 8,
            courseName: "Data Science",
            img:data3,
            title: 'Can A Commerce Student Do Data Science?',
            author: 'Saakshi Priyadarshini',
            date: '16 Apr, 2024',
            views: '7544',
            readTime: '3 Min Read'
        },
        {
            id: 9,
            courseName: "Data Science",
            img:data4,
            title: 'Roles and Responsibilities of a Data Scientist',
            author: 'Jaishree Tomar',
            date: '16 Apr, 2024',
            views: '5547',
            readTime: '6 Min Read'
        },
        {
            id: 10,
            courseName: "Data Science",
            img:data5,
            title: 'How to become a Data Scientist after Mechanical Engineering?',
            author: 'Lahari Chandana',
            date: '16 Apr, 2024',
            views: '3008',
            readTime: '3 Min Read'
        },
        //CyberSecurity Cards
        {
            id: 11,
            courseName: "Cyber Security",
            img:cyber1,
            title: '8 Different Types of Cybersecurity and Threats Involved',
            author: 'Tushar Vinocha',
            date: '08 Sep, 2023',
            views: '1894',
            readTime: '4 Min Read'
        },
        {
            id: 12,
            courseName: "Cyber Security",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp',
            title: 'The Ultimate Cybersecurity Roadmap for Beginners',
            author: 'Srinithi Sankar',
            date: '23 Mar, 2024',
            views: '1443',
            readTime: '3 Min Read'
        },
        {
            id: 13,
            courseName: "Cyber Security",
            img:cyber3,
            title: 'What is Cybersecurity? Importance and its uses & the growing challenge...',
            author: 'Saakshi Priyadarshini',
            date: '04 Oct, 2023',
            views: '1636',
            readTime: '4 Min Read'
        },
        {
            id: 14,
            courseName: "Cyber Security",
            img:cyber4,
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            author: 'Jaishree Tomar',
            date: '25 Mar, 2024',
            views: '1397',
            readTime: '4 Min Read'
        },
        {
            id: 15,
            courseName: "Cyber Security",
            img:cyber5,
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cyb...',
            author: 'Tushar Vinocha',
            date: '25 Mar, 2024',
            views: '1541',
            readTime: '4 Min Read'
        },
        //Career Cards
        {
            id: 16,
            courseName: "Career",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp',
            title: 'Career in Animation: Jobs, Salary, Future Scope in India (2024)',
            author: 'Saanchi Bhardwaj',
            date: '03 May, 2024',
            views: '2276',
            readTime: '4 Min Read'
        },
        {
            id: 17,
            courseName: "Career",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp',
            title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
            author: 'Saakshi Priyadarshini',
            date: '14 Jun, 2024',
            views: '14885',
            readTime: '7 Min Read'
        },
        {
            id: 18,
            courseName: "Career",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
            title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            author: 'Jaishree Tomar',
            date: '14 Jun, 2024',
            views: '12698',
            readTime: '5 Min Read'
        },
        {
            id: 19,
            courseName: "Career",
            img: career4,
            title: 'Is Data Science A Good Career Choice In 2024?',
            author: 'Archana',
            date: '16 Apr, 2024',
            views: '1321',
            readTime: '4 Min Read'
        },
        {
            id: 20,
            courseName: "Career",
            img: career5,
            title: 'What Is a Data Engineer? A Complete Guide to this Data Career',
            author: 'Tushar Vinocha',
            date: '16 Apr, 2024',
            views: '2312',
            readTime: '3 Min Read'
        }
];

  return (
    <>
     {/* Creating Routing */}
     <BrowserRouter>
       <div>
        <Navbar />
       </div>
       <Routes>
        <Route path='/' exact element={<AllCourses allCourses={allCourses}/>} />
        <Route path='/fullstack' element={<FullStackDevelopment allCourses={allCourses}/>} />
        <Route path='/cybersecurity' element={<CyberSecurity allCourses={allCourses}/>} />
        <Route path='/datascience' element={<DataScience allCourses={allCourses}/>} />
        <Route path='/career' element={<Career allCourses={allCourses}/>} />
       </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
