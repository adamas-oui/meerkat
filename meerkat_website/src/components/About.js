import React from 'react'
import './About.css'

function CreateAbout() {
  return (
     
      <div className="row min-vh-100 align-items-center justify-content-center">  
        
        <div className="col-sm-5">
          <div className="card border-light">
            <div className="card-body">
              <h5 className="card-title">about the website...</h5>
              <p className="card-text">The creation of this website is inspired by a constant annoyance of failing to book a popular Michelin restaurant.</p>
              <p className="card-text">The front end is heavily React.js-based and styled with Bootstrap React and CSS. Express.js with Node.js are used 
                                        as back end framework to connect with our database stored in MongoDB. </p>               
              <p className="card-text">In addtion, the web service is assisted with 
              Python scripts to scrape the website of restaurants (by August 2021 we can only do Tock.com), for which Selenium webdriver
              is used specifically for dynamic web-scraping, and to send SMS messages to the users, for which Twilio makes it possible.</p>
              <p className="card-text">In the process of creating this website, Stephen Grider's "Modern React with Redux" on Udemy, the YT channels of Marina Kim, Brian Design
              and Web Dev Simplified have passed tremedous programming knowledge to me. Thank you.</p>
              <p className="card-text">Everything about this website is documented at Github here: </p>
              <a href="https://github.com/adamas-oui/meerkat" >https://github.com/adamas-oui/meerkat</a>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="col-sm-5">
          <div className="card border-light">
            <div className="card-body">
              <h5 className="card-title">about me...</h5>
              <p className="card-text">Check out my experince at &nbsp; 
              <a href="https://www.linkedin.com/in/yilin-liu-profile/"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg> 
              </a>
              </p>
            </div>
          </div>
        </div>

      </div>
      
  )
}

export default CreateAbout;