import notifee, {
  AndroidImportance,
  AndroidVisibility,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {useEffect} from 'react';

interface Notification {
  title: string;
  body: string;
}

//! Extendible Object that is responsible for local notification delivery.
export const useNotificationSetup = {
  CreateAndroidChannel: (channelIdentifier: string) => {
    //! Create a channel for android. It's a must for delivering the notification.
    useEffect(() => {
      (async () => {
        await notifee.deleteChannel(channelIdentifier);
        await notifee.createChannel({
          id: channelIdentifier,
          name: 'Psihofon',
          importance: AndroidImportance.DEFAULT,
          visibility: AndroidVisibility.PRIVATE,
          vibration: true,
          sound: 'default',
        });
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  },

  SetupReminderNotification: async (
    onSuccess: () => void,
    channelIdentifier: string,
  ) => {
    const notifications: Notification[] = [
      {title: 'Ćao,', body: 'Da li si za vežbe?'},
      {title: 'Hej tamo,', body: 'Da li imaš volje da se družimo?'},
      {title: 'Ćaos,', body: 'Nemoj zaboraviti na svoje vežbe.'},
    ];
    let errorHappened = false;

    for (let i = 0; i < 3; i++) {
      const fireAt = new Date();
      fireAt.setDate(fireAt.getDate() + (i + 1));
      fireAt.setHours(20);
      fireAt.setMinutes(0);

      //! Create a time-based trigger that will trigger the notification.
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: fireAt.getTime(),
      };

      //! Create a trigger notification
      try {
        await notifee.createTriggerNotification(
          {
            id: `localReminder${i}`,
            title: notifications[i].title,
            body: notifications[i].body,

            android: {
              channelId: channelIdentifier,
              pressAction: {
                launchActivity: 'default',
                id: 'default',
              },
            },
          },
          trigger,
        );
      } catch (exception) {
        console.log('Scheduled notification created after time.', exception);
        errorHappened = true;
      }
    }

    //! If the setup was successful, we dont have to setup the reminders anymore.
    if (!errorHappened) {
      onSuccess();
    }
  },
};
