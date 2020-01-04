import React, { Component } from 'react'
import Table from '../../components/Table'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import ControllerCourses from '../../controllers/courses'

class List extends Component {

  controller = new ControllerCourses();

  constructor(props) {
    super(props)
    const urlIcon = "https://s3.ap-southeast-1.amazonaws.com/media.gdi.pojokan.io/a35e64d7755a4bac8a72cb72739140ab.jpg";

    this.state = {
      dataTable: {
        thead : [ "No", "Name", "Icon", "CreatedAt", "UpdatedAt"],
        tbody : [
          { No: 1, Name: 'list courses 1', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" , Icon: <img width="100" src={urlIcon} /> },
          { No: 2, Name: 'list courses 2', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019", Icon: <img  width="100" src={urlIcon} /> },
        ]
      }
    }
  }

  componentDidMount() {
    console.log(this.controller)
  }

  render() {
    const { dataTable } = this.state
    return (
      <div className="content-wrapper">
        <ContentHeader title='List Course' />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">List Courses</h3>
                  <ButtonAction title='Add courses' icon='fas fa-plus' class='btn btn-primary float-right' url='/course/entry' />
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
