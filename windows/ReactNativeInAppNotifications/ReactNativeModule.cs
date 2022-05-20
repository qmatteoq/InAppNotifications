using Microsoft.ReactNative;
using Microsoft.ReactNative.Managed;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace ReactNativeInAppNotifications
{
    [ReactModule("inappnotifications")]
    internal sealed class ReactNativeModule
    {

        private ReactContext _reactContext;

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }

        [ReactMethod("showNotification")]
        public void ShowNotification(int tag, string title)
        {
            _reactContext.Handle.UIDispatcher.Post(() =>
            {
                Flyout flyout = new Flyout
                {
                    Content = new TextBlock { Text = title },

                };

                var control = XamlUIService.FromContext(_reactContext.Handle).ElementFromReactTag(tag) as FrameworkElement;
                Button b = new Button();

                flyout.ShowAt(control);
            });
        }
    }
}
