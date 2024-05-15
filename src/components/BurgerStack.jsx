const BurgerStack = ({ stack, removeFromStack }) => {
    return (
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ color: ingredient.color }}>
            {ingredient.name}{' '}
            <button onClick={() => removeFromStack(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;