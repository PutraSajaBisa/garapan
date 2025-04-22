document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const posts = [
        { title: 'Contoh Postingan', date: '2025-04-22', summary: 'Ini adalah ringkasan postingan pertama.', link: 'posts/example-post.html' },
        { title: 'List Garapan', date: '2025-04-23', summary: 'Update Garapan.', link: 'posts/list_garapan.html' }
    ];

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-preview';
        postDiv.innerHTML = `
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p><small>${post.date}</small></p>
            <p>${post.summary}</p>
        `;
        postList.appendChild(postDiv);
    });
});
