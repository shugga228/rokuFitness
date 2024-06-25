import AppleHealthKit from 'react-native-health';
import { Platform } from 'react-native';
import {
    initialize,
    requestPermission,
    readRecords,
    readRecord,
  } from 'react-native-health-connect';
  

/* Permission options */
const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.HeartRate],
    write: [AppleHealthKit.Constants.Permissions.Steps],
  },
};

export const APIInit = async () => {
    if (Platform.OS === 'ios') {
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
      } else if (Platform.OS === 'android') {
        await initialize();
        const grantedPermissions = await requestPermission([
            { accessType: 'read', recordType: 'ActiveCaloriesBurned' },
            { accessType: 'read', recordType: 'Weight' },
            { accessType: 'read', recordType: 'Height' },
          ]);        
      }      
};
export const Calories = async () => {
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    if (Platform.OS === "android") {
        const isInitialized = await initialize();
        if (isInitialized) {
            const result = await readRecords('ActiveCaloriesBurned', {
                timeRangeFilter: {
                operator: 'between',
                startTime: startTime.toISOString(),
                endTime: new Date.toISOString(),
                },
            });
            return result;        
        }
    }
}
export const Weight = async () => {
    if (Platform.OS === "android") {
        const isInitialized = await initialize();
        if (isInitialized) {
            const result = await readRecord('Weight');
            return result;        
        }
    }
}
export const Height = async () => {
    if (Platform.OS === "android") {
        const isInitialized = await initialize();
        if (isInitialized) {
            const result = await readRecord('Height');
            return result;        
        }
    }
}