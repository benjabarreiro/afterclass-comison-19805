import React from 'react'
import {useNameContext} from '../context/NamesContext'

export default function Item({name}) {
	const {Agregar} = useNameContext();
	return (
		<div>
			<h1>{name}</h1>
			<button onClick={() => Agregar(name)}>Seleccionar</button>
		</div>
	)
}
