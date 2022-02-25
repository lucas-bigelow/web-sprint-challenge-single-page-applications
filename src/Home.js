import { Link, useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  // handle go to order page
  const handleOrder = evt => {
    console.log('working');
  }

  return (
    <div className='home'>
      <h1>Jimothy's Pizza</h1>
      <Link to='/pizza' id='order-pizza'>
        Order Pizza
      </Link>
    </div>
  )
}

export default Home;