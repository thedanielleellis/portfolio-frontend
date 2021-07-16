import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetchBlogPosts';
import Blog from '../components/blog/Blog'

// Container component deal with managing blog state and class methods
class BlogPostsContainer extends Component {
  // blog data requested after React has mounted its component
  // once data is ready, React will re-render and use the API content
  componentDidMount() {
    this.props.fetchBlogPosts()
  }

  render() {
    return (
      <div id='blog-container' className='component'>
        {
          this.props.loadingBlog ?
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.mit.edu%2F2020%2Fdiamond-metal-conductor-1005&psig=AOvVaw3G7ari8kuPlfMS7YQR1lw0&ust=1626493497415000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjypMvW5vECFQAAAAAdAAAAABAG" alt='loading' />
            :
            < >
              <Blog blogPosts={this.props.blogPosts} />
            </>
        }
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

// pass in objec containing k-v pairs for action creator `fetchBlogPosts`
export default connect(mapStateToProps, { fetchBlogPosts })(BlogPostsContainer)