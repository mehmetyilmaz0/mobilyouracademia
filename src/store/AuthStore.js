import {observable} from 'mobx';


class AuthStore {
    @observable username = "myilmaz";
}

export default new AuthStore();
