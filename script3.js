const postsDiv = document.getElementById("posts");

async function loadPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Помилка");
        }

        const posts = await response.json();

        posts.forEach(post => {
            const div = document.createElement("div");

            const title = document.createElement("h3");
            title.textContent = "Title: " + post.title;

            const body = document.createElement("p");
            body.textContent = "Body: " + post.body;

            div.appendChild(title);
            div.appendChild(body);

            postsDiv.appendChild(div);
        });

    } catch {
        postsDiv.textContent = "Помилка завантаження";
    }
}

loadPosts();