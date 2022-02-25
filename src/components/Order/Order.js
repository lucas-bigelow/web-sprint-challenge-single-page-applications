import './Order.css';

function Order(props) {
  const { name, size, pepperoni, onion, pepper, mushroom, special } = props.order;

  return (
    <div className='order'>
      <h3>{name}</h3>
      <p>{size}</p>
      <p>Toppings:</p>
      {pepperoni && <p>Pepperonis</p>}
      {onion && <p>Onions</p>}
      {pepper && <p>Bell Peppers</p>}
      {mushroom && <p>Mushrooms</p>}
      <p>Special Instructions: {special}</p>
    </div>
  )
}

export default Order;