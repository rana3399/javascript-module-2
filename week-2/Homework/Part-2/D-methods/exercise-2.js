/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) {
     person.currentAddress = newAddress;


    },
    celebrateBirthday: function() {
        person.age = person.age + 1;
    }
};

 person.changeAddress('Dhaka');
 person.celebrateBirthday()
console.log(person.currentAddress);
console.log(person.age)
