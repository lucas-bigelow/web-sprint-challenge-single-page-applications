import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  // handle go to order page
  const handleOrder = evt => {
    evt.preventDefault();
    history.push('/pizza');
  }

  return (
    <>
      <h1>Jimothy's Pizza</h1>
      <button onClick={handleOrder}>Order some Pizza</button>
    </>
  )
}

export default Home;