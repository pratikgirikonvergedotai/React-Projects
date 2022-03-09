import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  // for getting params value . we used use params hook
  const {id} = useParams();
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  // runs every time encounters id value in route params
  useEffect(() => {
    setLoading(true)
    // fetching data from api for single cocktail and rendering loading component 
    async function getCocktail(){
      try{
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks){
          const {strDrinkid :name, strDrinkThumb : image , strAlcoholic : info, strCategory : category, strGlass : glass, strInstructions:instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = data.drinks[0]
          const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
            
          }
          setCocktail(newCocktail)          
        }
        else{
          setCocktail(null)
        }
      }
      catch(error){
        console.error(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  // if loading true render loading component
  if(loading){
    return <Loading />
  }

  // if no cocktails where present display no cocktail to display message
  if (!cocktail){
    return <h2 className='section-title'>no cocktail to display</h2>
  }

  const {name, image, category, info, glass, instructions, ingredients} = cocktail
  return (
    // render for single cocktail
    <section className='section cocktail-section'>
      <Link to="/" className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
