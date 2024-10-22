//   Immediately Invoked Function Expression (IIFE)
 /* sometimes to avoid polution from global scope we use IIFE.*/

 (function chai(){
    //this is a named iife
    console.log(`DB CONNECTED`);
    
 })();

 ((name)=>{
    //this is normal iife
    console.log(`DB NOT CONNECTED,${name}`);
    
 })('Harry');

 // here we implemented two iife in one code . for that we seperated first iife by using semi-colon