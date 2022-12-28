const cart = [];

const handleCart = (state = cart, action) =>
{
  const product = action.payload;
  if(action.type === 'ADDITEM'){
    const exist = state.find((x)=> x.id === product.id)
    if(exist){
        return state.map((x)=> x.id === product.id ? {...x, qty: x.qty + 1} : x);
    }
    else {
        const product = action.payload;
        return [
            ...state,
            {
                ...product,
                qty:1
            }
        ]
    }
  }
  else if (action.type === 'DELITEM'){
    const exist1 = state.find((x)=> x.id === product.id)
    if(exist1.qty === 1) {
      return state.filter((x)=> x.id !== exist1.id)
    }
    else {
      return state.map((x)=> x.id === product.id ? {...x, qty: x.qty - 1} : x)
    }
  }

  return [...state];
}

export default handleCart;