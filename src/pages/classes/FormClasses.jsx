import React, { Component } from 'react'
import ContentHeader from '../../components/ContentHeader'
import CKEditor from 'ckeditor4-react'
import { ClassModel } from '../../model/ClassModel'
import ClassesController from '../../controllers/classes'
import QuestionController from '../../controllers/questions'
import AsyncSelect from 'react-select/async'
import GradeController from '../../controllers/grades'
import StudentController from '../../controllers/student'

export class FormClasses extends Component {

  gradeController = new GradeController();
  questionController = new QuestionController();
  classesController = new ClassesController();
  studentController = new StudentController();

  constructor(props) {
    super(props)
    this.state = {
      isEntry: true,
      model: { ...ClassModel },
      questionsOpts: [],
      gradeOptions: []
    }
  }

  configCKEditor = {
    extraPlugins: 'mathjax',
    mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
    height: 320
  }

  componentDidMount() {
    this.gradeController.getList()
      .then(res => res.data)
      .then(res => this.setState({ gradeOptions: res }))

    console.log(this.studentController)
  }

  // onChangeModel = (e) => {
  //   this.setState({
  //     model: { ...this.state.model, [e.target.name]: e.target.value }
  //   })
  // }

  loadQuestions = (inputValue, callback) => {
    this.questionController
    .getList({ _q:inputValue })
    .then(res => res.data)
    .then(res => {
      const quest = res.map(x => ({value:x._id, label:x.question}))
      callback([...quest])
    })
  }

  handleChangeQuestions = (quest) => {
    if(quest == null) { quest = [] }
    this.setState({
      model: {...this.state.model,questions: [...quest]}
    })

  }

  onChangeModel = (type, value) => {
    this.setState({ model: {...this.state.model, [type]: value } })
  }

  render() {

    const { isEntry, model, gradeOptions } = this.state
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
                      <label >Grade</label>
                      <select
                        value={model.grades}
                        onChange={(ev) => this.onChangeModel("grades", ev.target.value)}
                        className="form-control">
                        <option>Select...</option>
                        {gradeOptions.map(val => <option key={val._id} value={val.id}>{val.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                    <label>Questions</label>
                     <AsyncSelect 
                      isMulti
                      placeholder="Select questions"
                      closeMenuOnSelect={false}
                      cacheOptions
                      value={model.questions}
                      loadOptions={this.loadQuestions}
                      onChange={this.handleChangeQuestions}
                      />
                     
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
