import React, { useState, useMemo } from 'react';
import { GenreContext } from './GenreContext';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export const GenreProvider: React.FC = ({ children }) => {

    const [list, setList] = useState<GenreResponseProps>({
        id: 1,
        name: 'action',
        title: 'Ação'
    })

    const value = useMemo(() => ({ list, setList }), [list, setList]);

    return (
        <GenreContext.Provider value={value}>
            {children}
        </GenreContext.Provider>
    );
}
