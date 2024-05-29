import React from 'react';
import "../styles/teacherList.css";
import Image1 from '../assets/image.png';

const teachers=[
    {
        image: Image1,
        name: 'prof, jhone doe',
        duration:'20 hours',
        cost:'100'
    },
    {
        image: Image1,
        name: 'prof, jhone doe',
        duration:'20 hours',
        cost:'100'
    },
    {
        image: Image1,
        name: 'prof, jhone doe',
        duration:'20 hours',
        cost:'100'
    },
    {
        image: Image1,
        name: 'prof, jhone doe',
        duration:'20 hours',
        cost:'100'
    }
]

const TeacherList = () => {
  return (
    <div className='teacher--list'>
        <div className="list--header">
            <h2>Teachers</h2>
            <select>
                <option value='english'>English</option>
                <option value='Hindi'>Hindi</option>
                <option value='marathi'>marathi</option>
            </select>
        </div>
        <div className='list--container'>
            {teachers.map((teacher)=>(
                <div className='list'>
                <div className='teacher--details'>   
                    <img src={teacher.image} alt={teacher.name}/>
                    <h2>{teacher.name}</h2>
                </div>
                <span>{teacher.duration}</span>
                <span>${teacher.cost}/hr</span>
                <span className='teacher--todo'>:</span>
                </div>
                ))}
        </div>
    </div>
    );
}
export default TeacherList