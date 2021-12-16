import React from 'react'
import {Anchor, Image} from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = (props) =>{
  const {cover = DEFAULT_IMAGE, path, emoji='?'} = props
  return (
    <Anchor href={path}>
      <Image src={cover} alt="Imagen por defecto"/>
      {emoji}
    </Anchor>
  )

}

