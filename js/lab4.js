function enter()
{
    let input= document.getElementById("numberInput").value;
    let squ=input*input;
    document.getElementById("output").innerHTML=`<h1>Square of ${input} is ${squ}</h1>`;

}