import Moralis from "moralis";
import logo from './logo.svg';
import './App.css';
import { useMoralisCloudQuery } from "./hooks/cloudQuery";

moralis.initialize(process.env.REACT_APP_MORALIS_APPLICATION_ID);
moralis.serverURL = process.env.REACT_APP_MORALIS_SERVER_URL;

const options = {
  params: { userAddress: "0xC8A8f410837fd7be83fd9521E8F7FE9406AaA9f5"},
};


function App() {
  const {data} = useMoralisCloudQuery("getTransactions", options);
  console.log(data);
  return (
    <div className="App">
      <h1>Greenex Scan</h1>
    </div>
  );
}

export default App;
