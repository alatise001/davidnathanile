'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const inview = {
    start: {
        opacity: 0,

        y: 2 % 2 === 0 ? 50 : -50
    },

    exit: {
        opacity: 0,
        y: 1 % 2 === 0 ? 50 : -50,
        transition: {
            duration: 1.5
        }

    },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5
        }
    }
}

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
        <AnimatePresence>

            <motion.form
                initial="start"
                whileInView="view"
                exit="exit"
                key='1'

                variants={inview}

                viewport={{ once: true }}

                className='contactform d-flex' action="" method="post">
                <motion.input
                    initial="start"
                    whileInView="view"
                    exit="exit"
                    variants={inview}
                    key='2'

                    viewport={{ once: true }}


                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className='emailinput'
                    onChange={handleChg}
                    onBlur={handleBlur}
                    value={formData.email}
                />
                <motion.p
                    initial="start"
                    whileInView="view"
                    exit="exit"
                    key='3'


                    variants={inview}

                    viewport={{ once: true }}

                    className="error" role="alert">
                    {(touched.email || isStatus === STATUS.SUBMITTED) && errors.email}
                </motion.p>

                <motion.button
                    initial="start"
                    whileInView="view"
                    exit="exit"
                    key='4'


                    variants={inview}

                    viewport={{ once: true }}

                    disabled={!isValid} onClick={handleSubmit} type="submit" value="SUBCRIBE" className='submitinput-btn' >
                    <span></span>
                    SUBCRIBE
                    <span></span>
                </motion.button>

            </motion.form>
        </AnimatePresence>

    )
}
