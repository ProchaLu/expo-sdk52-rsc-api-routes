import { Pokemon } from '@/components/pokemon';
import React, { Suspense } from 'react';
import { Button, Text, View } from 'react-native';
import { renderAlert } from './alert';

async function fetchHello() {
  const response = await fetch('/hello');
  console.log('response', response);
  const data = await response.json();
  console.log('data', data);
  alert('Hello ' + data.hello);
}

export default function Index() {
  return (
    <View>
      {/* <Suspense fallback={<Text>Loading...</Text>}>{renderAlert()}</Suspense> */}
      <React.Suspense fallback={<Text>Loading...</Text>}>
        {Pokemon()}
      </React.Suspense>
      <Button
        onPress={() => {
          renderAlert(), console.log('fetch button click');
        }}
        title="Fetch hello"
      />
    </View>
  );
}
