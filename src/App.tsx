import React from 'react';
import { List } from './components/list/list';
import getRandomUsers from './lib/randomuser';

function App() {
  return <List getUsers={getRandomUsers} />;
}

export default App;
