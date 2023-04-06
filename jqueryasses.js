$(document).ready(function(){
    $('#reg').validate({
        rules:{
            pswd:{
                required:true,
                pattern:/^[a-zA-Z][a-zA-Z0-9(_)]{7,16}$/
            },
            email:{
                required:true,
                pattern:/^[a-z0-9]+[@]+cgvakindia.com$/
            },
            number:{
                required:true,
                pattern:/[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}/
            }
        },
        messages:{
            pswd:{
                required:'This field is required',
                pattern:'Pattern Unmatched'
            },
            email:{
                required:'This is a required field',
                pattern:'Pattern Unmatched'
            },
            number:{
                required:'This is a required field',
                pattern:'Pattern unmatched'
            }
        }

    })
})
