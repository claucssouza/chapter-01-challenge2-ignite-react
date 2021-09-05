import { GenreContext } from '../context/GenreContext';
import { useContext } from 'react';

export function Header() {

    const { list, setList } = useContext(GenreContext);

    return (
        <header>
            <span className="category">Categoria:<span> {list.title}</span></span>
        </header>
    );
}

