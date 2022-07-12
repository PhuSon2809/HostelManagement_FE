import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../loginForm';
import accountApi from '../../../apis/accountApi';

Login.propTypes = {
    
};

function Login(props) {

    const handleSubmit = async (values) => {

        try {
            console.log("values login: " ,values);
            const response = accountApi.login(values);
            console.log("response: ", response);
            // const action = login(values);
            // const resultAction = await dispatch(action);
            // unwrapResult(resultAction);

            // // close dialog
            // const {closeDialog} = props;
            // if(closeDialog) {
            //     closeDialog();
            // }

        } catch (error) {
            console.log('Failed to login: ', error);
        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;