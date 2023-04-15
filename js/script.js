"use strict";

const login = {
    loginName: 'Serhii',
    password: 22081967
}

document.querySelector('.btn').addEventListener('click', () => {
    const loginUser = document.getElementById('login'),
        valueLogin = loginUser.value;
    const passwordUser = +document.getElementById('password').value;

    if (valueLogin === login.loginName && passwordUser === +login.password) {
        console.log('Uraaaaaaaaaaaaa');
    }
});