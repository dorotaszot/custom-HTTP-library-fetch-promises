const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// User data
const data = {
  name: 'Tom Smith',
  username: 'tomsm',
  email: 'toms@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// Update post
http.put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))
