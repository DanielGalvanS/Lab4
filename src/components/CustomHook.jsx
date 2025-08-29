import React from 'react';
import { useFetch } from '../useFetch';
import { useCounter } from '../useCounter';
import { Card } from './Card';

export const CustomHook = () => {

    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    console.log(data);
    return (
    <>
        <h1>Información de Personaje</h1>
        <hr/>
        <h2>Polla</h2>
        <Card id={data.id} name={data.name} image={data.image}></Card>
        
        <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
    </>
    )
}
