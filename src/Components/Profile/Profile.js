import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImage from '../../assets/images/img1.jpeg'; // Update with your image path
import './Profile.css'; 

const Profile=() =>{
 return(
    <div className="profile">
      <figure className="profile-image">
        <img src={profileImage} alt="Profile"/>
      </figure>
      <div className='Profile-info'>
        <h2 className='Name'>
            Sohaib Ahmed Abbasi<br/>
            BS(Artificall Intelligence)<br/>
            22-ARID-4200<br/>
        </h2>
        <h3 className='Title'>
            Personal Details
        </h3>
        <p>
        <i className='fas fa-phone'></i> 0331-5985732<br/>
        <a href="mailto:sohaib5107886@gmail.com" className="email-link">
            <i className="fas fa-envelope"></i> sohaib5107886@gmail.com
          </a>
          <br/>
        <i className="fas fa-home"></i> pd1127-A,Street 4,Stadium Road Rawalpindi<br/>
        <i className='fas fa-cake'></i> November 27,2004<br/>
        <i className='fas fa-flag'></i> Pakistani<br/>
        </p>
        <section className='skills'>
           <h4>Skills</h4>
           <u1>
           <li>Machine Learning</li>
           <li>Java</li>
           <li>Python</li>
           <li>C++</li>
           <li>OOP</li>
           <li>DSA</li>
           <li>Assembly Language</li>
           <li>Computer Networks</li>
           <li>SQL</li>
           </u1>
        </section>
        <div className='Languages'>
           <h5 className='Languages'>Languages</h5>
          <ul>
            <li>
              English 
              </li>
              <li>
              Urdu
            </li>
          </ul>
          <h5>
                Hobbies
                </h5>
                <ul>
            <li>
              Fitness
              </li>
              <li>
              Cricket
            </li>
          </ul>

                
          
            
        </div>
        
      </div>
    </div>

 )

}
export default Profile;