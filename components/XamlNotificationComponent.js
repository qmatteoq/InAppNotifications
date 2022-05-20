import React, {useState} from 'react';
import { TextBox, MenuFlyout, MenuFlyoutItem } from 'react-native-xaml';
import { View, Button } from 'react-native';

const XamlNotificationComponent = () => {
    [isOpen, setIsOpen] = useState(false);

    return (
    <View>
      <TextBox text="this is a textbox with a menuFlyout">
        <MenuFlyout isOpen={isOpen} onClosed={() => { setIsOpen(false); }}>
          <MenuFlyoutItem text="option 1" onClick={() => { alert('clicked 1'); }} />
            <MenuFlyoutItem text="option 2" onClick={() => { alert("clicked 2");}}/>
        </MenuFlyout>
        </TextBox>
        <Button title="Show flyout" onPress={(a) => { setIsOpen(true); }} />

      </View>
    );
    
}

export default XamlNotificationComponent;
