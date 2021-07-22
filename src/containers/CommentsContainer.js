import React from 'react'
import { connect } from 'react-redux';
import CommentList from '../components/comments/CommentList'
import CommentInput from '../components/comments/CommentInput'
import addComment from "../actions/addComment";

class CommentsContainer extends React.Component {
  
  render() {

    return (
      
      <div id='comments-container'>
        <CommentInput
          addComment={this.props.addComment}
          projectId={this.props.project.id}
        />

      {this.props.project.comments ?
          <CommentList projectComments={this.props.project.comments} />
          :
          <i>This project does not have any comments yet.</i>
        }
      </div>
    )
  }
}


export default connect(null, { addComment })(CommentsContainer); 