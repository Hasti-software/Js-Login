var users = [
    {id: 1,name:'Jack',family:'Robinson',age:23,email:'rrbi701'},
    {id: 2,name:'Leo',family:'Baker',age:37,email:'lb221'},
    {id: 3,name:'Evanna',family:'Adams',age:16,email:'Oimeva'},
]

username = prompt('Enter your name : ')
userfamilyname = prompt('Enter your lastname : ')
userage = +prompt('Enter your age : ')
useremail = prompt('Enter your email : ')

if (username.lenght < 3 || username.lenght > 10) {
    alert('The name must have at least 3 characters and a maximum of 10 characters')
} else if (userfamilyname.lenght < 3 || userfamilyname.lenght > 15) {
    alert('The name must have at least 3 characters and a maximum of 15 characters')
} else if (userage.lenght > 3 || isNaN(userage)) {
    alert('Enter the age correctly')
} else {
  newuser = {
    id: 4 ,
    name: username ,
    family: userfamilyname ,
    age: userage ,
    email: useremail 
  }
  users.push(newuser)
}

console.log(users)