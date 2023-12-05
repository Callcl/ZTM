var database = [
    {
        username: "Lachlan",
        password: "1"
    },
    {
        username: "Bobby",
        password: "2"
    },
    {
        username: "Sally",
        password: "3"
    },
    {
        username: "Jake",
        password: "4"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all this new learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo coool!"
    },
    {
        username: "Jake",
        timeline: "Coding is pretty cool!"
    }
];

function isUserValid(username, password) {
        for (var i=0; i < database.length; i++ ) {
            if (database[i].username === username &&
                database[i].password === password) {
                    return true;
                } else {
                    alert("Sorry, wrong username or password!")
                }
        }
        return false;
}

function signIn (username, password) {
    console.log(isUserValid(username, password));

    
    // if (username === database[0].username && password === database[0].password) {
    //     console.log (newsFeed)
    // } else {
    //     alert ("Sorry, the username or password was incorrect!");
    // }

}

signIn (userNamePromt, passwordPrompt)
    

var userNamePromt = prompt ("What's your username?");
var passwordPrompt = prompt ("What's your password?");
