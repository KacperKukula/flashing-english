const LOGIN = 'KACPER';
const PASSWORD = '1234';

import { Login } from "@/interfaces/Login";
import { useRouter } from "vue-router";

const USER_LOGIN = 'KACPER';
const USER_PASSWORD = '1234';

const router = useRouter();

export function loginAction(loginData: Login) {

    if (loginData.login === USER_LOGIN && loginData.password === USER_PASSWORD) {
        console.log(router);
        router.push('/home');
        return true;
    } else {
        return false;
    }
}

export function checkIsLogged() {
    localStorage.getItem('isLogged') === 'true' ?
        router.push('/home') :
        router.push('/login');
}