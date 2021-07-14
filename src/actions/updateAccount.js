export default function updateAccount(formData) {
    return (dispatch) => {
        dispatch({ type: 'START_UPDATE_ACCOUNT' });
        fetch(`http://localhost:3001/api/v1/users/${formData.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(users => dispatch({
          type: 'UPDATE_ACCOUNT',
          payload: users
        }))
      }
    }