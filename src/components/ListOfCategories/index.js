import React, {useEffect, useState} from 'react';
import {Category} from '../Category';
import {List, Item} from './styles'

const useCategoriesData = () => {
  const [categoriesState, setCategoriesState] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch('https://petgram-server-24iykciv5.now.sh/categories')
      .then(response => response.json())
      .then(response => {
        setCategoriesState(response)
        setLoading(false)
      })
  },[])

  useEffect(()=>{
    const onScroll = ()=>{
      const newShowFixed = window.scrollY > 250;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll',onScroll)
    return ()=> document.removeEventListener('scroll', onScroll) // Con esto limpiamos los efectos
  },[showFixed])

  return { categoriesState, showFixed, loading}
}

const ListOfCategories = () => {
  const {categoriesState, showFixed, loading} = useCategoriesData()

  const renderList = (fixed) => {
    return(
      <List fixed={fixed}>
        {
          loading ? <Item key='loading'><Category/></Item>:
          categoriesState.map((category, index) => <Item key={index.toString()}><Category {...category}/></Item>)
        }
      </List>
    )
  }

  return(
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export default ListOfCategories
