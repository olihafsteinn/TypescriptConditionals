

interface Person{
    name:string;
    dateOfBirth:string;
    children:number;
    country:string;
    knowsHowToProgram:boolean;
};

const people: Person[] = [
{
    name: "Darda Dilworth",
    dateOfBirth: "9/2/1996", 
    children: 5, 
    country: "Canada",
    knowsHowToProgram: true
},
{
    name: "Xenia Kendell",
    dateOfBirth: "10/10/1980", 
    children: 2, 
    country: "Indonesia",
    knowsHowToProgram: false
},
{
    name: "Sybille Nickless",
    dateOfBirth: "12/29/2000", 
    children: 4, 
    country: "Armenia",
    knowsHowToProgram: true
},
{
    name: "Philip Pickup",
    dateOfBirth: "12/2/1989", 
    children: 1, 
    country: "Spain",
    knowsHowToProgram: true
},
{
    name: "Jamaal Ondrich",
    dateOfBirth: "3/13/1986", 
    children: 0, 
    country: "Indonesia",
    knowsHowToProgram: true
},
];

// Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.

let result:string
result = people[2].name.length > 5 ? "Long name" : "Short name";
console.log(result)

people[2].name.length > 10 ? console.log(people[2].name + " is longer than 5 characters") : console.log(people[2].name + " is not longer than 5 characters");


// Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.

// If statement
if (people[3].country === "Iceland"){
    console.log("Hæ " + people[3].name)
}   else if (people[3].country === "Spain"){
    console.log("Hola " + people[3].name)
}   else if (people[3].country === "Korea"){
    console.log("여보세요 " + people[3].name)
}

// Switch statement
for (const person of people) {
    switch (person.country){
        case "Iceland":
            console.log("Hæ " + person.name);
            break
        case "Spain":
            console.log("Hola " + person.name);
            break
        case "Korea":
            console.log("“여보세요” " + person.name)
            break
        default:
            console.log("Hello " + person.name)
    }
}

// Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.

if (people[1].knowsHowToProgram && people[4].knowsHowToProgram === true){
    console.log("Yay")
}   else {
    console.log("LMGTFY")
}

// Does the 2nd person have the same amount of kids as the 3rd?

const amountOfKids:number = (people[1].children)
const amountOfKids2:number = (people[2].children)

if (amountOfKids > amountOfKids2) {
    console.log(people[1].name + " has more children than " + people[2].name)
}   else if ( amountOfKids < amountOfKids2){
    console.log(people[2].name + " has more children than " + people[1].name)
}   else {
    console.log(people[2].name + " and " + people[1].name + " have the same amount of kids")
}


// Is the first person older than the last person?

function calculateAge(birthDate: string): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();

    //Adjust age if birthday hasn't occurred yet this year
    if (
    today.getMonth() < birthDateObj.getMonth() ||
    (today.getMonth() === birthDateObj.getMonth() &&
        today.getDate() < birthDateObj.getDate())
    ) {
    age--;
    }

    return age;
}

const age1:number = calculateAge(people[1].dateOfBirth);
const age2:number = calculateAge(people[2].dateOfBirth);

if (age1 > age2) {
  console.log(`${people[1].name} is older than ${people[2].name}.`);
} else if (age1 < age2) {
  console.log(`${people[2].name} is older than ${people[1].name}.`);
} else {
  console.log(`${people[2].name} and ${people[1].name} are the same age.`);
}





//  name,Date of birth,Children,Country,Knows how to program
//  Darda Dilworth,9/2/1996,5,Canada,true
//  Xenia Kendell,10/10/1980,2,Indonesia,false
//  Sybille Nickless,12/29/2000,4,Armenia,true
//  Philip Pickup,12/2/1989,1,China,true
//  Jamaal Ondrich,3/13/1986,0,Indonesia,true


// type MyObject = {
//     name: string;
//     age: number;
//      Add more properties as needed
//   };
