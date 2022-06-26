import React, { useState } from 'react'
import { omit } from 'lodash'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const useForm = (callback) => {

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        switch (name) {
            case 'fullName':
                if (value.length <= 4) {
                    setErrors({
                        ...errors,
                        fullName: 'Name atleast have 5 letters'
                    })
                } else {
                    let newObject = omit(errors, "fullName");
                    setErrors(newObject);
                }
                break;
            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {
                    let newObject = omit(errors, "email");
                    setErrors(newObject);
                }
                break;
            case 'phone':
                if (
                    !new RegExp(/^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        phone: 'Phone must start with 03, 05, 07, 08, 09 and have 10 number'
                    })
                } else {
                    let newObject = omit(errors, "phone");
                    setErrors(newObject);
                }
                break;
            default:
                break;
        }
    }

    // const handleAddClass = () => {
    //     var element = document.getElementById("input");
    //     element.classList.add("input-not-empty");
    // }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            values: [{}]
        });
    };

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let value = event.target.value;

        validate(event, name, value)

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();
            // alert("Submit successfully!");
            alertify.success("Booking successful!");
            setValues("");
            handleReset();
        } else {
            // alert("There is Error!");
            alertify.error("Please! Check your input again!");
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleReset
    }
}

export default useForm;