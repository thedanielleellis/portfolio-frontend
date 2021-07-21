import React from 'react'
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetchBlogPosts';
import Blog from '../components/blog/Blog'

class BlogPostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBlogPosts()
  }

  render() {
    return (
      <div id='blog-container' className='component'>
       
            < >
              <Blog blogPosts={this.props.blogPosts} />
            </>
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blogPosts: state.blog.blogPosts,
    loadingBlog: state.blog.loadingBlog
  }
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPostsContainer)