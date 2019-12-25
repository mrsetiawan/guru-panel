import React from 'react';
import Layout from '../../components/Layout';

export default class FormEntry extends React.Component {

render() {
  return(
    <Layout title="Guru Ahli : Quizz">
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Create A Quizz</h1>
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
            Form Entry Quizz
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
            <div className="form-group">
                <label htmlFor="inputQuizzName">Quizz Name</label>
                <input type="text" className="form-control col-lg-6" id="inputQuizzName" placeholder="Enter Quizz Name" />
            </div>
          </div>

          <div className="mb-3 row">
            <div className="form-group col-4">
                <label htmlFor="inputCapacity">Capacity</label>
                <input type="number" className="form-control col-lg-6" id="inputCapacity" placeholder="Enter Capacity" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="inputDurationMinute">Duration Minute</label>
                <input type="number" className="form-control col-lg-6" id="inputDurationMinute" placeholder="Enter Duration Minute" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="inputTotalQuestions">Total Questions</label>
                <input type="number" className="form-control col-lg-6" id="inputTotalQuestions" placeholder="Enter Total Questions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</Layout>
     )
  }
}

