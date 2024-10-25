import React from "react";

interface StudentProps{
    name: string;
    age: number;
    rollnumber: number;
    className: string
}

const StudentCard: React.FC<StudentProps> =({name, age,rollnumber,className})=>{
    return(
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-red-500">
            <div className="px-28  py-6">
                <div className="font-bold text-xl mb-4">
                    {name}</div>
                    <p className="text-gray-600 text-white ">Age:{age}
                    </p>
                   
                    <p className="text-gray-600 text-white">RollNumber:{rollnumber}
                    </p>
                    
                    <p className="text-gray-600 text-white">className:{className}
                    </p>
                </div>
            </div>
        
    );
};

export default StudentCard;