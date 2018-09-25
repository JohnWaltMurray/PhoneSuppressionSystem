$(document).ready(function(){

    $(document).on('click', 'read-one-button', function(){
        var id = $(this).attr('data-id');
        $.getJSON("http://localhost/api/product/read_one.php?id=" + id, function(data){
            var read_one_html="";
 
            // when clicked, it will show the product's list
            read_one_html+="<div id='read-products' class='btn btn-primary pull-right m-b-15px go-back-button'>";
                read_one_html+="<span class='glyphicon glyphicon-list'></span> Go Back";
            read_one_html+="</div>";

            read_one_html+="<table class='table table-bordered table-hover'>";
 
            // product name
            read_one_html+="<tr>";
                read_one_html+="<td class='w-30-pct'>ID</td>";
                read_one_html+="<td class='w-70-pct'>" + data.id + "</td>";
            read_one_html+="</tr>";
        
            // product price
            read_one_html+="<tr>";
                read_one_html+="<td>Phone Number</td>";
                read_one_html+="<td>" + data.number + "</td>";
            read_one_html+="</tr>";
        
            // product description
            read_one_html+="<tr>";
                read_one_html+="<td>First Name</td>";
                read_one_html+="<td>" + data.fname + "</td>";
            read_one_html+="</tr>";
        
            // product category name
            read_one_html+="<tr>";
                read_one_html+="<td>Last Name</td>";
                read_one_html+="<td>" + data.lname + "</td>";
            read_one_html+="</tr>";

            read_one_html+="<tr>";
                read_one_html+="<td>Last Name</td>";
                read_one_html+="<td>" + data.vtype + "</td>";
            read_one_html+="</tr>";
        
        read_one_html+="</table>";

        $("#page-content").html(read_one_html);
 
        changePageTitle("Viewing Single Entry");
        });
    });
});