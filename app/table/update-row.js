$(document).ready(function(){
 
    $(document).on('click', '.update-button', function(){
        
        var id = $(this).attr("data-id");

        

        $.getJSON("http://localhost/PhoneSuppressionSystem/app/api/contact/read_one.php?id=" + id, function(data){
            var phone_number = data.phone_number;
            var f_name = data.f_name;
            var l_name = data.l_name;
            var number_type = data.number_type;

            var edit_entry_html="";
            
            edit_entry_html+="<div id='go-back' class='btn btn-primary pull-right m-b-15px go-back-button'>";
                edit_entry_html+="<span class='glyphicon glyphicon-list'></span> Go Back";
            edit_entry_html+="</div>";

            edit_entry_html+="<form id='edit-entry-form' action='#' method='post' border='0'>";
                edit_entry_html+="<table class='table table-hover table-responsive table-bordered'>";
            
                    edit_entry_html+="<tr>";
                        edit_entry_html+="<td>Phone Number</td>";
                        edit_entry_html+="<td><input value=\""+phone_number+"\" type='text' min='10' name='phone_number' class='form-control' required /></td>";
                    edit_entry_html+="</tr>";
            
                    edit_entry_html+="<tr>";
                        edit_entry_html+="<td>First Name</td>";
                        edit_entry_html+="<td><input value=\""+f_name+"\" type='text' name='f_name' class='form-control' required /></td>";
                    edit_entry_html+="</tr>";
            
                    edit_entry_html+="<tr>";
                        edit_entry_html+="<td>Last Name</td>";
                        edit_entry_html+="<td><input value=\""+l_name+"\"type='text' name='l_name' class='form-control' required /></td>";
                    edit_entry_html+="</tr>";
            
                    edit_entry_html+="<tr>";
                        edit_entry_html+="<td>Voicemail Type</td>";
                        edit_entry_html+="<td><input value=\""+number_type+"\"type='text' name='number_type' class='form-control' required /></td>";
                    edit_entry_html+="</tr>";
            

                    edit_entry_html+="<tr>";
                        edit_entry_html+="<td></td>";
                        edit_entry_html+="<td>";
                            edit_entry_html+="<button type='submit' class='btn btn-primary'>";
                                edit_entry_html+="<span class='glyphicon glyphicon-edit'></span> Update Entry";
                            edit_entry_html+="</button>";
                        edit_entry_html+="</td>";
                    edit_entry_html+="</tr>";
    
                edit_entry_html+="</table>";
            edit_entry_html+="</form>";

            $("#page-content").html(edit_entry_html);
    
            changePageTitle("Update Entry");
        });
    });
 

    $(document).on('submit', '#edit-entry-form', function(){
        var form_data=JSON.stringify($(this).serializeObject());

        $.ajax({
            url: "http://localhost/PhoneSuppressionSystem/app/api/contact/update.php",
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