import React, { Component } from 'react'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import Autocomplete from 'react-autocomplete'

class AddCourses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSelect: [
        { id: 1, name: 'select 1' },
        { id: 2, name: 'select 2' },
        { id: 3, name: 'select 3' },
        { id: 4, name: 'select 4' },
      ],
      val: ''
    }
  }

  render() {
    const { dataSelect, val } = this.state
    return (
      <div className="content-wrapper">

        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-10'>
              <ContentHeader title="Add Courses" />
            </div>
            <div className='col-md-2 p-2'>
              <div className='row p-2'>
                <div className='col-md-6'>
                  <ButtonAction title='Reset' class='btn btn-block btn-default' />
                </div>
                <div className='col-md-6'>
                  <ButtonAction title='Save' class='btn btn-block btn-success ' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className='row'>
                <div className='col-md-6'>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title mb-0">Add Courses</h3>
                    </div>
                    <div className="card-body pad">
                      <div className="form-group">
                        <label for="inputName">Courses Name</label>
                        <input type="text" id="inputName" className="form-control" name='name' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="card">
                    <div className="card-body pad">
                      <Autocomplete

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

export default AddCourses
