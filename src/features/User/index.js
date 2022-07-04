import React from 'react';
import logo from '../../logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';

function SignIn(props) {
    const { signOut } = props;
    return (
        <View className='App'>
            <Card>
                <Image src={logo} className='App-logo' alt='logo' />
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            {/* TODO:  find a way to move logout() to nav menu */}
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(SignIn);
