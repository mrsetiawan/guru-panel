import React, { Component } from 'react'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import Autocomplete from 'react-autocomplete'
import CKEditor from 'ckeditor4-react'
import QuizController from '../../controllers/quizzes'
import ClassController from '../../controllers/classes'

class FormAdd extends Component {
  quizController = new QuizController;
  classController = new ClassController;
  state = {
      selectClass: {
        data: [
          { id: 1, label: 'apple' },
          { id: 2, label: 'banana' },
          { id: 3, label: 'pear' }
        ],
        value: ''
      }
      
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

  componentDidMount()
  {
    this.classController
        .getList({ _limit: 10 })
        .then(res => res.data)
        .then(res => {
          const classes = res.map(x => ({ id: x.id, label: x.className }))
          this.setState({ selectClass: {...this.state.selectClass, data: classes} })
        })

  }

  onSelectClass = value => {
    this.setState({selectClass: {...this.state.selectClass, value} })
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

  render() {
    const { selectClass } = this.state

    return (
      <div className="content-wrapper">
        <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-10'>
              <ContentHeader title="Add An Entry" />
            </div>
            <div className='col-md-2 p-2'>
              <div className='row p-2'>
                <div className='col d-flex align-items-center justify-content-between'>
                  <ButtonAction title='Reset' class='btn btn-block btn-default' />&nbsp;
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
                <div className='col-md-8'>
                  <div className="card">
                    <div className="card-body pad">
                      <div className="form-group">
                        <label htmlFor="inputQuizName">Quiz Name</label>
                        <input type="text" id="inputQuizName" className="form-control" name='name' />
                      </div>
                      <CKEditor 
                        onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) }
                        config={this.configCKEditor}
                        data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="inputCapacity">Capacity</label>
                            <input type="number" id="inputCapacity" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="inputDurationMinute">Duration Minute</label>
                            <input type="number" id="inputDurationMinute" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="inputTotalQuestions">Total Questions</label>
                            <input type="number" id="inputTotalQuestions" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className="card">
                    <div className="card-body pad">
                      <Autocomplete
                        inputProps={{  className: "form-control" }}
                        getItemValue={(item) => item.label}
                        items={selectClass.data}
                        renderItem={this.renderItemAutoComplete}
                        value={selectClass.value}
                        // onChange={(e) => this.setState({ value: e.target.value }) }
                        // onSelect={(val) => this.setState({ value: val })}
                        onChange={this.onChangeClass}
                        onSelect={this.onSelectClass}
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

export default FormAdd
