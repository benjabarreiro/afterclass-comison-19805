import React from 'react'
import Item from './Item'

export default function ItemList({name}) {
	return (
		name.map(name => <Item name={name} />)
	)
}
