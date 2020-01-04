import React, { Component } from 'react'
import Table from '../../components/Table'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import ControllerProvince from '../../controllers/provinces'

class List extends Component {

  controller = new ControllerProvince();

  constructor(props) {
    super(props)
    this.state = {
      dataTable: {
        thead: ["No", "Name", "CreatedAt", "UpdatedAt"],
        tbody : [
          { No: 1, Name: 'DKI Jakarta', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" },
          { No: 2, Name: 'Kepulauan Riau', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" },
          { No: 3, Name: 'Sumatera Selatan', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" },
          { No: 4, Name: 'Aceh', CreatedAt: "12 Dec 2019", UpdatedAt: "12 Dec 2019" },
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
        <ContentHeader title='List Province' />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">List Province</h3>
                  <ButtonAction title='Add Province' icon='fas fa-plus' class='btn btn-primary float-right' url='/province/entry' />
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
