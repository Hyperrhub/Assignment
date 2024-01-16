import './App.css';
// import AutoCompleteChips from './AutoCompleteChips';
// import EmailChipInput from './EmailChipInput';
// import ChipsArray from './ChipsArray';
import MultiSelect from './MultiSelect';
// import CustomizedHook from './CustomizedHook';
// import App from './MultiSelect';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; 
  return (
    <div className="App">
       <MultiSelect options={options} />
      
    </div>
  );
}

export default App;
