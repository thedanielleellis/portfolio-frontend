export const fetchBlogPosts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_BLOG' });
      const url = 'http://dev.to/api/articles?username=thedanielleellis'
      fetch(url)
        .then(resp => resp.json())
        .then(respJSON => dispatch({ type: 'ADD_BLOG', blog: respJSON }))
        .catch(() => alert("Can’t access response from dev.to API. Blocked by browser?"))
    }
  }