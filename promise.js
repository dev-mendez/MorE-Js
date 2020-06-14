const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post Two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// createPost({ title: 'Post Three', body: 'This is post Two' })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Promises

const prom1 = Promise.resolve('Hellow world');
const prom2 = 10;
const prom3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
// const prom4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
//   res.json()
// );

Promise.all([prom1, prom2, prom3 /* prom4 */]).then((values) =>
  console.log(values)
);
