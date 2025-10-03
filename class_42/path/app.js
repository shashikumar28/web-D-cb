const path = require('path')//object

// let ans = path.join('shashi' , 'kumar')//shashi/kumar

// let ans = path.join( 'i', 'a' , 'shashi' , 'kumar'  , 'me')//shashi/kumar

let ans = path.join( 'i\\', '//a//' , '//shashi//' , '//kumar//'  , '//me//')//shashi/kumar


console.log(ans)