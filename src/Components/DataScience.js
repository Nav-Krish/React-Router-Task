import React from 'react'
import './Blog.css';

function DataScience() {
  const cardData = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Top Product-Based Companies for Data Scientists in 2023",
      description: "We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot! With the explosive growth of big data, companies across all kinds of industries are leveraging data science to gain valuable insights and make informed decisions, making it an extremely important part of doing business in general.",
      date: "05 October 2023",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      description: "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare. Imagine it like this: you have a treasure map (the data), and you need tools (Python) to find the hidden treasure (insights). Python is like a trusty flashlight that helps you find your way.",
      date: "29 September 2023",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description: "As the demand for data and the people that can conquer it, i.e. Data Scientists continues to soar, it has become crucial for aspiring professionals to stand out from the crowd by showcasing their skills through real-world projects.",
      date: "28 August 2023",
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      title: "Future of Data Science and How You Can Thrive With It",
      description: "Data Science has emerged as a revolutionary field in the technology world, transforming the way computers learn and helping organizations make data-driven decisions.",
      date: "28 August 2023",
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      title: "10 Best Data Science Online Courses for Beginners | 2023",
      description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most sought-after Technical fields. As businesses strive to leverage the power of data to gain valuable insights and make informed decisions, the demand for skilled data scientists is skyrocketing.",
      date: "14 August 2023",
    },
    {
      id: 6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
      title: "Data Science Webinars and Workshops",
      description: "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data science. With data being such an integral part of nearly every industry, staying up to date on the latest trends and techniques is crucial. So how can you keep your skills sharp and stay ahead of the curve? ",
      date: "9 August 2023",
    },
    {
      id: 7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      title: "10 Best Data Science Frameworks in 2023",
      description: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks. These frameworks are used by data scientists to ease their work pressure by using them in projects. Data science has become an integral part of many industries, driving innovation and providing valuable insights. As the field continues to evolve, data scientists rely on various frameworks and tools to organize, analyze, and interpret data efficiently.",
      date: "5 August 2023",
    }, {
      id: 8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-1536x804.webp",
      title: "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      description: "Data science has become one of the most sought-after skills in the current job market. If you’re looking to score one of these highly sought-after roles, there are numerous resources available online that can help you learn.",
      date: "5 August 2023",
    }, {
      id: 9,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-1536x804.png",
      title: "Everything about Data Scientist Salary in India | 2023",
      description: "Are you curious about the highly sought-after field of data science and the potential it holds for your career?",
      date: "5 August 2023",
    }
  ]

  return (
    <div className='blog-container'>
      <div className="card-group">
        <div className="row">
          {cardData.map(ele => (
            <div className="col-12 col-md-4" key={ele.id}>
              <div className="card">
              <img src={ele.img} className="card-img-top" alt={ele.title} />
                <div className="card-body">
                  <p className="title"><a className="card-title" href=''>{ele.title}</a></p>
                  <p className="card-text">{ele.description}</p>
                  <a className="read-more" href=''>
                    Read More »
                  </a>
                </div>
                <div className="footer bg-transparent">
                  <span className="date"> {ele.date} </span>
                  <span className="comments"> No Comments </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DataScience