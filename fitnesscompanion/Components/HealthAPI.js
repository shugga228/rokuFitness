import AppleHealthKit, {
    HealthValue,
    HealthKitPermissions,
  } from 'react-native-health'
  
  /* Permission options */
  const permissions = {
    permissions: {
      read: [AppleHealthKit.Constants.Permissions.HeartRate],
      write: [AppleHealthKit.Constants.Permissions.Steps],
    },
  }
  
export const APIInit = () => {
    AppleHealthKit.initHealthKit(permissions, (err) => {
          if (err) {
            console.log('error initializing Healthkit: ', err)
            return
          }
          // Healthkit is initialized...
          // now safe to read and write Healthkit data...
        },
      )
};