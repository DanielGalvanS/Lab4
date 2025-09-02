import { useState } from 'react';
import { useFetch } from '../useFetch';
import './RickAndMortyCharacter.css';

export const RickAndMortyCharacter = () => {
    const [characterId, setCharacterId] = useState(1);
    const { data: character, isLoading, hasError } = useFetch(
        `https://rickandmortyapi.com/api/character/${characterId}`
    );

    const handlePrevious = () => {
        if (characterId > 1) {
            setCharacterId(characterId - 1);
        }
    };

    const handleNext = () => {
        setCharacterId(characterId + 1);
    };

    if (isLoading) {
        return (
            <div className="container">
                <div className="loading">Cargando...</div>
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="container">
                <div className="error">Error al cargar personaje</div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="card">
                <img src={character.image} alt={character.name} className="image" />
                
                <div className="info">
                    <h2>{character.name}</h2>
                    
                    <div className="details">
                        <div className="detail">
                            <span className={`status status-${character.status.toLowerCase()}`}>
                                {character.status}
                            </span>
                        </div>
                        <div className="detail">{character.species}</div>
                        <div className="detail">{character.gender}</div>
                        <div className="detail">{character.origin.name}</div>
                    </div>
                </div>
            </div>
            
            <div className="controls">
                <button onClick={handlePrevious} disabled={characterId <= 1}>
                    ←
                </button>
                <span className="id">{characterId}</span>
                <button onClick={handleNext}>
                    →
                </button>
            </div>
        </div>
    );
};
