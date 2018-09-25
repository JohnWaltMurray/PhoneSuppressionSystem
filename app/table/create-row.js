$(document).ready(function(){
 
    // show html form when 'create product' button was clicked
    $(document).on('click', '.create-product-button', function(){
        var create_entry_html="";
 
        // 'read products' button to show list of products
        create_entry_html+="<div id='go-back' class='btn btn-primary pull-right m-b-15px go-back-button'>";
            create_entry_html+="<span class='glyphicon glyphicon-list'></span> Go Back";
        create_entry_html+="</div>";

        create_entry_html+="<form id='create-product-form' action='#' method='post' border='0'>";
            create_entry_html+="<table class='table table-hover table-responsive table-bordered'>";
        
                // name field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>Phone Number</td>";
                    create_entry_html+="<td><input type='number' min='10' name='phone' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // price field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>First Name</td>";
                    create_entry_html+="<td><input type='text' name='fname' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // description field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>Last Name</td>";
                    create_entry_html+="<td><input type='text' name='lname' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // categories 'select' field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>Voicemail Type</td>";
                    create_entry_html+="<td><input type='text' name='vtype' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // button to submit form
                create_entry_html+="<tr>";
                    create_entry_html+="<td></td>";
                    create_entry_html+="<td>";
                        create_entry_html+="<button type='submit' class='btn btn-primary'>";
                            create_entry_html+="<span class='glyphicon glyphicon-plus'></span> Create Entry";
                        create_entry_html+="</button>";
                    create_entry_html+="</td>";
                create_entry_html+="</tr>";
 
            create_entry_html+="</table>";
        create_entry_html+="</form>";

        $("#page-content").html(create_entry_html);
 
        changePageTitle("New Entry");
    });
 
    // 'create product form' handle will be here
    $(document).on('submit', '#create-product-form', function(){
        var form_data=JSON.stringify($(this).serializeObject());

        $.ajax({
            url: "http://localhost/api/product/create.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
                showTable();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    });

    $(document).on('click', '.go-back-button', function(){
        showTable();
    })
});