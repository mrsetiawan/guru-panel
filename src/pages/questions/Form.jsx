import React, { Component } from "react";
import MagicDropzone from "react-magic-dropzone";
import ContentHeader from "../../components/ContentHeader";
import QuestionsController from "../../controllers/questions";
import CKEditor from "ckeditor4-react";
import "./styles.css";
import { QuestionsModel } from "../../model/questionsModel";

class Form extends Component {
  questionsController = new QuestionsController();
  constructor(props) {
    super(props);
    this.state = {
      value: "image/jpeg, image/png, .jpg, .jpeg, .png",
      previews: []
    };
  }

  configCKEditor = {
    extraPlugins: "mathjax",
    mathJaxLib:
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",
    height: 320
  };
  
  onDrop = (accepted, rejected, links) => {
    accepted = accepted.map(v => v.preview);
    var newPreviews = [...this.state.previews, ...accepted, ...links];
    this.setState({
      previews: newPreviews
    });
  };

  onSaveForm = () => {
    const questions = this.state.model?.questions?.map(x => x.value) || [];
    const data = { ...this.state.model, questions };
    if (this.state.isEntry) {
      this.questionsController
        .onInsert(data)
        .then(() => alert("success"));
    } else {
      this.questionsController
        .onUpdate(data)
        .then(() => alert("success"));
    }
  };

  onResetForm = () => {
    this.setState({ model: { ...QuestionsModel } });
  };
  render() {
    return (
      <div className="content-wrapper">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-10">
              <ContentHeader title="Create An Entry" />
            </div>
            <div className="col-md-4 p-2">
              <div className="row p-2 float-right">
                <div className="col-md-6 p-2 ">
                  <button
                    onClick={this.onResetForm}
                    className="btn btn-block btn-default"
                  >
                    Reset
                  </button>
                </div>

                <div className="col-md-6 p-2 ">
                  <button
                    onClick={this.onSaveForm}
                    className="btn btn-block btn-success"
                  >
                    Save
                  </button>
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
                            <select className="form-control custom-select">
                              <option selected="" disabled="">
                                Choose here
                              </option>
                              <option>image</option>
                              <option>text</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Question Image</label>
                            <MagicDropzone
                              className="Dropzone"
                              accept={this.state.value}
                              onDrop={this.onDrop}
                            >
                              <div className="Dropzone-content">
                                {this.state.previews.length > 0
                                  ? this.state.previews.map((v, i) => (
                                      <img
                                        key={i}
                                        alt=""
                                        className="Dropzone-img"
                                        src={v}
                                      />
                                    ))
                                  : "Drag & drop your file into this area or browse for a file to upload"}
                              </div>
                            </MagicDropzone>
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
                            <MagicDropzone
                              className="Dropzone"
                              accept={this.state.value}
                              onDrop={this.onDrop}
                            >
                              <div className="Dropzone-content">
                                {this.state.previews.length > 0
                                  ? this.state.previews.map((v, i) => (
                                      <img
                                        key={i}
                                        alt=""
                                        className="Dropzone-img"
                                        src={v}
                                      />
                                    ))
                                  : "Drag & drop your file into this area or browse for a file to upload"}
                              </div>
                            </MagicDropzone>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="inputName">Text Explanation</label>

                            <CKEditor
                              onBeforeLoad={CKEDITOR =>
                                (CKEDITOR.disableAutoInline = true)
                              }
                              config={this.configCKEditor}
                              data=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Pdf Explanation</label>
                            <MagicDropzone
                              className="Dropzone"
                              accept={this.state.value}
                              onDrop={this.onDrop}
                            >
                              <div className="Dropzone-content">
                                {this.state.previews.length > 0
                                  ? this.state.previews.map((v, i) => (
                                      <img
                                        key={i}
                                        alt=""
                                        className="Dropzone-img"
                                        src={v}
                                      />
                                    ))
                                  : "Drag & drop your file into this area or browse for a file to upload"}
                              </div>
                            </MagicDropzone>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">Video Explanation</label>
                            <MagicDropzone
                              className="Dropzone"
                              accept={this.state.value}
                              onDrop={this.onDrop}
                            >
                              <div className="Dropzone-content">
                                {this.state.previews.length > 0
                                  ? this.state.previews.map((v, i) => (
                                      <img
                                        key={i}
                                        alt=""
                                        className="Dropzone-img"
                                        src={v}
                                      />
                                    ))
                                  : "Drag & drop your file into this area or browse for a file to upload"}
                              </div>
                            </MagicDropzone>
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
                            <MagicDropzone
                              className="Dropzone"
                              accept={this.state.value}
                              onDrop={this.onDrop}
                            >
                              <div className="Dropzone-content">
                                {this.state.previews.length > 0
                                  ? this.state.previews.map((v, i) => (
                                      <img
                                        key={i}
                                        alt=""
                                        className="Dropzone-img"
                                        src={v}
                                      />
                                    ))
                                  : "Drag & drop your file into this area or browse for a file to upload"}
                              </div>
                            </MagicDropzone>
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
                            <CKEditor
                              onBeforeLoad={CKEDITOR =>
                                (CKEDITOR.disableAutoInline = true)
                              }
                              config={this.configCKEditor}
                              data=""
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

export default Form;
