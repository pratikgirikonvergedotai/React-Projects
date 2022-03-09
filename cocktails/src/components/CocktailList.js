import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()
  // if loading true we render loading component
  if (loading){
    return <Loading />
  }


  // if no cocktail wher found for user search term. we show no cocktail matched your search message
  if (cocktails.length < 1){
    return (
      <h2 className='section-title'>
        no cocktail matched your search 
      </h2>
    )
  }
  // rendering over array to display all cocktail
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>

    </section>
  )
}

export default CocktailList
