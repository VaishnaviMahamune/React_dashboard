import React from 'react';
import '../styles/profile.css';
import ProfileHeader from './profileHeader';
import userImage from '../assets/image.png';
import{BiBook} from 'react-icons/bi'

const courses=[
  {
    title:'java',
    duration:'2 hours',
    icon: <BiBook />
  },
  {
    title:'python',
    duration:'2 hours',
    icon: <BiBook />
  },
  {
    title:'golang',
    duration:'2 hours',
    icon: <BiBook />
  }
]

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--details">
          <img src={userImage} alt="" />
          <h3 className='username'>John Doe</h3>
          <span className='profession'>Teacher</span>
        </div>

        <div className="user-courses">
          {courses.map((course) => (
            <div className='course'>
            <div className='course--details'>
              <div className="course--cover">{course.icon}</div>
              <div className="course-name">
                <h5 className='title'>{course.title}</h5>
                <span className='duration'>{course.duration}</span>
              </div>
            </div>
            <div className="action">:</div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;