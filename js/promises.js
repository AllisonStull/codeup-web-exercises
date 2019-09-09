// Exercises promises
// Create a file named promises.js inside of your js directory.
//
//     Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const wait = (waiting) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(` Done waiting after ${waiting/1000} seconds`);
//         }, waiting);
//     });
// };
const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
};

// wait (3000).then((message)=> console.log(message));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));







//Generate a Personal Access Token for the github api.
//
//We will use this so that we don't get rate limited when talking to the github api. You can add the token to your requests like this:
//
//
//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
// fetch(url, {headers: {'Authorization': 'token gitHub'}})
    const getLastPush = function(username) {
        const giturl = "https://api.github.com/users/"+ username+"/events";
        return fetch(giturl, {
            headers: {
                "Authorization": `token ${gitHub}`
            }
        })
            .then(response => response.json())
            .then(events => {
                for (let event of events) {
                    if (event.type == "PushEvent") {

                        return (event.created_at);

                    }
                    // console.log(`${event.type} at ${event.created_at}`)
                }

            })
    };
    getLastPush("AllisonStull");






