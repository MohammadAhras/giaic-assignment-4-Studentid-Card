import React from "react";
import StudentList from "./components/StudentList";

const Home=()=>{
    return(
        <div>
            <h1 className="text-3xl font-bold mb-4">Student ID Card</h1>
            <StudentList/>
        </div>
    )
}

export default Home;