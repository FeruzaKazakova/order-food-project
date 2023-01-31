import { useState } from 'react';
import styled from 'styled-components';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import { BasketProvider } from './store/BasketContext';

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false)

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState)
  }

  return (
    <div>
      <BasketProvider>
      <Header onShowBasket = {showBasketHandler}/> 
      <Content>
      <Summary />
      <Meals />
      {isBasketVisible && <Basket onClose={showBasketHandler}/>}
      </Content>
      </BasketProvider>
    </div>
  );
}

export default App;

const Content = styled.div`
margin-top:101px
`