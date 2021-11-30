import notifee, {
  AndroidImportance,
  AndroidVisibility,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {useEffect} from 'react';

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

  SetupReminderNotification: (
    channelIdentifier: string,
    shouldShowReminder: boolean,
  ) => {
    useEffect(() => {
      (async () => {
        await new Promise(f => setTimeout(f, 1000 * 10)); //! Make a 10s delay because of permission asking.
        if (!shouldShowReminder) {
          await notifee.cancelNotification('localReminder');
          return;
        }
        const fireAt = new Date(Date.now());
        fireAt.setDate(fireAt.getDate() + 1);
        fireAt.setHours(20);
        fireAt.setMinutes(0);

        //! Create a time-based trigger that will trigger the notification.
        const trigger: TimestampTrigger = {
          type: TriggerType.TIMESTAMP,
          timestamp: fireAt.getTime(),
          repeatFrequency: RepeatFrequency.DAILY,
        };

        //! Create a trigger notification
        try {
          await notifee.createTriggerNotification(
            {
              id: 'localReminder',
              title: 'Ćao,',
              body: 'Da li si za vežbe danas?',
              android: {
                channelId: channelIdentifier,
              },
            },
            trigger,
          );
        } catch (exception) {
          console.log('Scheduled notification created after time.', exception);
        }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  },
};
