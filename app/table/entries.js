function readAllEntries(data, keywords) {
    //$.getJSON("http://localhost/api/table/read.php", function(data){
        var read_data_html="";


        read_data_html+="<div id='create-row' class='btn btn-primary pull-right m-b-15px create-entry-button'>";
            read_data_html+="<span class='glyphicon glyphicon-plus'></span> Create Row";
        read_data_html+="</div>";

        // start table
        read_data_html+="<table class='table table-bordered table-hover'>";
        
            // creating our table heading
            read_data_html+="<tr>";
                read_data_html+="<th class='w-10-pct'>ID</th>";
                read_data_html+="<th class='w-15-pct'>Phone Number</th>";
                read_data_html+="<th class='w-15-pct'>First Name</th>";
                read_data_html+="<th class='w-15-pct'>Last Name</th>";
                read_data_html+="<th class='w-10-pct'>Type</th>";
                read_data_html+="<th class='w-25-pct text-align-center'>Action</th>";
            read_data_html+="</tr>";
            
            // rows here, need to know format of data
            //$.each(data.records, function(key, val) {
    
                // creating new table row per record
                read_data_html+="<tr>";
                    
                    // DATA HERE
                    read_data_html+="<td>";
                        read_data_html+="<span>test data lmao</span>";
                    read_data_html+="</td>";
                    read_data_html+="<td>";
                        read_data_html+="<span>test data lmao</span>";
                    read_data_html+="</td>";
                    read_data_html+="<td>";
                        read_data_html+="<span>test data lmao</span>";
                    read_data_html+="</td>";
                    read_data_html+="<td>";
                        read_data_html+="<span>test data lmao</span>";
                    read_data_html+="</td>";
                    read_data_html+="<td>";
                        read_data_html+="<span>test data lmao</span>";
                    read_data_html+="</td>";

                    // 'action' buttons
                    read_data_html+="<td>";
                        // read one button
                        read_data_html+="<button class='btn btn-primary m-r-10px read-one-button'>";
                            read_data_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
                        read_data_html+="</button>";
            
                        // edit button
                        read_data_html+="<button class='btn btn-info m-r-10px update-button'>";
                            read_data_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
                        read_data_html+="</button>";
            
                        // delete button
                        read_data_html+="<button class='btn btn-danger delete-entry-button'>";
                            read_data_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
                        read_data_html+="</button>";
                    read_data_html+="</td>";
            
                read_data_html+="</tr>";
            
            //});
        // end table
        read_data_html+="</table>";
        $("#page-content").html(read_data_html);
}