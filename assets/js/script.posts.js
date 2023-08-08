const posts = [];

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    cleanFields();
    storePost(title, category, resume, author, date);
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}

function storePost(title, category, resume, author, date) {
    const post = {
        title: title,
        category: category,
        resume: resume,
        author: author,
        date: date
    };

    posts.push(post);
}