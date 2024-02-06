// let yearOfBirth = [2001,2009,1997,2007];
// let currentYear = 2024;

// const getResultArray = (birthYears, func) =>{
// const result =[];
// for(let birthyear of birthYears){
//     let value = func(birthyear)
//     result.push(value)
// }
// return result
// }
// const calculateAge = (birthyear)=>{
// let age = currentYear-birthyear;
// return age
// }
 
// console.log(getResultArray(yearOfBirth,calculateAge))

function questions(role){
   switch (role) {
    case "Manager":
        return function(role){
            return `Hi ${role}, What is the core value of company`;
        };
   
    case "Native": 
        return `Hi ${role}, What i your best programming language?`;
   
    case "Elder":return `Hi ${role}, do you love your job`
    
    default:
        return;
   
    }
}
let answer = questions("Manager");
console.log(answer("uye"))