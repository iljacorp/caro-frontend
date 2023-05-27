import Balance from './Balance';
import SubscribedBot from './SubscribedBot';

function Overview() {
  return (
    <div className='w-1/2 mt-10'>
      <Balance />
      <SubscribedBot />
    </div>
  );
}

export default Overview;
