import Button from '../common/Button';

function SubscribedBot() {
  return (
    <div>
      <h1>Your Bot</h1>
      <p>Bot content</p>
      <Button onClick={() => console.log('unsubscribe')}>Unsubscribe</Button>
    </div>
  );
}

export default SubscribedBot;
