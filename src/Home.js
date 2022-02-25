import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  // handle go to order page
  const handleOrder = evt => {
    evt.preventDefault();
    history.push('/pizza');
    console.log(history.location.pathname);
    return('/pizza');
  }

  console.log(history.location);

  return (
    <div className='home'>
      <h1>Jimothy's Pizza</h1>
      <button onClick={handleOrder} id='order-pizza'>Order Pizza</button>
    </div>
  )
}

export default Home;