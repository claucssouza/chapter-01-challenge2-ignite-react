import { GenreProvider } from './context/GenreProvider';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  
  return (
    <div className="app">
      <GenreProvider>
        <SideBar />
        <Content />
      </GenreProvider>
    </div >
  )
}