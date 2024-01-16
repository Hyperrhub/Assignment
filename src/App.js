import './App.css';
import Assignment from './Assignment';
// import AutoCompleteChips from './AutoCompleteChips';
// import EmailChipInput from './EmailChipInput';
// import ChipsArray from './ChipsArray';
// import MultiSelect from './MultiSelect';
// import CustomizedHook from './CustomizedHook';
// import App from './MultiSelect';

function App() {
  const options = [{name:"hitesh", value:1 },{name:"bhushan",value:2},{name:"sandesh",value:3}];
  return (
    <div className="App">
       {/* <MultiSelect options={options} /> */}
       <Assignment options={options} ></Assignment>
      
    </div>
  );
}

export default App;
