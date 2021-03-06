import React, { Component } from "react";
import Table from "../../components/Table";
import ButtonAction from "../../components/ButtonAction";
import ContentHeader from "../../components/ContentHeader";
import QuestionController from "../../controllers/questions";

class List extends Component {
  controller = new QuestionController();
  state = {
    dataTable: {
      thead: ["No", "id", "Question Type", "Question Image", "Option A"],
      tbody: []
    }
  };

  componentDidMount() {
    this.controller
      .getList()
      .then(res => res.data)
      .then(questions => {
        const tbody = questions.map((question, idx) => ({
          No: ++idx,
          id: question.id,
          "Question Type": question.questionType,
          "Question Image": question.questionImage?.url,
          "Option A": question.optionA,
        }));
        this.setState({
          dataTable: { ...this.state.dataTable, tbody: tbody }
        });
      });
  }
  render() {
    const { dataTable } = this.state;
    return (
      <div className="content-wrapper">
        <ContentHeader title="List Questions" />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">List Questions</h3>
                  <ButtonAction
                    title="Add questions"
                    icon="fas fa-plus"
                    class="btn btn-primary float-right"
                    url="/questions/entry"
                  />
                </div>
                <Table data={dataTable} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
