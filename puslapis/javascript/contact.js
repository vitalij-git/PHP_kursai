JustValidate('.contact-form-class', {
    rules: {
        "Name": {
            "required": true,
            "maxLength": 100
        },
        "Email": {
            "required": true,
            "maxLength": 100,
            "email": true
        },
        "Message": {
            "required": true,
            "maxLength": 3000
        }
    },
});