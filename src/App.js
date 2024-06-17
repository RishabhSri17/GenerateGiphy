import './App.css';
import Random from './components/Random.js';
import Tag from './components/Tag.js';

function App() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col bg-bgImg bg-cover bg-center items-center ">
      <h1 className="bg-white rounded-md mt-[40px] px-10 py-2 w-11/12 text-center text-3xl font-bold" >RANDOM GIFS</h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[30px]" >
        <Random />
        <Tag />
       </div>
    </div>
  );
}

export default App;
