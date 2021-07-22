import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CommentInput extends Component {
  state = {
    author: '',
    email: '',
    content: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const comment = {
      ...this.state,
      project_id: this.props.projectId,
    }
    this.props.addComment(comment);
    this.setState({
      author: '',
      email: '',
      content: '',
    });
  }

  render() {
    return (
      <div className='comment-form'>
        <Card>
          <Form role="form" className='clearfix' onSubmit={this.handleOnSubmit}>
            <h5>Leave a comment</h5>
            <Form.Row>
              <Col>
                <Form.Group controlId="formAuthor">
                  <Form.Control
                    name="author"
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    required
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={this.state.email}
                    required
                    onChange={this.handleOnChange}
                  />
                  <Form.Text className="text-muted">
                    We will never share your email.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="formContent">
              <Form.Control
                name="content"
                as="textarea"
                rows="3"
                placeholder="Enter your comment here..."
                value={this.state.content}
                required
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Button className="float-right" type="submit">
              Post
            </Button>
          </Form>
        </Card>

      </div>
    );
  }
};

export default CommentInput;