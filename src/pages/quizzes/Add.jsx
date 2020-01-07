import React, { Component } from 'react'
import ButtonAction from '../../components/ButtonAction'
import ContentHeader from '../../components/ContentHeader'
import Autocomplete from 'react-autocomplete'
import CKEditor from 'ckeditor4-react'



class FormAdd extends Component {

  

  constructor(props) {
    super(props)
    this.state = {
      dataSelect: [
        { id: 1, name: 'select 1' },
        { id: 2, name: 'select 2' },
        { id: 3, name: 'select 3' },
        { id: 4, name: 'select 4' },
      ],
      value: ''
    }

  
  }

  componentDidMount()
  {
    
    // CKEditor.editorUrl = //'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML'
    //  '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';
  }

  render() {
    const { dataSelect, value } = this.state

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
                        config={{ 
                           extraPlugins: 'mathjax',
                           mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
                           height: 320
                      }}
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
                        getItemValue={(item) => item.label}
                        items={[
                          { label: 'apple' },
                          { label: 'banana' },
                          { label: 'pear' }
                        ]}
                        renderItem={(item, isHighlighted) =>
                          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                          </div>
                        }
                        value={value}
                        onChange={(e) => this.setState({ value: e.target.value }) }
                        onSelect={(val) => this.setState({ value: val })}
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
