import React from "react";
import avater from "../image/down-arrow-icon-480x512-4enkcnra.png";




function Intern() {
    const internsBasicInfo = [
        {            
            Names: "Oguejifor minee",
            Myshedule: "My shedule",
            Courses: "Courses",
            Students: "Students",
            Grade:"Grade",
            pictures: "https://media.istockphoto.com/id/1198252595/photo/cheerful-indian-girl-standing-at-home-office-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=nqRJ4GR2qi6eRzwlNd9nMNeihlR-d64p4uHxlf2tu78=",
            Reporting: "Reporting",
            Messages: "Messages"            
        }
    ];

    const internsDetailedInfo = [
          {
            id: 1,
            name:"Name",
            Group:"Group",
            Homework:"Homework",
            Attendance:"Attendance",
            project:"project",
            Score:"Score",
            Picture: avater
          },

        {
            id: 2,
            name: "Oko juliet",
            Group:"Fullstack 11",
            Homework:9,
            Attendance:10,
            project:4,
            Score:74,
            picture: "https://media.istockphoto.com/id/1198252595/photo/cheerful-indian-girl-standing-at-home-office-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=nqRJ4GR2qi6eRzwlNd9nMNeihlR-d64p4uHxlf2tu78=",
            
        },
        {
         id: 3,
        name: "Obodo favour",
         Group:"design 12",
            Homework:11,
            Attendance:11,
            project:6,
            Score:86,
        picture: "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg?auto=compress&cs=tinysrgb&w=600",
        
      },
      {
        id: 4,
        name: "Chinwe Onwu",
        Group:"Front-end 17",
        Homework:7,
        Attendance:10,
        project:4,
        Score:63,
        picture: "https://images.pexels.com/photos/1310524/pexels-photo-1310524.jpeg?auto=compress&cs=tinysrgb&w=600",
        
      },
      {
        id: 5,
        name: "Efo Miracle",
        Group:"web 3",
        Homework:10,
        Attendance:12,
        project:5,
        Score:92,
        picture: "https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=600",
        
      },
      {
        id: 6,
        name: "Chude Emma",
        Group:"design 11",
        Homework:9,
        Attendance:14,
        project:7,
        Score:74,
        picture: "https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=",
        
      },
      {
        id: 7,
        name: "Ken Nsude",
        Group:"fullstack 8",
        Homework:7,
        Attendance:7,
        project:3,
        Score:56,
        picture: "https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg?auto=compress&cs=tinysrgb&w=600",
        
      },

      {
        id: 8,
        name: "earl owen",
        Group:"front-end 8",
        Homework:9,
        Attendance:11,
        project:5,
        Score:77,
        picture: "https://media.istockphoto.com/id/1081381230/photo/african-american-man-pointing-aside-at-copy-space.jpg?s=612x612&w=0&k=20&c=Id44rC_ydbBFZev7N2NOxW_Ahvoi8JxfesUR5rVxUaU=",
        
        
      },

      {
        id: 9,
        name: "Harvey gill",
        Group:"back-end 8",
        Homework:15,
        Attendance:7,
        project:3,
        Score:56,
        picture: "https://images.pexels.com/photos/3799306/pexels-photo-3799306.jpeg?auto=compress&cs=tinysrgb&w=600",
        
      },
  
  

    ];

    return (
        <div className="parent-div">
            <div className="App">
                <header>
                    <h1>Interns Management</h1>
                    <p>student &nbsp; <i class="fa-solid fa-greater-than"></i> &nbsp;  journal  </p>
                    
                    <div className="bell"><i class="fa-regular fa-bell"></i></div>
                </header>

                <main>
                    {/* Display interns basic info */}
                    <div className="intern-basic-info">
                        {internsBasicInfo.map(intern => (
                            <div key={intern.Names}>
                                <img src={intern.pictures} alt="intern" width={"100px"}/>
                                <div className="intern-info">
                                    <h2>{intern.Names}</h2> 
                                   
                                    <p><a href="#"><i class="fa-solid fa-briefcase"></i> &nbsp; {intern.Myshedule}</a></p>
                                    <p><a href="#"><i class="fa-solid fa-book"></i> &nbsp; {intern.Courses}</a></p>
                                    <p><a href="#"><i class="fa-solid fa-user-group"></i> &nbsp; {intern.Students}</a></p>
                                    <p><a href="#"><i class="fa-regular fa-square-check"></i> &nbsp; {intern.Grade}</a></p>
                                    <p><a href="#"><i class="fa-brands fa-font-awesome"></i> &nbsp; {intern.Reporting}</a></p>
                                    <p><a href="#"><i class="fa-solid fa-envelope"></i> &nbsp; {intern.Messages}</a></p>                 
                                </div>
                            </div>
                        ))}
                        <div className="settings">
                            <p><a href="#">Setting</a></p>
                            <p>Log Out</p>
                        </div>
                    </div>
                    {/* Display interns detailed info */}
                    <div className="intern-detailed-info">
                        <button className="BTN">Search</button>
                        <section className="interns-list">
                            {internsDetailedInfo.map(intern => (
                                <div className="intern-card" id={`intern-${intern.id}`}  key={intern.id}>
                                    <img src={intern.picture} alt="intern"width={"50px"}/>
                                    <div className="intern-card-2">
                                        <h2 className="container"><a href="#">{intern.name}</a></h2> 
                                        <p className="container"><a href="#">{intern.Group}</a></p>
                                        <p className="container"><a href="#">{intern.Homework}</a></p>
                                        <p className="container">< a href="#">{intern.Attendance}</a></p>
                                        <p className="container"><a href="#">{intern.project}</a></p>
                                        <p className="container">{intern.Score}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Intern;
