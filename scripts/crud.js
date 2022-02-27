import blog from './../blog/blog.js'

let blogListArray;


if (localStorage.getItem("blogs") == null) {
    let blog1 = new blog("Title", "May 2", "summary");
    let blog2 = new blog("Title2", "May 3", "summary2");
    blogListArray = [blog1, blog2];
    localStorage.setItem("blogs", JSON.stringify(blogListArray));
} else {
    blogListArray = JSON.parse(localStorage.getItem("blogs"));
}
console.log(blogListArray);



window.addEventListener("DOMContentLoaded", () => {

    function addBlog() {
        promptDialog.open = true;
    }

    function promptCancel() {
        title.required = false;
        date.required = false;
        summary.required = false;

        setTimeout(function () {
            promptDialog.close();
            title.required = true;
            date.required = true;
            summary.required = true;
        }, 0)
    }

    function promptOk() {

        if (title.value != "" && date.value != "" && summary.value != "") {
            let newBlog = new blog(title.value, date.value, summary.value);
            blogListArray[blogListArray.length] = newBlog;
        }

        console.log(blogListArray);
    }

    function editBlog(blogTitle) {
        console.log(blogTitle + " editBlog function")
    }

    function deleteBlog(blogTitle) {
        blogTitle = blogTitle.substring(1);
        console.log(blogTitle)
        console.table(blogListArray);
        blogListArray.forEach((blogItem) => {
            if (blogItem.title === blogTitle) {
                blogItem.title = "traas"
            }
        });
        console.table(blogListArray);
    }

    let blogList = document.getElementById("blog-list");
    blogListArray.forEach((blogItem) => {
        let li = document.createElement("li");
        li.setAttribute("id", `$${blogItem.title}`)


        let p = document.createElement("p");
        p.appendChild(document.createTextNode(blogItem.title));
        li.appendChild(p);

        // li.innerHTML = `<p>${blogItem.title}</p><button id="edit">Edit</button><button id="delete">Delete</button>`
        // a.append(document.createTextNode(blogItem.title));

        blogList.appendChild(li);
        // editButton.addEventListener("click", editBlog(editButton.parentElement.id), true);
        // deleteButton.addEventListener("click", deleteBlog(editButton.parentElement.id), true);
    });

    let addBlogButton = document.getElementById("prompt-button");
    let promptDialog = document.getElementById('prompt');

    addBlogButton.addEventListener("click", addBlog, true);

    let promptCancelButton = document.getElementById('cancel-prompt');
    let promptOkButton = document.getElementById('ok-prompt');
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let summary = document.getElementById('summary');

    promptCancelButton.addEventListener("click", promptCancel, true);
    promptOkButton.addEventListener("click", promptOk, true);

    let l = document.querySelectorAll('li');

    l.forEach(function (i) {
        let title = i.id;
        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.setAttribute("id", `edit-${title}`);
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("id", `delete-${title}`);
        editButton.setAttribute("onclick", `editFunc(${title})`)

        i.appendChild(editButton);
        i.appendChild(deleteButton);
    });

    // blogListArray.forEach((blogItem) => {
    //     let blogEditButton = document.getElementById(`edit-${blogItem.title}`);
    //     let blogDeleteButton = document.getElementById(`delete-${blogItem.title}`);

    //     // blogEditButton.addEventListener("click", console.log("hi"), true);
    // });

    // let editButton = document.getElementById('edit');
    // let deleteButton = document.getElementById('delete');

    // editButton.addEventListener("click", editBlog(editButton.parentElement.id), true);
    // deleteButton.addEventListener("click", deleteBlog(editButton.parentElement.id), true);
});