// Content.jsx
import React from 'react';
import ContentHeader from './contentHeader.jsx'; // Correct casing
import Card from './Card.jsx';
import "../styles/content.css"
import TeacherList from './TeacherList.jsx';



const Content = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <Card />
            <TeacherList/>
        </div>
    );
};

export default Content;
