import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';

import { updateMe } from '../../Lib/redux/actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      icon_eye: 'eye-off',
      is_password: true
    };
  }

  handleChange(text, name) {
    const { fields } = this.state;
    const newValue = { ...fields, [name]: text }
    this.setState({fields: newValue});
  }

  _changeIcon() {
    this.setState(prevState => ({
      icon_eye: prevState.icon_eye === 'eye' ? 'eye-off' : 'eye',
      is_password: !prevState.is_password
    }))
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.onLoginButton(this.state.fields);
  }

  render() {
    return (
      <Container style={{justifyContent: 'center'}}>
        <Content>
          <Form>
            <Item >
              <Input
                onChangeText={(text) => this.handleChange(text, 'email')}
                placeholder="Email"
              />
            </Item>
            <Item >
              <Input
                onChangeText={(text) => this.handleChange(text, 'password')}
                secureTextEntry={this.state.is_password}
                placeholder="Password"
              />
            </Item>
          </Form>
            
          <Button
            onPress={(e) => this.onSubmitForm(e)}
            primary style={{justifyContent:"center"}}><Text> Sign In </Text></Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onLoginButton: () => dispatch(updateMe({me: 'Ta Hieu'}))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);