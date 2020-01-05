import React, { Component } from 'react'
import ContentHeader from '../../components/ContentHeader'
import Autocomplete from 'react-autocomplete'
import CKEditor from 'ckeditor4-react'
import QuizController from '../../controllers/quizzes'
import ClassController from '../../controllers/classes'
import ChapterController from '../../controllers/chapters'
import CourseController from '../../controllers/courses'
import { QuizModel } from '../../model/QuizModel'

class Form extends Component {
  quizController = new QuizController();
  classController = new ClassController();
  chapterController = new ChapterController();
  courseController = new CourseController();

  state = {
      selectClass: { data: [], value: '' },
      selectChapter: { data: [], value: '' },
      selectQuestion: { data: [], value: '' },
      selectCourse: { data: [], value: '' },
      model: {...QuizModel},
      isEntry: true
    }
  configCKEditor = { 
    extraPlugins: 'mathjax',
    mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
    height: 320
  }

  renderItemAutoComplete = (item, isHighlighted) => (
    <div className="p-2" key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item.label}
    </div>
  )

  menuStyleAutoComplete = { 
    zIndex: 999,
    position: "fixed",
    boxShadow: "0 2px 2px #ccc"
  }
  componentDidMount()
  {
    const paramId = this.props.match.params.id;
    if(paramId)
    {
      this.setState({ isEntry: false })
      this.quizController.getById(paramId)
          .then(res => res.data)
          .then(res => {
            this.setState({ model: {...res} })
            
          })
    }

    this.classController
        .getList({ _limit: 10 })
        .then(res => res.data)
        .then(res => {
          const classes = res.map(x => ({ id: x.id, label: x.className }))
          this.setState({ selectClass: {...this.state.selectClass, data: classes} })
        })

    this.chapterController
        .getList({ _limit: 10 })
        .then(res => res.data)
        .then(res => {
          const chapters = res.map(x => ({ id: x.id, label: x.name }))
          this.setState({ selectChapter: {...this.state.selectChapter, data: chapters} })
        })

  }

  onChangeModel = (type, value) => {
    this.setState({ model: {...this.state.model, [type]: value } })
  }

  onSaveForm = () => {
    const chapters = this.state.model.chapters.map(x => x.id);
    const courses = this.state.model.courses.map(x => x.id);
    const classes = this.state.model.classes.map(x => x.id);
    if(this.state.isEntry){
    this.quizController.onInsert({...this.state.model, chapters, courses, classes })
        .then(() => alert('success'))
    }else{
      this.quizController.onUpdate({...this.state.model, chapters, courses, classes })
        .then(() => alert('success'))
    }
  }

  onResetForm = () => {
    this.setState({ model: {...QuizModel} })
  }

  onSelectClass = item => {
    const classes = [ ...this.state.model.classes, item];
    this.setState({
      selectClass: {...this.state.selectClass, value: item.value}, 
      model: {...this.state.model, classes }
    })
  }

  onChangeClass = ({target: {value}}) => {
    this.classController
        .getList({  _q: value })
        .then(res => res.data)
        .then(res => {
          const classes = res.map(x => ({ id: x.id, label: x.className }))
          this.setState({ selectClass: {...this.state.selectClass, data: classes} })
        })

    this.setState({selectClass: {...this.state.selectClass, value} })
  }

  deleteClass = (id) => {
    const remClassById = this.state.model.classes.filter(cls => cls.id !== id);
    this.setState({
      model:  {...this.state.model, classes: [...remClassById] }
    })
  }

  onSelectChapter = item => {
    const chapters = [ ...this.state.model.chapters, item];
    this.setState({
      selectChapter: {...this.state.selectChapter, value: item.value}, 
      model: {...this.state.model, chapters }
    })
  }

  onChangeChapter = ({target: {value}}) => {
    this.classController
        .getList({  _q: value })
        .then(res => res.data)
        .then(res => {
          const chapters = res.map(x => ({ id: x.id, label: x.name }))
          this.setState({ selectChapter: {...this.state.selectChapter, data: chapters } })
        })

    this.setState({selectChapter: {...this.state.selectChapter, value} })
  }

  deleteChapter = (id) => {
    const remClassById = this.state.model.chapters.filter(cls => cls.id !== id);
    this.setState({
      model:  {...this.state.model, chapters: [...remClassById] }
    })
  }
 
  onSelectCourse = item => {
    const courses = [ ...this.state.model.courses, item];
    this.setState({
      selectCourse: {...this.state.selectCourse, value: item.value}, 
      model: {...this.state.model, courses }
    })
  }

  onChangeCourse = ({target: {value}}) => {
    this.courseController
        .getList({  _q: value })
        .then(res => res.data)
        .then(res => {
          const courses = res.map(x => ({ id: x.id, label: x.name }))
          this.setState({ selectCourse: {...this.state.selectCourse, data: courses } })
        })

    this.setState({selectCourse: {...this.state.selectCourse, value} })
  }

  deleteCourse = (id) => {
    const remClassById = this.state.model.courses.filter(cls => cls.id !== id);
    this.setState({
      model:  {...this.state.model, courses: [...remClassById] }
    })
  }
  render() {
    const { selectClass, selectChapter, selectCourse, model, isEntry } = this.state
    return (
      <div className="content-wrapper">
        <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-9'>
              {isEntry ? <ContentHeader title="Create An Entry" /> : <ContentHeader title="Edit quiz" />}
            </div>
            <div className='col-md-3 p-2 d-flex align-items-center justify-content-between'>
              <a href="#" onClick={this.onResetForm} className='btn btn-block' >Reset</a>
              <a href="#" onClick={this.onSaveForm} className='btn btn-block btn-success' >Save</a>
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
                      <div className="form-group">
                        <label htmlFor="inputQuizName">Quiz Name</label>
                        <input 
                          type="text" 
                          id="inputQuizName" 
                          className="form-control"
                          value={model.quizName}
                          onChange={(ev) => this.onChangeModel("quizName", ev.target.value)}
                           />
                      </div>
                      <CKEditor 
                        onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) }
                        config={this.configCKEditor}
                        data={model.description}
                        onChange={(ev) => this.onChangeModel("description", ev.editor.getData() )} />
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="inputCapacity">Capacity</label>
                            <input 
                              type="number" 
                              id="inputCapacity" 
                              className="form-control"
                              value={model.capacity}
                              onChange={(ev) => this.onChangeModel("capacity", ev.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="inputDurationMinute">Duration Minute</label>
                            <input 
                              type="number" 
                              id="inputDurationMinute" 
                              className="form-control" 
                              value={model.durationMinute}
                              onChange={(ev) => this.onChangeModel("durationMinute", ev.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="inputTotalQuestions">Total Questions</label>
                            <input 
                              type="number" 
                              id="inputTotalQuestions" 
                              className="form-control"
                              value={model.totalQuestions}
                              onChange={(ev) => this.onChangeModel("totalQuestions", ev.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                      <Autocomplete
                        menuStyle={this.menuStyleAutoComplete}
                        inputProps={{  className: "form-control", placeholder: "Select a chapter" }}
                        getItemValue={(item) => item}
                        items={selectChapter.data}
                        renderItem={this.renderItemAutoComplete}
                        value={selectClass.value}
                        onSelect={this.onSelectChapter}
                        onChange={this.onChangeChapter}
                      />
                      {model.chapters.map((cls, idx) => 
                      <div key={idx} className="d-flex justify-content-between align-items-center mt-1 shadow-sm p-1">
                          <span>{cls.label}</span> 
                          <a href="#" 
                             onClick={() => this.deleteChapter(cls.id)} className="btn btn-sm btn-danger">x</a>
                      </div>)}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                      <Autocomplete
                        menuStyle={this.menuStyleAutoComplete}
                        inputProps={{  className: "form-control", placeholder: "Select a class" }}
                        getItemValue={(item) => item}
                        items={selectClass.data}
                        renderItem={this.renderItemAutoComplete}
                        value={selectClass.value}
                        onSelect={this.onSelectClass}
                        onChange={this.onChangeClass}
                      />
                      {model.classes.map((cls, idx) => 
                      <div key={idx} className="d-flex justify-content-between align-items-center mt-1 shadow-sm p-1">
                          <span>{cls.label}</span> 
                          <a href="#" 
                             onClick={() => this.deleteClass(cls.id)} 
                             className="btn btn-sm btn-danger">x</a>
                      </div>)}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                      <Autocomplete
                        menuStyle={this.menuStyleAutoComplete}
                        inputProps={{  className: "form-control", placeholder: "Select a course" }}
                        getItemValue={(item) => item}
                        items={selectCourse.data}
                        renderItem={this.renderItemAutoComplete}
                        value={selectCourse.value}
                        onSelect={this.onSelectCourse}
                        onChange={this.onChangeCourse}
                      />
                      {model.courses.map((cls, idx) => 
                      <div key={idx} className="d-flex justify-content-between align-items-center mt-1 shadow-sm p-1">
                          <span>{cls.label}</span> 
                          <a href="#" 
                             onClick={() => this.deleteClass(cls.id)} 
                             className="btn btn-sm btn-danger">x</a>
                      </div>)}
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

export default Form
