const bcrypt = require("bcryptjs");
let user={
  name: "prem",
  email: "lprem0418@gmail.com",
  password: "1234567",
  credit_card: "12345678901234567",
};
let salt=bcrypt.genSaltSync(10);
let newPassword=bcrypt.hashSync(user.password,salt);
let newCC=bcrypt.hashSync(user.credit_card,salt);

let new_User={...user,password:newPassword,credit_card:newCC};
console.log(new_User);
let result=bcrypt.compareSync("1234567",new_User.password);
if(result){
  console.log("Login Successfully");
}else{
  console.log("login failed");
}

