/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more 
number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE
   mentors.filter(mentor =>
   mentor.job.city.includes('Barcelona') && 
   mentor.skills.includes('React')

   ).forEach(mentor => {
     const {firstName, lastName} = mentor;
     console.log(`Hi, my name is ${firstName} ${lastName}. I work in Barcelona and i know React.`)
   })
  

//   //  --------exercise -2 
  
let mentorsLiveInBCN = mentors.filter(mentor => mentor.job.city.includes('Barcelona'))

  mentorsLiveInBCN.forEach(mentor => {
  mentor.skills.push('SQL')
  mentor.class = "JUN1"
 
  console.log(mentors)
 });
 

// let setClass = mentorsLiveInBCN.forEach(mentor => mentor.class.push("Jun1"))
// console.log(setClass)


// // exercise -3 ------------------

 function addSkill(mentorsName, newSkill) {
   
    mentors.forEach(mentor => {
    if(mentor.firstName === mentorsName){
      mentor.skills.push(newSkill)
    }
  })
 }
 addSkill('Leo', "PHP")
 console.log(mentors)  

//  // exercise -4 ------------------

//  //4. Create a function to add a skill to all members in a list of mentors

 function addSkill(mentorsName, newSkill) {
   
  mentors.forEach(mentor => {
  if(mentor.firstName === mentorsName){
    mentor.skills.push(newSkill)
  }
})
}
addSkill('Leo', "PHP")
// console.log(mentors)  

// // 5. Create a function to remove a skill to all members in a list of mentors

// function removeSkill(mentors,newSkill){  // NOT WORKING
//    mentors.forEach(mentor => mentor.skills.remove(newSkill));
 
// }


// // 6. Create a function mentorWithMoreSkills() that returns the name of the mentor 
// //with more number of skills

// // function mentorWithMoreSkills(mentors){
// // mentors.sort((mentor1, mentor2)=> mentor1.skills.length > mentor2.skills.length)
// // mentors.forEach(mentor => console.log(mentor.firstName, mentor.skills.length))

// // }

//       //  ------------  2ND WAY----------
      
      function mentorWithMoreSkills(mentors) {
        var res = Math.max.apply(Math, mentors.map(function(o) {    //result undefined 
            return o.skills.length
        }))
        var obj = mentors.find(function(o) { return o.skills.length === res });
        console.log(obj.firstName);
    
    }

   // 7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes
  
      function addStudentLikes(mentors) {
        mentors.forEach(
            mentor => mentor.addStudentLikes())
    }
    mentors.forEach(mentor => {
        mentor.addStudentLikes = function() {
            this.studentLikes++;
        }
    })

    mentors.forEach(mentor => console.log(mentor.firstName, mentor.studentLikes))
    addStudentLikes(mentors)
    mentors.forEach(mentor => console.log(mentor.firstName, mentor.studentLikes))

    console.log(mentorWithMoreSkills(mentors)); 
   