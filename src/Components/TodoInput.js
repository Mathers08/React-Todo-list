import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem} = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"/>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="What are you want to do?"
              value={item}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={editItem ? 'btn-success btn btn-block mt-3' : 'btn-primary btn btn-block mt-3'}>
              {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    )
  }
}
