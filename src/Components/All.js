import React from 'react'
import image1 from '../assets/All/1.webp'
import image2 from '../assets/All/2.webp'
import image3 from '../assets/All/3.webp'
import image4 from '../assets/All/4.webp'
import image5 from '../assets/All/5.webp'
import image6 from '../assets/All/6.png'
import image7 from '../assets/All/7.webp'
import image8 from '../assets/All/8.webp'
import image9 from '../assets/All/9.webp'
import './Blog.css';

function All() {
  const homePageData = [
    {
      id: 1,
      img: image1,
      title: "Top Product-Based Companies for Digital Marketers",
      description: "Selecting the right launchpad for a successful career in digital marketing isn’t just about joining any company; it’s about aligning with those who are at the forefront of innovation.",
      date: "12 October 2023",
    },
    {
      id: 2,
      img: image2,
      title: "7 Best Full-Stack Development Online Courses [2023]",
      description: "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. Are you an aspiring web developer striving to enhance your web development skills and become a full-stack web developer?",
      date: "31 August 2023",
    },
    {
      id: 3,
      img: image3,
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      description: "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare. Imagine it like this: you have a treasure map (the data), and you need tools (Python) to find the hidden treasure (insights). Python is like a trusty flashlight that helps you find your way.",
      date: "29 September 2023",
    },
    {
      id: 4,
      img: image4,
      title: "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
      description: "As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.",
      date: "05 August 2023",
    },
    {
      id: 5,
      img: image5,
      title: "Best Product-based Companies for Motion Graphic Designing in 2023",
      description: "Motion graphic designers are the unsung heroes of any company as their designs, and animations are what attract customers, and the role of motion graphic designers in product-based companies is pivotal in every aspect.",
      date: "12 October 2023",
    },
    {
      id: 6,
      img: image6,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
      date: "27 December 2022",
    },
    {
      id: 7,
      img: image7,
      title: "Top Product-Based Companies for Data Scientists in 2023",
      description: "We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot! With the explosive growth of big data, companies across all kinds of industries are leveraging data science to gain valuable insights and make informed decisions, making it an extremely important part of doing business in general.",
      date: "05 October 2023",
    },
    {
      id: 8,
      img: image8,
      title: "What Is Hacking? Types of Hacking & More",
      description: "Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. ",
      date: "25 September 2023",
    },
    {
      id: 9,
      img: image9,
      title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description: "As the demand for data and the people that can conquer it, i.e. Data Scientists continues to soar, it has become crucial for aspiring professionals to stand out from the crowd by showcasing their skills through real-world projects.",
      date: "28 August 2023",
    }
  ]

  return (
    <div className='blog-container'>
      <div className="card-group">
        <div className="row">
          {homePageData.map(ele => (
            <div className="col-12 col-md-4 col-sm-6" key={ele.id}>
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

export default All