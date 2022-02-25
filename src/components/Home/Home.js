import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  // event handler that navigates to 'URL'/pizza when clicked
  const onClick = evt => {
    evt.preventDefault();
    history.push('/pizza');
  }

  return (
    <>
      <h1>Jimothy's Pizza and Stuff</h1>
      <button id="order-pizza" onClick={onClick}>Order Pizza</button>
    </>
  )
}

export default Home;