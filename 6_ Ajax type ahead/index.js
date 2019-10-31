"use strict";
let cityList=[];
let inputLocation=document.getElementById('inputLocation');
let listLocation=document.getElementById('listLocation');
function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
function numberWithCommas(str) {
    if ((typeof str) == "number") {
        str = str.toString().split('.');
    }
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(str))
        str = str.replace(pattern, "$1,$2");
    return str;
}

function render(arr){  
    listLocation.innerHTML='';
    arr.forEach( function(element,index){
        let indexStr=(index+1).toString();
        let HTML=  
        '<span class="number">'+ indexStr + '. </span>'
        +'<span class="city"> '+ element.city+' city,</span> '
        +'<span class="city"> '+element.state+' state</span> '
        +'<span class="population">Population:'+ numberWithCommas(element.population)+ '</span>';
        let node=document.createElement('li');
        if(index%2==0){
            node.classList='iterm-location upTrapezium';
        } else {
            node.classList='iterm-location downTrapezium';
        }
        node.innerHTML=HTML;
        listLocation.appendChild(node);
    })


}
function filtedCityList(re){
    return cityList.filter(cityIterm => {
        return cityIterm.city.match(re)||cityIterm.state.match(re) ;
    });
}
function getLocationInput(){
    let inputTyping= inputLocation.value;
    let re = new RegExp(inputTyping);
    let newArr=filtedCityList(re);
    render(newArr);
    
}
function getData(pathToResource) {
    fetch(pathToResource)
        .then(validateResponse)
        .then((result) => {
            cityList= result;
            getLocationInput();
        })
        .catch(error => console.log(error));
}


inputLocation.addEventListener('keyup',getLocationInput);
getData('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');



