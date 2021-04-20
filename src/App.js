import Container from './components/Container';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

import styles from './App.module.scss';

const App = () => (
  <>
    <Container>
      <div className={styles.App}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
    </Container>
    <TransactionHistory items={transactions} />
  </>
);

export default App;