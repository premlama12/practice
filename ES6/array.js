// let arr=[101,102,103,104]
// let new_arr=[]
// for(var i=0;i<=arr.length;i++){
//     new_arr.push(arr[i]);
// }
// console.log(new_arr)


// let arr=[101,102,103,104]
// let new_arr=[]
// var i=0;
// while(i<=arr.length){
//     new_arr.push(arr[i]);
//     i++;
// }
// console.log(new_arr)



//{...} operator acts as spread and some time acts as merge



// let arr=[101,102,103,104]
// let new_arr=[...arr]
// console.log(new_arr)

// let arr=[101,102,103]
// let arr2=[104,105,106]
// let new_arr=[...arr,...arr2]
// console.log(new_arr)


// let a=[101,102,103]
// let b=[...a,104,105,106]
// console.log(b)


// let emp={
//     id:101,
//     name:"prem",
//     salary:45000
// };
// let user={}
// user.id=emp.id;
// user.name=emp.name;
// user.salary=emp.salary;
// console.log(user)

// let emp={
//     id:101,
//     name:"prem",
//     salary:45000
// };
// let details={
//     email:"lprem0418@gmail.com",
//     id:101
// };
// let user_Details={...emp,...details}
// console.log(user_Details)

// let new_details={...user_Details,location:"Bangalore"}
// console.log(new_details)

// function add(a,...b){
//     console.log(a,b)
// }
// add(10,20);
// add(10,20,30);
// add(10,20,30,40)
// add(10,20,30,40,50)