// Write your code here!

function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    const p = document.createElement('p');
    p.textContent = post.body;
    li.appendChild(h1);
    li.appendChild(p)
    postList.appendChild(li);
  });
}

async function fetchAndShowPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndShowPosts();
});
