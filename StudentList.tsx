import React from "react";
import StudentCard from "./card";

const Student=[{name:'Kamran', age:21, rollnumber: 15643, className:'Monday'},
    {name:'Kamran', age:21, rollnumber: 1643, className:'Monday'},
    {name:'Rizwan', age:25, rollnumber: 1903, className:'Saturday'},
    {name:'Musa', age:20, rollnumber: 1443, className:'Monday'}

];

const StudentList =()=>{
    return(
        <div className="flex flex-wrap justify-center">{Student.map((student) =>(
        <StudentCard 
        key={student.rollnumber}
        name={student.name}
        age={student.age}
        rollnumber={student.rollnumber}
        className={student.className}
        />
        
        ))};
        
        </div>
    );
};

export default StudentList;