import React, { Component } from 'react'
import Table from '../../components/Table'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import ControllerCities from '../../controllers/cities'

class List extends Component {

  controller = new ControllerCities();

  constructor(props) {
    super(props)
    this.state = {
      dataTable: {
        thead: ["No", "Name", "CreatedAt", "UpdatedAt"],
        tbody : [
          { No: 1, Name: 'Bandung', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" },
          { No: 2, Name: 'Batam', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" },
        ]
      }
    }
  }

  componentDidMount() {
    this.controller.getList()
      .then(res => {
        console.log(res.data)
        // this.setState({
        //   dataTable: {
        //     thead: ["No", "Name", "CreatedAt", "UpdatedAt"],
        //     tbody: res.data
        //   }
        // })
      })
  }

  render() {
    const { dataTable } = this.state
    return (
      <div className="content-wrapper">
        <ContentHeader title='List Cities' />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">List Cities</h3>
                  <ButtonAction title='Add city' icon='fas fa-plus' class='btn btn-primary float-right' url='/cities/entry' />
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
