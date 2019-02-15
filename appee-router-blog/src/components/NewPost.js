import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { createPost } from '../actions';
import { connect } from "react-redux";

class NewPost extends Component {
  renderField = (field) => {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmitHandler = async (values) => {
    // this.props.createPost(values, () => {
    //   this.props.history.push('/');
    // });
    await this.props.createPost(values)
    await this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmitHandler)}>
        <Field
          label="Title"
          name='title'
          component={this.renderField}
        />
        <Field
          label="Categories"
          name='categories'
          component={this.renderField}
        />
        <Field
          label="Content"
          name='content'
          component={this.renderField}
        />
        <button
          type="submit"
          className="btn btn-success"
        >Salvar</button>
        <Link
          to="/"
          className="btn btn-danger"
        >Cancelar</Link>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title || values.title.length < 3) {
    errors.title = 'Insira um Título'
  }
  if (!values.categories) {
    errors.categories = 'Insira Tags'
  }
  if (!values.content || values.content.length < 15) {
    errors.content = 'Insira o Conteúdo !!!'
  }
  return errors;
}

export default reduxForm({
  validate, form: 'NewPostForm'
})(connect(null, { createPost })(NewPost));