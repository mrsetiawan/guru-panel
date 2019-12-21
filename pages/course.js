import React from 'react';
import HeadTag from './head-tag';
import ScriptTag from './script-tag';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import FormCourse from '../components/course/FormCourse';

export default class Course extends React.Component {

render() {
  return(
    <div>
        <HeadTag>
          <title>Guru Ahli : Course</title>
          <link rel="icon" href="/favicon.ico" />
        </HeadTag>
        <div className="wrapper">
          <Navbar />
          <SideBar />
          <FormCourse />
          <Footer />
        </div>
        <ScriptTag />
    </div>
    )
  }
}

