import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({onClose}) => {
    const { items } = useContext(BasketContext)
    const {updateBasketItem, deleteBasketItem} = useContext(BasketContext)

    const getTotalPrice = () => {
        return items.reduce((sum, {price, amount}) => sum + amount * price, 0)
    }

    const decreaseAmount = (id, amount) => {
        if(amount > 1){
            updateBasketItem({amount: amount - 1, id})
        }else{
            deleteBasketItem(id)
        }
    }
    const increaseAmount = (id, amount) => {
        updateBasketItem({amount: amount + 1, id})
    }

    return( 
    <Modal onClose={onClose}>
        <Content>
            {items.length ? 
            (<FixedHeightContainer>
            {items.map((item) => { 
            return (<BasketItem 
                key={item._id}
                increaseAmount={() => increaseAmount(item._id, item.amount)}
                decreaseAmount={() => decreaseAmount(item._id, item.amount)}
                title={item.title} 
                price={item.price} 
                amount={item.amount}
                />
            ); 
        })}
        </FixedHeightContainer>) : null}
        <TotalAmount price={getTotalPrice()} onClose={onClose} onOrder={() => {}} />
        
        </Content>
    </Modal>
    )
}

export default Basket;

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1rem 1.5rem ;
`
const FixedHeightContainer = styled.div`
    max-height: 228px;
    overflow-y: scroll;
    ::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: #f7f7f7;
}

&::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #a8a8a8;
}
`