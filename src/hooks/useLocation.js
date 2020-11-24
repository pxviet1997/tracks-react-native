import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (isTracking, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback);
      setSubscriber(sub);
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    if (isTracking) {
      startWatching();
    }
    else {
      subscriber.remove();
      setSubscriber(null); 76
    }

  }, [isTracking]);

  return [err];

};