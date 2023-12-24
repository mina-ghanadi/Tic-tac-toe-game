var array = [1,2,3,4,5,6,7,8,9];




function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    document.querySelector(`#cell${item}`).innerHTML=`<button disabled >⚬</button>`;
    
}



getRandomItem(array);



/////cell1
function function1(event){
    event.preventDefault();
    document.querySelector("#cell1").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 1);
    console.log(array);
return array;
}
(document.querySelector("#cell1")).addEventListener("click",function1);
/// cell2
function function2(event){
    event.preventDefault();
    document.querySelector("#cell2").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 2);
    console.log(array);
return array;
}
(document.querySelector("#cell2")).addEventListener("click",function2);
/// cell3
function function3(event){
    event.preventDefault();
    document.querySelector("#cell3").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 3);
    console.log(array);
    
    return array;
}
(document.querySelector("#cell3")).addEventListener("click",function3);
/// cell4
function function4(event){
    event.preventDefault();
    document.querySelector("#cell4").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 4);
    console.log(array);
    return array;
}
(document.querySelector("#cell4")).addEventListener("click",function4);
/// cell5
function function5(event){
    event.preventDefault();
    document.querySelector("#cell5").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 5);
    console.log(array);
    return array;
}
(document.querySelector("#cell5")).addEventListener("click",function5);
/// cell6
function function6(event){
    event.preventDefault();
    document.querySelector("#cell6").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 6);
    console.log(array);
    return array;
}
(document.querySelector("#cell6")).addEventListener("click",function6);
/// cell7
function function7(event){
    event.preventDefault();
    document.querySelector("#cell7").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 7);
    console.log(array);
    return array;
}
(document.querySelector("#cell7")).addEventListener("click",function7);
/// cell8
function function8(event){
    event.preventDefault();
    document.querySelector("#cell8").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 8);
    console.log(array);
    return array;
}
(document.querySelector("#cell8")).addEventListener("click",function8);
/// cell9
function function9(event){
    event.preventDefault();
    document.querySelector("#cell9").innerHTML=`<h1>☓</h1>`;
    array = array.filter(item => item !== 9);
    console.log(array);
    return array;
}
(document.querySelector("#cell9")).addEventListener("click",function9);

