import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

class Layout extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem("jwtToken");
    if(jwt === null) {
      Router.push("/login");
    }
  }

  render(){
    const {
        children, 
        title = "Guru Ahli", 
        headTag = () => (null), 
        scriptTag = () => (null) 
      } = this.props;
      
      return(
          <>
              <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
                <link rel="stylesheet" href="/dist/css/adminlte.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                {headTag()}
              </Head>
                {children}
             
              <script src="/plugins/jquery/jquery.min.js"></script>
              <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
              <script src="/dist/js/adminlte.min.js"></script>
              <script src="https://cdn.ckeditor.com/4.13.1/standard-all/ckeditor.js"></script>
              {scriptTag()}
          </>
          )
    }
}
export default Layout;