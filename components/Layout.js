import React from 'react';
import HeadTag from '../pages/head-tag';
import ScriptTag from '../pages/script-tag';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import Router from 'next/router';

class Layout extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem("jwt");
    if(jwt === null) {
      Router.push("/login");
    }
  }

  render(){
    const {children, title} = this.props;
      return(
          <>
              <HeadTag>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
              </HeadTag>
              <div className="wrapper">
                <Navbar />
                <SideBar />
                {children}
                <Footer />
              </div>
              <ScriptTag />
          </>
          )
    }
}
export default Layout;