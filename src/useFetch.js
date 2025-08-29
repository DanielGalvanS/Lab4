import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false, // ✅ Cambié de null a false
    });

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                console.log('🔄 Fetching:', url);
                
                // ✅ Uso función callback para evitar stale state
                setState((prev) => ({
                    ...prev,
                    isLoading: true,
                    hasError: false,
                }));

                const response = await fetch(url);
                console.log('📨 Status:', response.status);
                
                // ✅ Verifico si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                
                const result = await response.json();
                console.log('✅ Success:', result.name);
                
                setState({
                    data: result,
                    isLoading: false,
                    hasError: false,
                });
                
            } catch (error) {
                // ✅ AHORA SÍ manejo errores
                console.error('❌ Error:', error.message);
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true, // ✅ Actualizo hasError
                });
            }
        };

        fetchData();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};