window.addEventListener("DOMContentLoaded", () => {

    function getReq() {


        if (_requestType.value === "fetch") {
        date.value = new Date();

            fetch(`https://httpbin.org/get?id=${_id.value}`, {
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
        } else {
        date.value = new Date();

            let req = new XMLHttpRequest();

            req.open('GET', `https://httpbin.org/get?id=${_id.value}`);

            req.send();

            req.onload = function () {
                document.getElementById("response").innerHTML = ""
                document.getElementById("responseXML").innerHTML = JSON.stringify(req.responseText, null, 4);
            };

            req.onerror = function () {
                alert("Request failed");
            };
        }
    }

    function postReq() {

        let data = {
            id: _id.value,
            articleName: _articleName.value,
            articleBody: _articleBody.value
        }

        if (_requestType.value === "fetch") {

            date.value = new Date();

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
        } else {
            date.value = new Date();

            let req = new XMLHttpRequest();

            req.open('POST', `https://httpbin.org/post`);

            req.send(data);

            req.onload = function () {
                document.getElementById("response").innerHTML = ""
                document.getElementById("responseXML").innerHTML = JSON.stringify(req.responseText, null, 4);
            };

            req.onerror = function () {
                alert("Request failed");
            };

        }
    }

    function putReq() {

        let data = {
            id: _id.value,
            articleName: _articleName.value,
            articleBody: _articleBody.value
        }

        if (_requestType.value === "fetch") {

            date.value = new Date();


        fetch(`https://httpbin.org/put?id=${data.id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        })
            .catch((e) => {
                console.log(e);
            })
            .then((res) => {
                if (res.ok) {
                    res.json().then((json) => {
                        console.log(res);
                        document.getElementById("responseXML").innerHTML = JSON.stringify(json, null, 4);
                    });
                } else {
                    console.log("error", res);
                }
            });

        } else {
            date.value = new Date();

            let req = new XMLHttpRequest();

            req.open('PUT', `https://httpbin.org/put?id=${data.id}`);

            req.send(data);

            req.onload = function () {
                document.getElementById("response").innerHTML = ""
                document.getElementById("responseXML").innerHTML = JSON.stringify(req.responseText);
            };

            req.onerror = function () {
                alert("Request failed");
            };

        }
    }

    function deleteReq() {

        if (_requestType.value === "fetch") {
            date.value = new Date();


        fetch(`https://httpbin.org/delete?id=${_id.value}`, {
            method: "DELETE",
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
        } else {
            date.value = new Date();
    
                let req = new XMLHttpRequest();
    
                req.open('DELETE', `https://httpbin.org/delete?id=${_id.value}`);
    
                req.send();
    
                req.onload = function () {
                    document.getElementById("response").innerHTML = ""
                    document.getElementById("responseXML").innerHTML = JSON.stringify(req.responseText);
                };
    
                req.onerror = function () {
                    alert("Request failed");
                };
            }
    }

    let _id = document.getElementById("editId");
    let _articleName = document.getElementById("editArticleName");
    let _articleBody = document.getElementById("editArticleBody");
    let _date = document.getElementById("date");

    let _requestType = document.getElementById("requestType");

    let getBtn = document.getElementById("getBtn");
    let postBtn = document.getElementById("postBtn");
    let putBtn = document.getElementById("putBtn");
    let deleteBtn = document.getElementById("deleteBtn");

    getBtn.addEventListener("click", getReq, true);
    postBtn.addEventListener("click", postReq, true);
    putBtn.addEventListener("click", putReq, true);
    deleteBtn.addEventListener("click", deleteReq, true);
});
