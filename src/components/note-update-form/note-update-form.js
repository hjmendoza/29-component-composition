import React, { Component } from "react";

class NoteUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.note.title,
      content: this.props.note.content,
      editing: this.props.note.editing,
      completed: this.props.note.completed,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onDone();
    this.props.onUpdate({...this.state});
    this.setState({
      title: '',
      content: '',
    })
  };

  onChange(event) {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="title" placeholder="title" value={this.state.title} />
        <textarea
          name="content"
          placeholder="content"
          value={this.state.content}
        />
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" checked={this.state.editing} />
        </label>
        <label>
          <span>completed</span>
          <input
            name="completed"
            type="checkbox"
            checked={this.state.completed}
          />
        </label>
        <button>Update Note</button>
        <button type="button" onClick={this.onCancel}>
          cancel
        </button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   noteUpdate: note => dispatch(noteUpdate(note))
// });
// export default connect(
//   null,
//   mapDispatchToProps
// )(NoteUpdateForm);