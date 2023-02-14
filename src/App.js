import { Button } from './components/Button';
import { Back } from './components/Icon';
import Input from './components/Input/Input';
import { OptionSelector } from './components/OptionSelector';

function App() {
  return (
    <div className="App">
      <Back/>
      <Button label="Click Me"/>
      <Input/>
      <Button label="Back" icon={<Back size={15} color="white"/>}/>
      <OptionSelector/>
    </div>
  );
}

export default App;
