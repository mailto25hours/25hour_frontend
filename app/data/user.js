import {Images} from '@config';



var userInfo
var user =null
// console.log("user",user)
    if(!user ){
    userInfo =false
    }
    else{ 
    userInfo=true
    }
 const UserData = [
  {
    id: userInfo ?user.id:'',
    image: userInfo?user.photoURL:'', // put one 
    name: userInfo?user.displayName:'', //auth().currentUser.displayName,
    major: userInfo?'preferred_language':'',
    email: userInfo?user.email:'', //"user@email.com", //auth().currentUser,
    address: 'user.address',//('Singapore, Golden Mile', 'Add address'), //if null show add address 
    point: '9.5',
    // id: '2',//user.email,//'@steve.garrett',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    performance: [
      {value: '97.01%', title: 'feedback'},
      {value: '999', title: 'items'},
      {value: '120k', title: 'followers'},
    ],
  }
];


 export  { UserData }
    


