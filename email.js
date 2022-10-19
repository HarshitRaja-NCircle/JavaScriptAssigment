function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        console.log(mail, " This is a valid Email Address ! ");
    } else {
        console.log(mail, " This is a Invalid Email Address ! ");
    }
}

let email = "harshit.raja@ncircletech.com";
let email1 = "harshit--().company.com";

console.log("\n")
ValidateEmail(email);
console.log("\n")
ValidateEmail(email1);