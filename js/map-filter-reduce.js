const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercises
//DONE
// 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.


//DONE
// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const userObjects = users.filter(user => users.languages.length > 2);
    console.log(userObjects);


//DONE
// 3. Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => users.email);
console.log(userEmails);


//DONE
// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce(function(accumulation,current){
    return accumulation + current.yearsOfExperience;
},0);

console.log(totalYears);

//DONE HAD TO FOLLOW ON WALK THROUGH
// 5. Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce(function(prev,current){
    const currentEmail = current.email;
    if (currentEmail.length > prev.length){
        return currentEmail;
    }else{
    return prev;
    }

},"");
//DONE HAD TO FOLLOW WALK THROUGH
// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const yourInstructors = users.reduce(function(sentence,instructor,index,arr){
    if(index === (arr.length -1)){
    return `${sentence}${instructor.name}.`;
 }else{
    return `${sentence}${instructor.name},`;
}
},"Your instructors are: ");

// Bonus //SOPHIES WAY
// 1. Use .reduce to get the unique list of languages from the list of users.
const uniqueLanguages = users.reduce(function(prev,current){
    const langs = current.languages;
    for(const lang of langs){
        prev.add(lang);
    }
    return prev;

},new Set);