function fun1(){
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value

    let funp = Number(input1) + Number(input2);

    document.querySelector(".screen").innerHTML = funp


    }
    function fun2(){
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value

    let funp = Number(input1) - Number(input2);

    document.querySelector(".screen").innerHTML = funp


    }
    function fun3(){
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value

    let funp = Number(input1) * Number(input2);

    document.querySelector(".screen").innerHTML = funp


    }
    function fun4(){
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value

    let funp = Number(input1) / Number(input2);

    document.querySelector(".screen").innerHTML = funp


    }