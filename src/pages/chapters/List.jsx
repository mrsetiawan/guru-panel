import React, { Component } from 'react'
import Table from '../../components/Table'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import ChapterController from '../../controllers/chapters';
import moment from 'moment';

class List extends Component {

  controller = new ChapterController();
  state = {
    dataTable: {
      thead : [ "No", "Name", "CreatedAt", "UpdatedAt"],
      tbody : [
        { No: 1, Name: 'list chapters 1', CreadAt: "12 Dec 2019", UpdateAt: "12 Dec 2019" },
        { No: 2, Name: 'list chapters 2', CreadAt: "12 Dec 2019", UpdateAt: "12 Dec 2019" },
      ]
    }
  }

  componentDidMount()
  {
    this.controller.getList().then(res => res.data)
    .then(chapters => {
      const createdAt = moment(new Date(chapters[0].createdAt)).format("D MMMM Y");
      const updatedAt = moment(new Date(chapters[0].updatedAt)).format("D MMMM Y");
      const tbody = chapters.map((quiz, idx) => ({
        id: quiz.id, No: ++idx, "Name": quiz.name, "CreatedAt": createdAt, "UpdatedAt": updatedAt
      }))

      this.setState({ 
        dataTable: { ...this.state.dataTable, tbody: tbody} 
       })

    })
  }

  render() {
    const { dataTable } = this.state
    return (
      <div className="content-wrapper">
        <ContentHeader title='List Chapters' />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">List Chapters</h3>
                  <ButtonAction title='Add chapters' icon='fas fa-plus' class='btn btn-primary float-right' url='/chapter/entry' />
                </div>
                <Table data={dataTable} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List
