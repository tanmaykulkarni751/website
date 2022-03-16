function foobar() {
    fetch("https://httpbin.org/get", {
        method: "GET"
      })
      .catch(() => {
        console.log("Fail zone");
      })
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => {
            document.getElementById("response").innerHTML = JSON.stringify(json, null, 2);
          });
        } else {
          console.log("error", res);
        }
      });
  }
  