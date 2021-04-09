// creating a static array object
const newStudents = [
    {firstName : "Steve" , 
    games : ["football", "ruby", "cricket"]},
    {firstName : "celia" , 
    games : ["soccer", "ruby"]}
];

var filterSubject = function(Students, game){
    var filteredStudents = [];
    for (let i = 0; i < Students.length; i++) {
        var student = Students[i];

        for (let j = 0; j <student.games.length; j++) {
            if (student.games[j].toLowerCase() == game.toLowerCase()) {
                filteredStudents.push(student);
            }
        }
    }
    return filteredStudents;
}

console.log(filterSubject(newStudents, "soccer"));