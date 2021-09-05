import { useEffect, useState, useContext} from 'react';
import { GenreContext } from '../context/GenreContext';
import { Button } from './Button';
import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const { list, setList } = useContext(GenreContext);  

  function handleClickButton(id: number, title: string) {
    setList({ ...list, id: id, title: title });
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);  

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id, genre.title)}
            selected={list.id === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}