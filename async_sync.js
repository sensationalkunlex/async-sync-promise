function syncFunct()
{
    let arr=[];

    // Fetch API is a promise: 
    fetch("https://jsonplaceholder.typicode.com/posts")
    //Data format
    .then(response=>response.json())
    //Data return;
    .then(data=>{arr=data; console.log("arr:", arr)});
//It depends on the API (It may be the last with real value of array)
    setTimeout(()=>{console.log(" setTimeout:  ",arr)},3000);
   
   // Array will still be empty here  (The second code to run)
    setTimeout(()=>{console.log(" setTimeout:  ",arr)},30);


    //Array will be empty here (The first code to run)
    console.log("Last:",arr);


}

//syncFunct();

async function asyncFunct()
{
    let arr=[];
    let data= await  fetch("https://jsonplaceholder.typicode.com/posts");
    
    arr=await data.json();
    //setTimeout(() => { console.log("AsyncFunct setTimeout:  ", arr); }, 1000);
    new Promise(resolve =>{ setTimeout(() => { console.log("AsyncFunct setTimeout:  ", arr); }, 1000);
resolve});
await Promise.resolve(console.log("Testing Promise"))
   
    console.log("Async last:", arr);
}

asyncFunct();