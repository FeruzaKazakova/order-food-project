import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState('')

    const getMeals = async () => {
    try{
        setLoading(true)

        const response = await fetchApi('foods')
        setMeals(response.data)
    } catch (error){
        setError('Failed to load meals')
    }
    }

    useEffect(() => {
        getMeals()
    }, [])

    return (
        <Card>
        {meals.map((meal) => {
            return <MealItem meal={meal} key={meal._id}/>
        })}
        </Card>
    )
}

export default Meals;

const Card = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    width: 75%;
    margin: 60px auto;
    padding: 40px;
`