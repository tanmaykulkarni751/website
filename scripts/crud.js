import blog from './../blog/blog.js'

let blog1 = new blog(1, "Title", "May 2", "summary");
let blog2 = new blog(2, "Title2", "May 3", "summary2");

let blogListArray = [blog1, blog2];

window.addEventListener("DOMContentLoaded", () => {

    let blogList = document.getElementById("blog-list");
    blogListArray.forEach((blogItem) => {
        let li = document.createElement("li");
        li.append(document.createTextNode(blogItem.title));
        blogList.appendChild(li);
    })
});