import React from 'react'
import './Blog.css';

function CyberSecurity() {
  const blogCardData = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      description: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
      date: "25 September 2022",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
      date: "27 December 2022",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description: "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices.",
      date: "20 December 2022",
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
      title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
      description: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
      date: "21 November 2022",
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      description: "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. With the advent of technology and the increasing interconnectedness of organizational systems and networks, effective cybersecurity management and strategy are necessary for organizations of all sizes and types accordingly. Investments are flowing into this field and the market is projected to be a staggering 403 billion US dollars by 2027. This in turn has led to a spurt in demand for experts in the field of cyber security. Cybersecurity is an umbrella term that encompasses different types of security. In this article, we’re trying to deconstruct various types of cybersecurity. So let’s dig in. ",
      date: "9 November 2022",
    },
    {
      id: 6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you.",
      date: "22 June 2022",
    },
    {
      id: 7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-1536x480.jpg",
      title: "Top 7 Cyber Security Attacks in Real Life",
      description: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems.",
      date: "10 June 2022",
    },
    {
      id: 8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-1536x804.png",
      title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      description: "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism. The anecdote of a hacker has cultivated an ethos of individuality, corporate freedom, and distinct craftiness that can’t be denied. Also, the same archetype is visible in a number of pop-cultural references whether the famous TV series- Mr. Robot or real-life adaptations of Snowden and Julian Assange. Despite all the fascination of hacking, and hysteria, the field of cybersecurity is largely misunderstood outside of the realm of the IT ecosystem.",
      date: "01 March 2022",
    },
    {
      id: 9,
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Cybersecurity-ultimate-guide-1536x804.png",
      title: "Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap",
      description: "According to the job statistics of 2020, cybersecurity jobs were among the top 15 emerging jobs. Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore, the annual growth rate of cybersecurity jobs as identified by LinkedIn is 30%.",
      date: "01 March 2022",
    }
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

export default CyberSecurity