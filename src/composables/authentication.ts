import { Router } from 'vue-router';
import { Login } from "@/interfaces/Login";
import sessionManager from "./session/sessionManager";
import { EnumSession } from "./session/model/EnumSession";
import { fireBaseService } from "@/api/fireBaseService";

const USER_LOGIN = 'KACPER';
const USER_PASSWORD = '1234';

/* eslint-disable */

export function logInByEmail(loginData: Login, router: Router) {

    fireBaseService.logInByEmail(loginData);

    //if (loginData.login === USER_LOGIN && loginData.password === USER_PASSWORD) {
    // if (true) {
    //     setLogged(true);
    //     router.push('/dashboard');

    //     return true;
    // } else {
    //     return false;
    // }
}

export function checkIsLogged(router: Router) {

    localStorage.getItem('isLogged') === 'true' ?
        router.push('/home') :
        router.push('/login');
}

export function logout(router: Router) {

    sessionManager.clear();
    router.push('/login');
}

/**
 * Sets the logged-in status in the session.
 *
 * @param {boolean} isLogged - The logged-in status to set. Defaults to `false`.
 */
function setLogged(isLogged: boolean = false) {
    sessionManager.set(EnumSession.LOGGED, isLogged);
}