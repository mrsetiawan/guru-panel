import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const QuizzController =  require('../../controllers/quiz').default;
const Layout = dynamic(import('../../components/Layout'));
const Navbar = dynamic(import('../../components/Navbar'));
const SideBar = dynamic(import('../../components/SideBar'));
const Footer = dynamic(import('../../components/Footer'));


const TrQuizz = ({ quizz, onDelete }) => (
  <tr>
    <td>{quizz.no}.</td>
    <td>{quizz.quizName}</td>
    <td className="text-right">{quizz.capacity}</td>
    <td className="text-right">{quizz.durationMinute}</td>
    <td width="100">
      <Link href="/quiz/[id]" as={ "/quiz/"+ quizz.id }>
        <a className="btn btn-sm" ><i className="fa fa-eraser"></i></a>
      </Link>
      <a href="#" className="btn btn-sm" onClick={() => onDelete(quizz.id)}><i className="fa fa-trash"></i></a>
    </td>
  </tr>
)

export default class ListQuizz extends React.Component {

  quizzController;
  state = {
    quizzes: []
  }

  componentDidMount() {
    this.quizzController = new QuizzController();
    this.quizzController.onGetList()
      .then(res => res.data)
      .then(res => 
        res.map((quizz, idx) => ({ 
          no: ++idx,
          id:quizz.id, 
          quizName: quizz.quizName,
          capacity: quizz.capacity,
          durationMinute: quizz.durationMinute
        }))
      )
      .then(quizzes => this.setState({ quizzes: quizzes }))
  }

  onDeleteQuiz = (id) => {
    this.quizzController.onDelete(id)
      .then(res => console.log(res))
      .then(() => this.componentDidMount() )
  }

  render() {
    return (
      <Layout title="Guru Ahli : Quizz">
        <div className="wrapper">
          <Navbar />
          <SideBar />
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col d-flex align-items-center justify-content-between">
                    <h1 className="m-0 text-dark">Create A Quizz</h1>
                    <Link href="/quiz/[id]" as="/quiz/form-entry">
                      <a href="" className="btn btn-sm btn-primary"><i className="fa fa-sm fa-plus"></i> Add New Quizz</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                      <table id="example1" className="table table-bordered table-striped  shadow">
                        <thead>
                          <tr>
                            <th width="35">No.</th>
                            <th>Quizz Name</th>
                            <th className="text-right">Capacity</th>
                            <th className="text-right" >Duration Minute</th>
                            <th >&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.quizzes.map((quizz, key) => <TrQuizz key={key} quizz={quizz} onDelete={this.onDeleteQuiz} />)}
                        </tbody>
                      </table>
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

