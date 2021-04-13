
const bookBtn = document.getElementById("Books");
const addBtn = document.getElementById("Add");
const searchBtn = document.getElementById("Search");

bookBtn.addEventListener("click", openBookListBody)
addBtn.addEventListener("click", openAddBookBody)
searchBtn.addEventListener("click", openBookSearch)

function openBookListBody() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {

        if (this.status == 200) {
            document.getElementById("body").innerHTML = xhr.responseText;

            fetch("http://localhost:3000/books")
                .then((bookData) => {
                    console.log(bookData);
                    return (bookData.json())
                })
                .then(actualData => {
                    console.log(actualData);
                    showBooks(actualData);
                })
                .catch((error) => {
                    console.log(`we got the error as ${error}`);
                })
        }
    }
    xhr.open("get", "./views/_booklist.html", true)
    xhr.send();
}

function openAddBookBody() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {

        if (this.status == 200) {
            document.getElementById("body").innerHTML = xhr.responseText;
        }
    }
    xhr.open("get", "./views/_bookadd.html", true)
    xhr.send();
}

const addbookBtn = document.getElementById("addBookBtn");
function addBookFun(e) {
    e.preventDefault();
    console.log("Add Book Function got called");
    let title = document.querySelector("#bookTitle").value;
    let author = document.querySelector("#bookAuthor").value;
    let price = document.querySelector("#bookPrice").value;
    let rating = document.querySelector("#bookRating").value;
    let description = document.querySelector("#bookDescription").value;

    // console.log(`Title is: ${title} and author is ${author} ` );
    const url = "http://localhost:3000/books";
    let newRow = { "title": title, "author": author, "price": price, "rating": rating, "description": description };
    fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newRow)
    })
}



function openBookSearch() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {

        if (this.status == 200) {
            document.getElementById("body").innerHTML = xhr.responseText;
        }
    }
    xhr.open("get", "./views/_bookSearch.html", true)
    xhr.send();
}

function searchBookBy(e) {
    e.preventDefault();

    fetch("http://localhost:3000/books")
        .then((bookData) => {
            return (bookData.json())
        })
        .then(actualData => {
            let data = actualData;
            let newData =[];
            let searchBy = document.getElementById("searchBy").value;
            let searchItem = document.getElementById("searchBox").value;

            switch (searchBy) {
                case "id":
                    //console.log("plese search by id");
                    for (let i = 0; i < data.length; i++) {
                        if (searchItem == data[i].id) {
                            newData.push(data[i])
                        }
                    }
                    showBooks(newData);
                    console.log(newData);
                    break;
                case "name":
                    for (let i = 0; i < data.length; i++) {
                        if (searchItem == data[i].title) {
                            newData.push(data[i])
                        }
                    }
                    showBooks(newData);
                    //console.log(newData);
                    //console.log("plese search by name");
                    break;
                case "author":
                    for (let i = 0; i < data.length; i++) {
                        if (searchItem == data[i].author) {
                            newData.push(data[i])
                        }
                    }
                    showBooks(newData);
                    //console.log(newData);
                    //console.log("plese search by author");
                    break;
                case "rating":
                    for (let i = 0; i < data.length; i++) {
                        if (searchItem <= data[i].rating) {
                            newData.push(data[i])
                        }
                    }
                    showBooks(newData);
                    console.log(newData);
                    //console.log("plese search by rating");
                    break;
                default:
                    //console.log("please choose search By");
                    break;

            }
        })
        .catch((error) => {
            console.log(`we got the error as ${error}`);
        })

}


function showBooks(data) {
    let str = "";

    let bgcolor;
    console.log(data[0])
    for (let i = 0; i < data.length; i++) {

        if (i % 2 == 0)
            bgcolor = "background-color:#fdd299";
        else
            bgcolor = "background-color:#98f3c9";

        str += `
        <tr>
            <td style="${bgcolor}">${data[i].id}</td>
            <td style="${bgcolor}">${data[i].title}</td>
            <td style="${bgcolor}">${data[i].author}</td> 
            <td style="${bgcolor}">${data[i].rating}</td>
            <td style="${bgcolor}">${data[i].price}</td>
            <td style="${bgcolor}"><button onclick="deletePerticularBook(event,${data[i].id})">Delete</button></td>
        </tr>
        `
    }
    document.querySelector("tbody").innerHTML = str;
}

function deletePerticularBook(e, id) {
    e.preventDefault();
    fetch("http://localhost:3000/books/" + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset-UTF-8"
        }
    })
        .then((res) => {
            console.log(res)
            return (res.json())
        })
        .then(res => {
            console.log(res);
        })
}
openBookListBody();


