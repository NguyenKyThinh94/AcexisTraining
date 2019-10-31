let productList=  [
    {itermId: "1", productName: "Bong Den", actualPrice: "53000", discountPrice: "42000", stockAvailable: "111" },
    {itermId: "2", productName: "Day dien", actualPrice: "35000", discountPrice: "35000", stockAvailable: "2" },
    {itermId: "3", productName: "Cong tac", actualPrice: "20000", discountPrice: "1000", stockAvailable: "13" },
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
    headerTable.innerHTML='';
    let listKey=Object.keys(array[0]);
    listKey=listKey.map((element) => "<th data-checked='1'id='"+element+"'>"+element+"<span class='tooltiptext'>Click to sort</span></th>");
    let listKeyStr=listKey.join('');
    console.log("<tr>" + listKeyStr+ "</tr>");
    
    headerTable.innerHTML= "<tr>" + listKeyStr+ "</tr>";
}
function calculateTotal(array){
    let totalActua= array.reduce(function(pre,cur){
        return pre + parseInt(cur.actualPrice)*parseInt(cur.stockAvailable);
    },0);
    let totalaDiscount= array.reduce(function(pre,cur){
        return pre + parseInt(cur.discountPrice)*parseInt(cur.stockAvailable);
    },0);

    return "<tr>"
             +"<td colspan='2'>Tổng giá trị bằng(Price*Stock):</td>"
             +"<td>"+totalActua.toString()+"</td>"
             +"<td>"+totalaDiscount.toString()+"</td>"
             +"<td></td>"
             +"</tr>";

}
function renderBodyTable(array){
    let bodyTable=document.querySelector('tbody');
    bodyTable.innerHTML='';
    rowArray=array.map(function(elementRow){
        let RowArr=Object.values(elementRow);
        let RowArrStr=RowArr.map((element) => "<td>"+element+"</td>");
        return "<tr>" + RowArrStr.join('')+ "</tr>"
    });
    bodyTable.innerHTML=rowArray.join('')+calculateTotal(array);
   
}
function sortnumber(checked,colum){
    if(checked){
        var newproductList=productList.sort(function(a,b){
          return parseInt(a[colum])-parseInt(b[colum])
        });
        renderBodyTable(newproductList);
        return '0';
    } else {
        var newproductList=productList.sort(function(a,b){
            return parseInt(b[colum])-parseInt(a[colum])
          });
          renderBodyTable(newproductList);
          return '1';
    }
    
}
function sortLeter(checked,colum){
    if(checked){
        let newproductList=productList.sort(function(a,b){
            let nameA = a[colum].toUpperCase();
            let nameB = b[colum].toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        renderBodyTable(newproductList);
        return '0';
    } else {
        let newproductList=productList.sort(function(a,b){
            let nameA = a[colum].toUpperCase();
            let nameB = b[colum].toUpperCase(); 
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          });
          renderBodyTable(newproductList);
          return '1';
    }
    
}
function sortList(){
    let checked=this.dataset.checked=='1';
    let colum=this.id;
    if(colum !== 'productName'){
        this.dataset.checked= sortnumber(checked,colum);
    } else{
        this.dataset.checked= sortLeter(checked,colum);
    }
    
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