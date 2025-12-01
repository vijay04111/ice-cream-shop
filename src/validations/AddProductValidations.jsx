export const AddProductValidations = {
    'name' : {
        required : {
            value : true,
            message : 'Name Must Be Required.'
        },
        minLength : {
            value : 2,
            message : 'Name Have More Than 2 Letters.'
        },
        maxLenght : {
            value : 15,
            message : 'Name Have Less Than 15 Letters.'
        }

    },
    'category' : {
        required : {
            value : true,
            message : 'category Must Be Required.'
        }
    },
    'flavours' : {
        required : {
            value : true,
            message : 'flavours Must Be Required.'
        }
    },
    'size' : {
        required : {
            value : true,
            message : 'Size Must Be Required.'
        }
    },
    'price' : {
        required : {
            value : true,
            message : 'price Must Be Required.'
        }
    },'available' : {
        required : {
            value : true,
            message : 'available Must Be Required.'
        }
    },
    

    

}