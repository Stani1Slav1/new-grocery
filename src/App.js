import './App.css';
import { SpisokList } from './SpisokList';
import image from './Spisok.jpg'

function App() {
  return (
    <div className='app'>
      <div className='loma'>
      <img src={ image } width={ 300 } alt='spisok'/>
      </div>
      <div className='loma'>
      <h1>СПИСОК ДЕЛ</h1>
      </div>
      <SpisokList/>
    </div>
  );
}

export default App;
