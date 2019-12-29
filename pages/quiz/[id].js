import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import { QuizModel } from '../../model/QuizModel';
const QuizzController =  require('../../controllers/quiz').default;
const Layout = dynamic(import('../../components/Layout'));
const Navbar = dynamic(import('../../components/Navbar'));
const SideBar = dynamic(import('../../components/SideBar'));
const Footer = dynamic(import('../../components/Footer'));

const headTag = () => (<>
  <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
</>);

const FormEntry = () => {

  let quizController;
  const [state, setState ] = React.useState({...QuizModel})

  if(typeof window !== "undefined"){
    // CKEDITOR.replace('editorQuizz', {
    //   extraPlugins: 'mathjax',
    //   mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
    //   height: 320
    // });
  }
    
  

  const onSaveQuizz = () => {
    quizController.onInsert(state)
          .then(res => console.log(res))
  }

  const onResetForm = () => {
    setState({...QuizModel})
  }


    return (
      <Layout title="Guru Ahli : Quizz" headTag={headTag} >
        <div className="wrapper">
          <Navbar />
          <SideBar />
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col d-flex align-items-center justify-content-between">
                    <h1 className="m-0 text-dark">Create A Quizz</h1>
                    <div className="d-flex col-md-3">
                      <a href="#" onClick={onResetForm} className="btn btn-sm btn-default col">Reset</a> &nbsp;&nbsp;
                      <a href="#" onClick={onSaveQuizz} className="btn btn-sm btn-primary col" style={{ width: "150px" }}>Save</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-9">
                  <div className="card card-outline card-info">
                    <div className="card-body pad">
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="inputQuizzName">Quizz Name</label>
                          <input 
                            value={state.quizName}
                            onChange={({ target }) => setState({quizName: target.value })}
                            type="text" 
                            className="form-control col-lg-6" 
                            id="inputQuizzName" 
                            placeholder="Enter Quizz Name" />
                        </div>
                        <div className="form-group">
                          <label>Quizz Name</label>
                          <textarea 
                            
                            onChange={({ target }) => setState({description: target.value })}
                            cols="10" 
                            id="editorQuizz" 
                            name="editorQuizz" rows="10" data-sample-short></textarea>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="form-group col-4">
                          <label htmlFor="inputCapacity">Capacity</label>
                          <input 
                            value={state.capacity}
                            onChange={({ target }) => setState({capacity: target.value })}
                            type="number" 
                            className="form-control" 
                            id="inputCapacity" 
                            placeholder="Enter Capacity" />
                        </div>
                        <div className="form-group col-4">
                          <label htmlFor="inputDurationMinute">Duration Minute</label>
                          <input 
                            value={state.durationMinute}
                            onChange={({ target }) => setState({durationMinute: target.value })}
                            type="number" 
                            className="form-control" 
                            id="inputDurationMinute" 
                            placeholder="Enter Duration Minute" />
                        </div>
                        <div className="form-group col-4">
                          <label htmlFor="inputTotalQuestions">Total Questions</label>
                          <input 
                            value={state.totalQuestions}
                            onChange={({ target }) => setState({totalQuestions: target.value })}
                            type="number" 
                            className="form-control" 
                            id="inputTotalQuestions" 
                            placeholder="Enter Total Questions" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="icheck-primary">
                          <input 
                            value={state.quizStatus}
                            onChange={({ target }) => setState({quizStatus: target.value })}
                            type="checkbox" 
                            id="remember" />
                          <label htmlFor="remember">
                            Quizz Status
                              </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-outline card-info">
                    <div className="card-body pad">
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="inputChapter">Select a Chapter</label>
                          <input type="text" className="form-control" id="inputChapter" placeholder="Add a chapter" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="inputClass">Select a Class</label>
                          <input type="text" className="form-control" id="inputClass" placeholder="Add a class" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="inputQuestion">Select a Question</label>
                          <input type="text" className="form-control" id="inputQuestion" placeholder="Add a question" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="inputCourse">Select a Course</label>
                          <input type="text" className="form-control" id="inputCourse" placeholder="Add a course" />
                        </div>
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


FormEntry.getInitialProps = () => {
let quiz = {...QuizModel};
let quizController;
  const { query: {id} } = useRouter()
    quizController = new QuizzController();
    if(id !== "form-entry" && id !== "undefined"){
      quizController.onGetById(id)
      .then(res => res.data)
      .then(q => quiz = q)
    }
    
  return { quiz }
}

export default FormEntry;


