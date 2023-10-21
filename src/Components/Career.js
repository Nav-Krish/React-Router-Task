import React from 'react'
import image1 from '../assets/Career/1.webp'
import image2 from '../assets/Career/2.webp'
import image3 from '../assets/Career/3.webp'
import image4 from '../assets/Career/4.webp'
import image5 from '../assets/Career/5.webp'
import image6 from '../assets/Career/6.webp'
import './Blog.css';


function Career() {
  const blogCardData = [
    {
      id: 1,
      img: image1,
      description: "Selecting the right launchpad for a successful career in digital marketing isn’t just about joining any company; it’s about aligning with those who are at the forefront of innovation. ",
      date: "12 October 2023",
    },
    {
      id: 2,
      img: image2,
      title: "Best Product-based Companies for Motion Graphic Designing in 2023",
      description: "Motion graphic designers are the unsung heroes of any company as their designs, and animations are what attract customers, and the role of motion graphic designers in product-based companies is pivotal in every aspect.",
      date: "12 October 2023",
    },
    {
      id: 3,
      img: image3,
      title: "8 Excellent Product-based Companies for UI/UX Designing",
      description: "In today’s tech-driven world, the demand for exceptional user experiences has never been higher. From smartphones and websites to software applications and digital services, the role of UI/UX designers has become increasingly important. For Product-based companies that solely depend on their product, these user experiences are very important.",
      date: "12 October 2023",
    },
    {
      id: 4,
      img:image4,
      title: "Top 5 Product-Based Companies for Machine Learning Engineers",
      description: "Machine learning is what’s currently backing up most of our daily tech today, that’s how much influence and reliability it has garnered over the last few years. It has emerged as a game-changer for businesses across various industries, driving vital changes and bringing about quite the tech revolution.",
      date: "11 October 2023",
    },
    {
      id: 5,
      img: image5,
      title: "Top Product-Based Companies for Cloud Engineers 2023",
      description: "In the fast-paced world of technology, cloud engineers are in high demand, driving innovation and efficiency across industries. As the cloud computing landscape evolves, numerous product-based companies are at the forefront, leveraging cutting-edge technologies to build scalable and robust solutions.",
      date: "07 October 2023",
    },
    {
      id: 6,
      img: image6,
      title: "Top Product-Based Companies for Data Scientists in 2023 ",
      description: "We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot! With the explosive growth of big data, companies across all kinds of industries are leveraging data science to gain valuable insights and make informed decisions, making it an extremely important part of doing business in general.",
      date: "05 October 2023",
    },
  ]

  return (
    <div className='blog-container'>
      <div className="card-group">
        <div className="row">
          {blogCardData.map(blog => (
            <div className="col-12 col-md-4" key={blog.id}>
              <div className="card">
                  <img src={blog.img} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <p className="title"><a className="card-title" href=''>{blog.title}</a></p>
                  <p className="card-text">{blog.description}</p>
                  <a className="read-more" href=''>
                    Read More »
                  </a>
                </div>
                <div className="footer bg-transparent">
                  <span className="date"> {blog.date} </span>
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

export default Career