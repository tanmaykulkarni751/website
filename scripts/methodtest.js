window.addEventListener("DOMContentLoaded", () => {

    function get() {
        fetch("https://httpbin.org/get", {
            method: "GET"
        })
            .catch((e) => {
                console.log(e);
            })
            .then((res) => {
                if (res.ok) {
                    res.json().then((json) => {
                        console.log(res);
                        document.getElementById("response").innerHTML = JSON.stringify(json, null, 4);
                    });
                } else {
                    console.log("error", res);
                }
            });
    }

    function post() {

        let data = {
            id: _id.value,
            articleName: _articleName.value,
            articleBody: _articleBody.value
        }

        fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .catch((e) => {
                console.log(e);
            })
            .then((res) => {
                if (res.ok) {
                    res.json().then((json) => {
                        console.log(res);
                        document.getElementById("response").innerHTML = JSON.stringify(json, null, 4);
                    });
                } else {
                    console.log("error", res);
                }
            });
    }

    let _id = document.getElementById("editId");
    let _articleName = document.getElementById("editArticleName");
    let _articleBody = document.getElementById("editArticleBody");

    let getBtn = document.getElementById("getBtn");
    let postBtn = document.getElementById("postBtn");
    let putBtn = document.getElementById("putBtn");
    let deleteBtn = document.getElementById("deleteBtn");

    getBtn.addEventListener("click", get, true);
    postBtn.addEventListener("click", post, true);
    putBtn.addEventListener("click", post, true);
    deleteBtn.addEventListener("click", post, true);
});
