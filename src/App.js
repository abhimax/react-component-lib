import { Button } from './components/Button';
import { Back } from './components/Icon';

function App() {
  return (
    <div className="App">
      <Back/>
      <Button label="Click Me"/>
      <Button label="Back" icon={<Back size={15} color="white"/>}/>
    </div>
  );
}

export default App;
