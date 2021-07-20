import React from 'react';
import BlogPost from './BlogPost';

const Blog = ({ blogPosts }) => {
  const blogPostList = blogPosts.map(blogPost => {
    return <BlogPost key={blogPost.id} blogPost={blogPost} />
  })

  return (
    <div className='component'>
        <h1>BLOG</h1>
      {blogPostList}
    </div>
  );
}

export default Blog