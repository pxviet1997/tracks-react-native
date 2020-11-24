import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (isTracking, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, callback);
      } catch (err) {
        setErr(err);
      }
    };

    if (isTracking) {
      startWatching();
    }
    else {
      if (subscriber) {
        subscriber.remove();
      }
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };

  }, [isTracking, callback]);

  return [err];

};