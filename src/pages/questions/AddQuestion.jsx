import React, { Component } from "react";
import ButtonAction from "../../components/ButtonAction";
import ContentHeader from "../../components/ContentHeader";

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSelect: [
        { id: 1, name: "select 1" },
        { id: 2, name: "select 2" },
        { id: 3, name: "select 3" },
        { id: 4, name: "select 4" }
      ]
    };
  }

  render() {
    const { dataSelect } = this.state;
    return (
      <div className="content-wrapper">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-10">
              <ContentHeader title="Create An Entry" />
            </div>
            <div className="col-md-2 p-2">
              <div className="row p-2">
                <div className="col-md-6">
                  <ButtonAction
                    title="Reset"
                    class="btn btn-block btn-default"
                  />
                </div>
                <div className="col-md-6">
                  <ButtonAction
                    title="Save"
                    class="btn btn-block btn-success "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body pad">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Question Type</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Question Image</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Option A</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Option B</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Option C</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Option D</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Option E</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Answer</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Explanation Type</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Image Explanation</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="inputName">Text Explanation</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Pdf Explanation</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Video Explanation</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Difficulties</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Question Video</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Question</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="inputName">Question Detail</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="inputName">Workflow</label>
                            <input
                              type="text"
                              id="inputName"
                              className="form-control"
                              name="name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body pad">
                      <div className="form-group">
                        <label for="inputStatus">Question Source</label>
                        <select className="form-control custom-select">
                          <option selected="" disabled="">
                            Select one
                          </option>
                          <option>On Hold</option>
                          <option>Canceled</option>
                          <option>Success</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="inputStatus">Chapter</label>
                        <select className="form-control custom-select">
                          <option selected="" disabled="">
                            Select one
                          </option>
                          <option>On Hold</option>
                          <option>Canceled</option>
                          <option>Success</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="inputStatus">Class</label>
                        <select className="form-control custom-select">
                          <option selected="" disabled="">
                            Select one
                          </option>
                          <option>On Hold</option>
                          <option>Canceled</option>
                          <option>Success</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="inputStatus">Teacher</label>
                        <select className="form-control custom-select">
                          <option selected="" disabled="">
                            Select one
                          </option>
                          <option>On Hold</option>
                          <option>Canceled</option>
                          <option>Success</option>
                        </select>
                      </div>
                      {/* multiple choices */}
                      <div className="form-group">
                        <label for="inputStatus">Quizzess (0)</label>
                        <select className="form-control custom-select">
                          <option selected="" disabled="">
                            Add an item...
                          </option>
                          <option>On Hold</option>
                          <option>Canceled</option>
                          <option>Success</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label for="inputStatus">Quizzess (0)</label>
                        <select className="form-control ">
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label>Multiple</label>
                        <select
                          className="select2"
                          multiple="multiple"
                          data-placeholder="Select a State"
                        >
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
