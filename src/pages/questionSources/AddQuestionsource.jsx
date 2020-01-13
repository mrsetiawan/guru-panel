import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import ContentHeader from "../../components/ContentHeader";
import QuestionsController from "../../controllers/questions";
import QuestionsourcesController from "../../controllers/questionsources";
import { QuestionsourceModel } from "../../model/QuestionsourceModel";

class AddQuestionSource extends Component {
  questionsController = new QuestionsController();
  questionsourcesController = new QuestionsourcesController();
  state = {
    selectQuestion: { data: [], value: "" },
    model: { ...QuestionsourceModel },
    isEntry: true
  };
  componentDidMount() {
    const paramId = this.props.match.params.id;
    if (paramId) {
      this.setState({ isEntry: false });
      this.questionsourcesController
        .getById(paramId)
        .then(res => res.data)
        .then(res => {
          this.setState({ model: { ...res } });
        });
    }

    this.questionsController
      .getList({ _limit: 10 })
      .then(res => res.data)
      .then(res => {
        const questions = res.map(x => ({ id: x.id, label: x.question }));
        this.setState({
          selectQuestion: { ...this.state.selectQuestion, data: questions }
        });
      });
  }

  renderItemAutoComplete = (item, isHighlighted) => (
    <div
      className="p-2"
      key={item.id}
      style={{ background: isHighlighted ? "lightgray" : "white" }}
    >
      {item.label}
    </div>
  );

  onChangeModel = (type, value) => {
    let val = value;
    if (type === "year") {
      val = value.length > 4 ? value.slice(0, 4) : value;
    }
    this.setState({ model: { ...this.state.model, [type]: val } });
  };

  onSelectQuestion = item => {
    const questions = [...this.state.model.questions, item];
    this.setState({
      selectQuestion: { ...this.state.selectQuestion, value: item.value },
      model: { ...this.state.model, questions }
    });
  };

  onChangeQuestion = ({ target: { value } }) => {
    this.questionsController
      .getList({ _q: value })
      .then(res => res.data)
      .then(res => {
        const questions = res.map(x => ({ id: x.id, label: x.question }));
        this.setState({
          selectQuestion: { ...this.state.selectQuestion, data: questions }
        });
      });

    this.setState({ selectQuestion: { ...this.state.selectQuestion, value } });
  };

  deleteQuestion = id => {
    const remClassById = this.state.model.questions.filter(
      cls => cls.id !== id
    );
    this.setState({
      model: { ...this.state.model, questions: [...remClassById] }
    });
  };

  onSaveForm = () => {
    const questions = this.state.model.questions.map(x => x.id);
    const data = { ...this.state.model, questions }
    if (this.state.isEntry) {
      this.questionsourcesController
        .onInsert(data)
        .then(() => alert("success"));
    } else {
      this.questionsourcesController
        .onUpdate(data)
        .then(() => alert("success"));
    }
  };

  onResetForm = () => {
    this.setState({ model: { ...QuestionsourceModel } });
  };
  render() {
    const { selectQuestion, model, isEntry } = this.state;
    console.log("selectQuestion: ", selectQuestion);
    return (
      <div className="content-wrapper">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <ContentHeader
                title={isEntry ? "Create An Entry" : "Edit question"}
              />
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
                            <label for="sourceInfo">Source Info</label>
                            <input
                              type="text"
                              id="sourceInfo"
                              className="form-control"
                              name="sourceInfo"
                              value={model.sourceInfo}
                              onChange={ev =>
                                this.onChangeModel(
                                  "sourceInfo",
                                  ev.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label for="year">Year</label>
                            <input
                              type="number"
                              id="year"
                              className="form-control"
                              name="year"
                              value={model.year}
                              onChange={ev =>
                                this.onChangeModel("year", ev.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="row">
                    <div className="card">
                      <div className="card-body pad">
                        <label htmlFor=""> Questions ()</label>
                        <Autocomplete
                          menuStyle={this.menuStyleAutoComplete}
                          inputProps={{
                            className: "form-control",
                            placeholder: "Select a question"
                          }}
                          getItemValue={item => item}
                          items={selectQuestion.data}
                          renderItem={this.renderItemAutoComplete}
                          value={selectQuestion.value}
                          onSelect={this.onSelectQuestion}
                          onChange={this.onChangeQuestion}
                        />
                        {model.questions.map((cls, idx) => (
                          <div
                            key={idx}
                            className="d-flex justify-content-between align-items-center mt-1 shadow-sm p-1"
                          >
                            <span>{cls.label}</span>
                            <button
                              onClick={() => this.deleteQuestion(cls.id)}
                              className="btn btn-sm btn-danger"
                            >
                              x
                            </button>
                          </div>
                        ))}
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

export default AddQuestionSource;
