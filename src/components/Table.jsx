import React, { Component } from "react";
import ButtonAction from "../components/ButtonAction";

export class Table extends Component {
  render() {
    const tableImg = {
      width: "33px",
      height: "33px",
      borderRadius: "33px"
    };
    const {
      data: { thead, tbody, route }
    } = this.props;

    return (
      <div className="card-body pad">
        <div className="mb-3">
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                {thead.map((head, index) => (
                  <th key={index}>{head}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tbody.map((body, idx) => {
                return (
                  <tr key={idx}>
                    {thead.map((head, idxx) => {
                      if (head.indexOf("Image") > 0 && body[head])
                        return (
                          <td key={idxx} style={{ textAlign: "center" }}>
                            <img
                              style={tableImg}
                              src={body[head]}
                              alt={head}
                            ></img>
                          </td>
                        );
                      return <td key={idxx}>{body[head]}</td>;
                    })}
                    <td>
                      <ButtonAction
                        url={`/${route}/${body.id}`}
                        type="button"
                        title="Edit"
                        class="btn btn-outline-warning btn-sm"
                        icon="fas fa-edit"
                      />{" "}
                      &nbsp;
                      {/* <ButtonAction
                        type="button"
                        title="Delete"
                        class="btn btn-outline-danger btn-sm"
                        icon="fas fa-trash"
                      /> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* <tfoot>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Icon</th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
