import { pokemon } from '@/components/pokemon';
import React from 'react';
import { Button, Text, View } from 'react-native';

async function fetchHello() {
  const response = await fetch('/hello');
  const data = await response.json();
  alert('Hello ' + data.hello);
}

export default function Index() {
  return (
    <View>
      {/* <Suspense fallback={<Text>Loading...</Text>}>{renderAlert()}</Suspense> */}
      <React.Suspense fallback={<Text>Loading...</Text>}>
        {pokemon()}
      </React.Suspense>
      <Button
        onPress={() => {
          fetchHello();
        }}
        title="Fetch hello"
      />
    </View>
  );
}
