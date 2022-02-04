import {createContext, useState, useContext} from 'react';

const NameContext = createContext(null)

export const useNameContext = () => useContext(NameContext)

export const NameContextProvider = ({children}) => {
	const [character, setCharacter] = useState([])

	
	function Agregar(element) {
		if(evitarDuplicados(element)) {
			const cambiarCantidad = [...character]
			cambiarCantidad.forEach(x => {
				if(x.nombre === element ) {
					x.quantity += 1
				}
			})
			return setCharacter(cambiarCantidad)
		}
		return setCharacter([...character, {nombre: element, quantity: 1}])
	}

	const evitarDuplicados = (parametro) => {
		const findCharacter = character.find((i) => {
			return i.nombre === parametro
		})
		return findCharacter
	}

	const eliminarUno = (item) => {
		const eliminarItem = [...character]
		const itemEliminado = eliminarItem.filter(x => x.nombre !== item)
		console.log('se ejecuta')
		return setCharacter(itemEliminado)
	}

	const borraTodos = () => setCharacter([])
	
	return (
		<NameContext.Provider value={{Agregar, character, eliminarUno, borraTodos}}>
			{children}
		</NameContext.Provider>
	)
}