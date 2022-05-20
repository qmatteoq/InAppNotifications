import React from 'react';
import { View} from 'react-native';
import { MenuFlyout, MenuFlyoutItem, Button } from 'react-native-xaml';

class XamlNotificationWithRefComponent extends React.Component {

    constructor(props) {
        super(props);
        this.myFlyout = React.createRef();
  }
  showNotification = () => {
      MenuFlyout.ShowAt(this.myFlyout, { point: { x: 120, y: 130}});
  };

  render() {
    return (
        <View>
            <MenuFlyout ref={this.myFlyout}>
                <MenuFlyoutItem text='option 1' />
                <MenuFlyoutItem text='option 2' />
            </MenuFlyout>
            <Button
                content="Click me"
                onClick={this.showNotification} />
        </View>
    );
  }
}

export default XamlNotificationWithRefComponent;
