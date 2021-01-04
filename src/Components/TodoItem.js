import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fas fa-pen btn btn-success" onClick={handleEdit}/>
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash btn btn-danger" onClick={handleDelete}/>
          </span>
        </div>
      </li>
    )
  }
}
