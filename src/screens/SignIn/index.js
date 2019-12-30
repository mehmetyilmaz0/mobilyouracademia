import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";
import {inject, observer} from 'mobx-react';


import SigninForm from './SigninForm';

@inject('AuthStore')
@observer
export default class Signin extends Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <Body>
                        <Title>Signin</Title>
                    </Body>
                </Header>
                <SigninForm />
            </React.Fragment>
        );
    }
}
