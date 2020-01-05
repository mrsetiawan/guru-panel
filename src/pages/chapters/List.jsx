import React, { Component } from 'react'
import Table from '../../components/Table'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import ChapterController from '../../controllers/chapters';

class List extends Component {

  controller = new ChapterController();
  state = {
    dataTable: {
      thead : [ "No", "Name", "UpdateAt"],
      tbody : [
        { No: 1, Name: 'list chapters 1', CreadAt: "12 Dec 2019", UpdateAt: "12 Dec 2019" },
        { No: 2, Name: 'list chapters 2', CreadAt: "12 Dec 2019", UpdateAt: "12 Dec 2019" },
      ]
    }
  }

  componentDidMount()
  {
    console.log(this.controller)
    this.controller.getList().then(res => console.log(res))
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
