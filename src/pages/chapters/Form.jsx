import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import ContentHeader from '../../components/ContentHeader'
import QuestionController from '../../controllers/questions'
import ChapterController from '../../controllers/chapters'
import CurriculumController from '../../controllers/curriculums'
import QuizController from '../../controllers/quizzes'
import UsersPermissionsUser from '../../controllers/users-permissions-user'
import { ChapterModel } from '../../model/ChapterModel'
import 'toastr/build/toastr.min.css'
import toastr from 'toastr'

class Form extends Component {
  toastr = toastr;
  quizController = new QuizController()
  questionController = new QuestionController();
  chapterController = new ChapterController();
  curriculumController = new CurriculumController();
  usersPermissionsUser = new UsersPermissionsUser();

  state = {
      model: {...ChapterModel},
      curriculumOpts: [],
      questionsOpts: [],
      quizzesOpts: [],
      userOpts: [],
      isEntry: true
    }

  componentDidMount()
  {
     const paramId = this.props.match.params.id;
    if(paramId !== "entry" && paramId !== undefined)
    {
      this.setState({ isEntry: false })
      this.chapterController.getById(paramId)
          .then(res => res.data)
          .then(res => {
            res.curriculum = res.curriculum.id;
            res.user = res.user.id;
            res.quiz = res.quiz.id;
            res.questions = res.questions.map(x => ({ label: x.question, value: x.id }))
            this.setState({ model: {...res} })
          })
    }

    this.curriculumController.getList()
    .then(res => res.data)
    .then(res => {
      this.setState({ curriculumOpts: res })
    })

    this.quizController.getList()
    .then(res => res.data)
    .then(res => {
      this.setState({ quizzesOpts: res })
    })
    
    this.usersPermissionsUser.getList()
    .then(res => res.data)
    .then(res => {
      this.setState({ userOpts: res })
    })
  }

  onChangeModel = (type, value) => {
    this.setState({ model: {...this.state.model, [type]: value } })
  }

  onChangeSubChapterModel = (idx, value) =>
  {
    const subChapter = [...this.state.model.SubChapter]
    subChapter[idx].name = value;
    this.setState({ model: {...this.state.model, SubChapter: subChapter } })
  }

  onSaveForm = () => {
    

    const questions = this.state.model.questions.map(x => x.value);
    if(this.state.isEntry){
    this.chapterController.onInsert({...this.state.model, questions})
        .then(() => this.toastr.success('Successfully saved'))
        .catch(e => this.toastr.error(e.message))
    }else{
      this.chapterController.onUpdate({...this.state.model, questions})
          .then(() => this.toastr.success('Successfully saved'))
          .catch(e => this.toastr.error(e.message))
    }
  }

  onResetForm = () => {
    this.setState({ model: {...ChapterModel} })
  }

  loadQuestion = (inputValue, callback) => {
    console.log(callback)
    this.questionController
      .getList({ _q: inputValue })
      .then(res => res.data)
      .then(res => {
        const questions = res.map(x => ({ value: x.id, label: x.question }))
        callback([...questions])
      })

  }
 
  handleChangeQuestion = (question) => {
    if(question === null){ question = [] }
      this.setState({ model: { 
          ...this.state.model, 
          questions: [...question] 
        } 
      })
  }

  addSubChapter = () => {
    this.setState({ model: { ...this.state.model, SubChapter: [...this.state.model.SubChapter, {id: null, name: "" } ] } 
    })
  }

  deleteSubChapter = (idx) => {
    this.state.model.SubChapter.splice(idx, 1);
    this.setState({model: { ...this.state.model, SubChapter: [...this.state.model.SubChapter] } })
  }

  render() {
    const {  model, curriculumOpts, quizzesOpts, userOpts, isEntry } = this.state
    return (
      <div className="content-wrapper">
        <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-9'>
              {isEntry ? <ContentHeader title="Create An Entry Chapter" /> : <ContentHeader title="Edit Chapter" />}
            </div>
            <div className='col-md-3 p-2 d-flex align-items-center justify-content-between'>
              <button  onClick={this.onResetForm} className='btn btn-block' >Reset</button>
              <button  onClick={this.onSaveForm} className='btn btn-block btn-success' >Save</button>
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
                        <label htmlFor="inputName">Name</label>
                        <input 
                          type="text" 
                          id="inputName" 
                          className="form-control"
                          value={model.name}
                          onChange={(ev) => this.onChangeModel("name", ev.target.value)}
                           />
                      </div>
                      {model.SubChapter.map( (ch, idx) => 
                      (<div className="form-group" key={idx}>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                        <label >Sub Chapter {idx+1}</label>
                          <div>
                            <button className="btn btn-sm btn-primary" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target={"#subChapter"+ idx}
                                    aria-expanded="false" 
                                    >
                            <i className="fa fa-edit"></i>
                            </button>&nbsp;
                            <button className="btn btn-sm btn-danger" 
                                    type="button" 
                                    onClick={() => this.deleteSubChapter(idx)}
                                    >
                            <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </div>
                        <div className="collapse"  id={ "subChapter"+ idx }>
                        <textarea 
                          className="form-control" 
                          rows="3" 
                          onChange={(ev) => this.onChangeSubChapterModel(idx, ev.target.value)}
                          defaultValue={ch.name}></textarea>
                        </div>
                      </div>
                      ))}
                      <button type="button" onClick={this.addSubChapter} className="btn btn-sm btn-primary">Add new sub chapter +</button>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                    <label >Curriculum</label>
                      <select 
                         value={model.curriculum}
                         onChange={(ev) => this.onChangeModel("curriculum", ev.target.value)}
                         className="form-control">
                          <option>Select...</option>
                          {curriculumOpts.map(op => <option key={op.id} value={op.id}>{op.name}</option>)}
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
                      loadOptions={this.loadQuestion}
                      onChange={this.handleChangeQuestion}
                      />
                     
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                    <label >Quiz</label>
                      <select
                        value={model.quiz}
                        onChange={(ev) => this.onChangeModel("quiz", ev.target.value)}
                        className="form-control">
                          <option>Select...</option>
                          {quizzesOpts.map(op => <option key={op.id} value={op.id}>{op.quizName}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body pad d-flex flex-column">
                    <label >User</label>
                      <select 
                       value={model.user}
                        onChange={(ev) => this.onChangeModel("user", ev.target.value)}
                        className="form-control">
                          <option>Select...</option>
                          {userOpts.map(op => <option key={op.id} value={op.id}>{op.name}</option>)}
                      </select>
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
