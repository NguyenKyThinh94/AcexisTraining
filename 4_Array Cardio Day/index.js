let productList=  [
    {itermId: "1", productName: "Bong Den", actualPrice: "53000", discountPrice: "42000", stockAvailable: "111" },
    {itermId: "2", productName: "Day dien", actualPrice: "35000", discountPrice: "35000", stockAvailable: "2" },
    {itermId: "3", productName: "Cong tac", actualPrice: "20000", discountPrice: "1900", stockAvailable: "15" },
    {itermId: "4", productName: "O cam dien", actualPrice: "50000", discountPrice: "43000", stockAvailable: "0" },
    {itermId: "5", productName: "Noi com dien", actualPrice: "20000", discountPrice: "17000", stockAvailable: "31" },
    {itermId: "6", productName: "Quat hoi nuoc", actualPrice: "1000000", discountPrice: "970000", stockAvailable: "0" },
    {itermId: "7", productName: "Ban ui", actualPrice: "300000", discountPrice: "245000", stockAvailable: "1" },
    {itermId: "8", productName: "chao chien", actualPrice: "90000", discountPrice: "83000", stockAvailable: "15" },
    {itermId: "9", productName: "Den compac", actualPrice: "84000", discountPrice: "81000", stockAvailable: "18" },
    {itermId: "10", productName: "Den chum", actualPrice: "730000", discountPrice: "639000", stockAvailable: "17" },
  ]
function renderHeaderTable(array){
    let headerTable=document.querySelector('thead');
    let listKey=Object.keys(array[0]);
    let listKeyStr=listKey.map((element) => "<th data-checked='1'>"+element+"<th>");
    headerTable.innerHTML= "<tr>" + listKeyStr.join('')+ "</tr>";
}
function renderBodyTable(array){
    let bodyTable=document.querySelector('tbody');
    rowArray=array.map(function(elementRow){
        let RowArr=Object.values(elementRow);
        let RowArrStr=RowArr.map((element) => "<td>"+element+"<td>");
        return "<tr>" + RowArrStr.join('')+ "</tr>"
    });
    bodyTable.innerHTML=rowArray.join('');
   
}
function sortList(){
    console.log(this);
}
function addEvent(){
    let colum=[...document.querySelectorAll('th')];
    colum.forEach(element => {
        element.addEventListener('click',sortList);
    });
}
function renderArrayTable(array){
    renderHeaderTable(array);
    renderBodyTable(array);
    addEvent();
}
renderArrayTable(productList);