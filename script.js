document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.getElementById('newPostBtn');
    const postForm = document.getElementById('postForm');
    const submitPost = document.getElementById('submitPost');
    const postsContainer = document.getElementById('posts');
    const successSound = document.getElementById('successSound');

    let isFirstPost = true;

    newPostBtn.addEventListener('click', () => {
        postForm.classList.toggle('hidden');
    });

    submitPost.addEventListener('click', () => {
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;

        if (title && content) {
            createPost(title, content);
            document.getElementById('postTitle').value = '';
            document.getElementById('postContent').value = '';
            postForm.classList.add('hidden');

            // Play sound for first post only
            if (isFirstPost) {
                successSound.play();
                isFirstPost = false;
            }
        }
    });

    function createPost(title, content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;
        postsContainer.prepend(post);
    }

    // Load sample post
    createPost(
        'Welcome to Nellog!',
        'This is your beautiful new blog. Click "Create New Post" to start writing!'
    );
}); 