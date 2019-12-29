import React from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(import('../../components/Layout'));
const Navbar = dynamic(import('../../components/Navbar'));
const SideBar = dynamic(import('../../components/SideBar'));
const Footer = dynamic(import('../../components/Footer'));

export default class FormEntryCourse extends React.Component {

  componentDidMount()
{
  

}




render() {
  return(
    <Layout title="Guru Ahli : Home" >
       <div className="wrapper">
          <Navbar />
          <SideBar />
    <div className="content-wrapper">
        <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Create A Course</h1>
                        </div>
                    </div>
                </div>
            </div>
        <div className="content">
        <div className="row">
        <div className="col-md-12">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                Form Entry Course
              </h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fas fa-minus"></i></button>
                <button type="button" className="btn btn-tool btn-sm" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fas fa-times"></i></button>
              </div>
            </div>
            <div className="card-body pad">
              <div className="mb-3">
              <textarea cols="10" id="editorQuizz" name="editor1" rows="10" data-sample-short></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <Footer />
        </div>
  </Layout>
    )
                  
  }
}

