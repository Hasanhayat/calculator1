function fun1(){
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value
    let operator = document.querySelector("#select").value
    let ans;






if(operator==="plus"){
    ans = Number(input1) + Number(input2);

}
else if(operator==="minus"){
    ans = Number(input1) - Number(input2);
}
else if(operator==="multiply"){
    ans = Number(input1) * Number(input2);
}
else if(operator==="divide"){
    ans = Number(input1) / Number(input2);
}



    document.querySelector(".screen").innerHTML = ans
   

}
