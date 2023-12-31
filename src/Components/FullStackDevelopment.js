import React from 'react'
import image1 from '../assets/Full Stack Development/1.webp'
import image2 from '../assets/Full Stack Development/2.webp'
import image3 from '../assets/Full Stack Development/3.webp'
import image4 from '../assets/Full Stack Development/4.webp'
import image5 from '../assets/Full Stack Development/5.webp'
import image6 from '../assets/Full Stack Development/6.webp'
import image7 from '../assets/Full Stack Development/7.webp'
import image8 from '../assets/Full Stack Development/8.webp'
import image9 from '../assets/Full Stack Development/9.webp'
import './Blog.css';

function FullStackDevelopment() {
  const cardData = [
    {
      id: 1,
      img: image1,
      title: "7 Best Full-Stack Development Online Courses [2023]",
      description: "‍Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. Are you an aspiring web developer striving to enhance your web development skills and become a full-stack web developer?",
      date: "31 August 2023",
    },
    {
      id: 2,
      img: image2,
      title: "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
      description: "As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.",
      date: "5 August 2023",
    },
    {
      id: 3,
      img: image3,
      title: "The Ultimate Guide to Real-World Full-Stack Development Applications",
      description: "Full stack development is and will be a promising and an in-demand career in the",
      date: "5 August 2023",
    },
    {
      id: 4,
      img: image4,
      title: "Best Ways to Learn Full Stack Development in 2023",
      description: "Full stack development is and will be a promising and in-demand career in the upcoming years. According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey. You would be wondering how to get into this high-paying profession. Worry not, this blog will let you know about some of the best ways you can choose to get into full-stack development.",
      date: "4 August 2023",
    },
    {
      id: 5,
      img: image5,
      title: "How Long Would It Take to Be a Full Stack Developer?",
      description: "Have you ever wondered how much time it would take to become a skilled Full Stack Developer, capable of creating awesome websites and web applications? Whether you’re already familiar with coding or just starting, you might be curious about the learning process and how long it’ll take to reach your goals.",
      date: "4 August 2023",
    },
    {
      id: 6,
      img: image6,
      title: "Top Skills To Become a Full-Stack Developer in 2023",
      description: "Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.",
      date: "03 August 2023",
    },
    {
      id: 7,
      img: image7,
      title: "Top Full Stack Development Webinars and Workshops",
      description: "Are you keen to elevate your web development skills and master the art of Full Stack Development? There are numerous ways to acquire the knowledge necessary to become a proficient web developer.",
      date: "29 July 2023",
    },
    {
      id: 8,
      img: image8,
      title: "The Future & Scope of Full-Stack Developers in India",
      description: "Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.",
      date: "27 July 2023",
    },
    {
      id: 9,
      img: image9,
      title: "Top 10 Full-Stack Developer Frameworks in 2023",
      description: "In the ever-evolving world of technology, the demand for full stack developers is at an all-time high. As businesses continue to embrace online platforms and advanced technologies, they require professionals who can handle every aspect of web development, from design and front-end development to back-end coding and database management.",
      date: "27 July 2023",
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

export default FullStackDevelopment