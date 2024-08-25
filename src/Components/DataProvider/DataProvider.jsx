import React, { createContext, useContext, useState, useRef } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
    
    const DadosDasEquipes = [
        {
            nome: '',
            categoriaDaEquipe: '',
            numeroDeBaterias: 0,

            numeroDeTentativasPorEtapa: {
                Arrancada: 0,
                Classificatoria: 0,
                Repescagem: 0,
                Final: 0,
                Confronto: 0
            },

            DadosDePontuacao: {
                TempoNaArrancada: {
                    tempo: 0,
                    checkpoint: 0
                },
                TempoNaClassificatoria: {
                    tempo: 0,
                    checkpoint: 0
                },
                TempoNaRepescagem: {
                    tempo: 0,
                    checkpoint: 0
                },
                TempoFinal: {
                    tempo: 0,
                    checkpoint: 0
                }
            },
            DadosDecisivos: {
                AprovadoNaArrancada: false,
                AprovadoNaClassificatoria: false,
                AprovadoNaRepescagem: false,
                AprovadoFinal: false
            }
        }
    ]
    function adicinaequipe(){
        console.log(DataTeam[0].nome)
    }
    const [DataTeam, setDataTeam] = useState(DadosDasEquipes);
    const Data = {
        setDataTeam,
        adicinaequipe,
        DataTeam
        };

    return (
        <DataContext.Provider value={Data}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
