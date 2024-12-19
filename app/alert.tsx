'use server';

import 'server-only';
import { Text } from 'react-native';

export default async function renderAlert() {
  const response = await fetch('/hello');
  console.log('response', response);
  const data = await response.json();

  return <Text>{data}</Text>;
}
