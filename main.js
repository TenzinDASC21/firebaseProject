let messageElement = document.querySelector("#message");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */

button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let username        = username.value;
    let title         = head.value;
    let story  = stories.value;
    usernameElement.value = "";
    headElement.value  = "";
    textElement = "";
    console.log(username + " : " + title + " " + story);

    let value = {
        NAME: username,
        TITLE: title,
        STORY: story 
    }
    database.push(value);

}

database.on("child_added", addPostToBoard);

function addPostToBoard(rowData){
    let post = rowData.val();
    console.log(post.Name);
    console.log(post.Title);
    console.log(post.Story);

}