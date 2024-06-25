import AppleHealthKit from 'react-native-health';
import { Platform } from 'react-native';

/* Permission options */
const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.HeartRate],
    write: [AppleHealthKit.Constants.Permissions.Steps],
  },
};

export const APIInit = () => {
    if (Platform.OS === 'ios') {
        // do something for ios
      } else if (Platform.OS === 'android') {
        // other thing for android
      }      
  AppleHealthKit.initHealthKit(permissions, (err, results) => {
    if (err) {
      console.log('error initializing Healthkit: ', err);
      return;
    }
    // Healthkit is initialized...
    // now safe to read and write Healthkit data...

    const options = {
      startDate: new Date(2020, 1, 1).toISOString(),
    };

    AppleHealthKit.getHeartRateSamples(options, (callbackError, results) => {
      if (callbackError) {
        console.log('[ERROR] Failed to fetch heart rate samples!', callbackError);
        return;
      }

      console.log('Heart Rate Samples:', results);
    });
  });
};