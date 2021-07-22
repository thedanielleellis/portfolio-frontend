import React, { Component } from 'react'
import CommentList from '../components/comments/CommentList'
import CommentInput from '../components/comments/CommentInput'
import addComment from "../actions/addComment";
import { connect } from 'react-redux';

class CommentsContainer extends Component {
  
  render() {
    return (
      
      <div id='comments-container'>
        <CommentInput
          addComment={this.props.addComment}
          projectId={this.props.project.id}
        />

        {this.props.project.comments ?
          <CommentList
            projectComments={this.props.project.comments}
          />
          :
          <i>This project does not have any comments yet.</i>
        }
      </div>
    )
  }
}
export default connect(null, { addComment })(CommentsContainer); 