import {useEffect} from 'react';
import notifee, {EventType} from '@notifee/react-native';

export const useNotificationListenerSetup = () => {
  useEffect(() => {
    // notifee.setNotificationCategories(categories);
    //! Listener that handles actions when the app is active/ running on screen.
    //! If you need to handle notification when the app is closed/minimized, then setup the onBackgroundEvent listener.
    const unsubscribeForegroundListener = notifee.onForegroundEvent(
      async ({type, detail}) => {
        const {notification, pressAction} = detail;
        const pressActionLabel = pressAction
          ? `, press action: ${pressAction?.id}`
          : '';
        console.log(
          `[onForegroundEvent] notification id: ${notification?.id},  event type: ${EventType[type]}${pressActionLabel}`,
        );

        switch (type) {
          case EventType.DISMISSED:
            console.log(
              '[onForegroundEvent] User dismissed notification',
              notification,
            );
            break;
          case EventType.PRESS:
            console.log(
              '[onForegroundEvent] User pressed notification',
              notification,
            );
            break;
          case EventType.ACTION_PRESS:
            console.log(
              '[onForegroundEvent] User pressed an action',
              notification,
              detail.pressAction,
            );

            if (detail.pressAction?.id === 'first_action_reply') {
              // perform any server calls here and cancel notification
              if (notification?.id) {
                await notifee.cancelDisplayedNotification(notification.id);
              }
            }
            break;
          case EventType.TRIGGER_NOTIFICATION_CREATED:
            //!
            console.log(
              '[onForegroundEvent] Scheduled notification created.',
              notification,
            );
            break;
          case EventType.DELIVERED:
            console.log(
              '[onForegroundEvent] Scheduled notification delivered.',
              notification,
            );
            break;
        }
      },
    );

    return () => {
      //! Add here other listeners for cleanup.
      unsubscribeForegroundListener();
    };
  }, []);
};

// const categories: IOSNotificationCategory[] = [
//   {
//     id: 'quickActions',
//     actions: [
//       {
//         id: 'first_action_reply',
//         title: 'Reply, Open & Cancel',
//         input: true,
//       },
//       {
//         id: 'second_action_nothing',
//         title: 'Nothing',
//       },
//     ],
//   },
// ];
// Create a channel
