/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, NativeModules, findNodeHandle} from 'react-native';

class NotificationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.myButton = React.createRef();
    }


  showNotification = async () => {
    await NativeModules.inappnotifications.showNotification(findNodeHandle(this.myButton.current), 'Hello World');
  };

  render() {
    return (
      <Button
        title="Click me"
        onPress={this.showNotification}
        ref={this.myButton} />
    );
  }
}

export default NotificationComponent;
