

var userData=sessionStorage.getItem('submitData');
//localStorage.removeItem('submitData');
var new_data= JSON.parse(userData);//convert string to JS object
console.log(new_data); //display JS object in console
var array_data=userData.split(); //concert string to array


$(document).ready(function(){

    // $("#btn_convert").on({ click:generate_table });

build_table(new_data);

});

function build_table(data){

	var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].Address}</td>
							<td>${data[i].Country}</td>
							<td>${data[i].Email}</td>
                            <td>${data[i].Gender}</td>
							<td>${data[i].Name}</td>
							<td>${data[i].Password}</td>
							<td>${data[i].ZipCode}</td>
							<td>${data[i].Preferences}</td>
							<td>${data[i].PhoneNumber}</td>

					  </tr>`
			table.innerHTML += row


		}







}
























// function generate_table(array_data){

//     //create HTML Table
// var table=document.createElement("TABLE");
// table.border="1";

// //Get count of columns from new_data array
//  var columnCount=array_data[0].length;

//  //Add Header row
// var row=table.insertRow(-1); //Row will be added at last position
// for (var i=0;i<columnCount;i++){
//     var headerCell=document.createElement("TH"); //TH element is created using createElement method when loop is executed
//     headerCell.innerHTML=array_data[0][i];
//     row.appendChild(headerCell);

// }

// //add the data rows
// for (var i=1;i<array_data.length;i++){
//     row=table.insertRow(-1); //insert row at last position
//         for (var j=0;j<columnCount;j++){
//             var cell=row.insertCell(-1);
//             cell.innerHTML=array_data[i][j];

//         }

// }


//     var form_table=$("table1");
//     var node_table=document.createTextNode("");
//     table.appendChild(node_table);
//     form_table.appendChild(table);







// }










// window.onload= function(){

//     temp=$("#data").html("new_data");

// }



//     if (new_data.length>0){

//         var temp="";
    
//         new_data.forEach((b) => {
//             temp+="<tr>";
//             temp+="<td>"+b.Address+"</td>";
//             temp+="<td>"+b.Country+"</td>";
//             temp+="<td>"+b.Email+"</td>";
//             temp+="<td>"+b.Gender+"</td>";
//             temp+="<td>"+b.Name+"</td>";
//             temp+="<td>"+b.Password+"</td>";
//             temp+="<td>"+b.PhoneNumber+"</td>";
//             temp+="<td>"+b.Preferences+"</td>";
//             temp+="<td>"+b.ZipCode+"</td></tr>";
    
            
//         });
        
    
//     }




// //create table and fetch data from JSON object

// $( document ).ready(function(){
//     $("json").html(new_data);
//     $("#btn_convert").on({ click:Json_table });




// });

// function Json_table(new_data){
//     var no_of_rows= new_data.length;
//     var k=0;
//     var table_body='<table border="1" id="eg"><thead><tr><th>Particulars</th><th>Details</th></tr><tbody>';

//     for (var j in new_data){

//         for (var i=0; i<no_of_rows;i++){
//             table_body+='<tr>';


//             table_body+='<td>';
//             table_body+=table_body.Name[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.Address[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.ZipCode[k];
//             table_body+='</td>';

            
//             table_body+='<td>';
//             table_body+=table_body.Country[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.Gender[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.Preferences[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.Phone[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.Email[k];
//             table_body+='</td>';

//             table_body+='<td>';
//             table_body+=table_body.Password[k];
//             table_body+='</td>';



//             table_body+='</tr>';

//         }

//         k++;

//     }

//     table_body+="</tbody></table>";
//     $("table1").html(table_body);



// }
