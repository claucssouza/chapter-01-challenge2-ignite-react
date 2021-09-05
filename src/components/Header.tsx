import { GenreContext } from '../context/GenreContext';
import { useContext } from 'react';

interface HeaderProps {
    title: string;
}

const Header = () => {

    const { list, setList } = useContext(GenreContext);

    return (
        <header>
            <span className="category">Categoria:<span> {list.title}</span></span>
        </header>
    );
}

export { Header };