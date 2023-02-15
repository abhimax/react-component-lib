import Alert from "./components/Alert/Alert";
import { Button } from "./components/Button";
import { Back } from "./components/Icon";
import Input from "./components/Input/Input";
import { OptionSelector } from "./components/OptionSelector";

function App() {
  const handleClose = () => {
    console.log("handle close here");
  };
  return (
    <div className="App">
      <Back />
      <Button label="Click Me" />
      <Input />
      <Button label="Back" icon={<Back size={15} color="white" />} />
      <OptionSelector />
      <Alert message="test" closeAlert={handleClose} />
    </div>
  );
}

export default App;
