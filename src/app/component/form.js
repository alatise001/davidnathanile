'use client'
import React from "react";

export default function Form() {

    const STATUS = {
        IDLE: "IDLE",
        SUBMITTED: "SUBMITTED",
        SUBMITTING: "SUBMITTING",
        COMPLETED: "COMPLETED",
    };

    const [formData, setFormData] = React.useState({
        email: ""
    });

    const [isStatus, setStatus] = React.useState(STATUS.IDLE);
    const [touched, setTouched] = React.useState({});
    const [finish, setFinished] = React.useState(false);
    const [loginError, setLoginError] = React.useState(null)

    const errors = getErrors();
    const isValid = Object.keys(errors).length === 0;

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus(STATUS.SUBMITTING);

        if (isValid) {
            // console.log("submit");
            setStatus(STATUS.COMPLETED);
            setFinished(prev => !prev)
            // console.log(formData);
        } else {
            setStatus(STATUS.SUBMITTED);
        }
    }

    function handleChg(e) {
        const { name, value, checked, type } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleBlur(e) {
        const { name } = e.target;
        setTouched((prevState) => {
            return {
                ...prevState,
                [name]: true,
            };
        });

    }

    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    }


    function getErrors(params) {
        const result = {};

        if (!formData.email) {
            result.email = "Email is required";
        } else if (!ValidateEmail(formData.email)) {
            result.email = "Email is not correct";
        }

        return result;
    }

    if (loginError) throw loginError

    return (
        <form className='contactform d-flex' action="" method="post">
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className='emailinput'
                onChange={handleChg}
                onBlur={handleBlur}
                value={formData.email}
            />
            <p className="error" role="alert">
                {(touched.email || isStatus === STATUS.SUBMITTED) && errors.email}
            </p>

            <button disabled={!isValid} onClick={handleSubmit} type="submit" value="SUBCRIBE" className='submitinput-btn' >
                <span></span>
                SUBCRIBE
                <span></span>
            </button>

        </form>
    )
}
