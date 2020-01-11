import React, { Component } from 'react'
import ContentHeader from '../../components/ContentHeader'
import CKEditor from 'ckeditor4-react'
import { ClassModel } from '../../model/ClassModel'
import ClassesController from '../../controllers/classes'

export class FormClasses extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEntry: true,
      model: { ...ClassModel },
    }
  }

  configCKEditor = {
    extraPlugins: 'mathjax',
    mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
    height: 320
  }

  componentDidMount() {
    console.log(this.state.model)
  }

  onChangeModel = (e) => {
    this.setState({
      model: { ...this.state.model, [e.target.name]: e.target.value }
    })

    console.log(this.state.model)
  }

  render() {

    const { isEntry } = this.state

    return (
      <div className="content-wrapper">
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-9'>
              {isEntry ? <ContentHeader title="Create Classes" /> : <ContentHeader title="Edit Classes" />}
            </div>
            <div className='col-md-3 p-2 d-flex align-items-center justify-content-between'>
              <button onClick={this.onResetForm} className='btn btn-block btn-danger mt-2'>Reset</button>&nbsp;
              <button onClick={this.onSaveForm} className='btn btn-block btn-success' >Save</button>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className='row'>
                <div className='col-md-8'>
                  <div className="card">
                    <div className="card-body pad">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Class Level</label>
                            <input type="text"
                              className="form-control"
                              name="classLevel"
                              onChange={this.onChangeModel} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Class Name</label>
                            <input type="text"
                              className="form-control"
                              name="className"
                              onChange={this.onChangeModel} />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <CKEditor
                          onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                          config={this.configCKEditor}
                          data="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                      <div className="form-group">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormClasses
