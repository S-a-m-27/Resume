import React from "react";
import './Info.css'
const Info=() =>{
    return(
        /*MAIN Class summary*/
        <div  className="Summary">
            <h5>
                Summary
            </h5>
            <p>
            I am currently doing my Bachelor’s Degree. I want a 
            platform to polish and practice my skills so I can 
            achieve perfection and gain some more skills that will 
            be valuable for me. I have no past work experience in 
            anything or any related field
            </p>
            
            <h5>
                Education
            </h5>
            
            <h6>
            <strong>BS Artificall Intelligence</strong> Oct 2022-Present <br/>
            </h6>
            <p1>
            Arid Agriculture University</p1> 
            <br/>
            <p1>Current semester 5th</p1>   
            <br/>
            <p1>
            Current Cgpa is 3.02
            </p1>
            <h6>
            <strong>Higher Secondary School</strong> Sep 2020-July 2022 <br/>
            </h6>
            <p1>
            Astron College Satellite Town, Rawalpindi
            </p1>
            <h6>
            <strong>Matriculation Certificate</strong> Sep 2018-July2020  <br/>
            </h6>
            <p1>
            P.A.E.C College for boys Nilore, Islamabad
            </p1>
            
            <h5>
                Projects
            </h5>
            <h3>
                C++
            </h3>
            <p>
                <strong>Bakery Management System <br/><br/></strong>
            My first project was bakery management system. I made a 
            system where a customer was allowed to choose different 
            bakery items in the desired amount. Then the bill according to 
            the prices was generated. The customer was able to add more 
            items after the generation off bill and if the user add more 
            things than the user was given a new and updated bill 
            </p>
            <h3>
                Java
            </h3>
            <p>
            <strong>Cable Management System <br/><br/></strong>
            I made a project related to the oop concepts in java. The 
            program was designed in such a way that if a customer 
            wants to buy a cable firstly customer have to give how 
            much will be the length of wire and according to the length 
            there were different prices with different types of cables 
            and at last customer have to pay the bill. I implemented 
            the concept of file handling in it and connected it with sql 
            server 
            </p>
            <h3>
                Python
            </h3>
            <p>
            <strong>Machine Learning<br/><br/></strong>
            I have trained many of the Machine Learning models on 
            different data sets and achieved accuracy. I know the 
            basics about how to clean data, balance data, data 
            analysis, data clustering etc. 
            </p>
            
        </div>
        
        
    )

   
    
}
export default Info;