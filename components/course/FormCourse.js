import React from 'react';
import ContentHeader from '../ContentHeader';

const FormCourse = () => {

    return(
        <div className="content-wrapper">
        <ContentHeader title="Create A Course" />
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
                  
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
  )

}

export default FormCourse;
