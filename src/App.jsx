import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import background from './components/background.jpg';
import toast from 'react-hot-toast';

function App() {
  return (
    <div className="w-full min-h-screen relative overflow-y-auto">
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-center z-0"
      />
      

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start gap-6 p-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold bg-orange-200 px-6 py-3 rounded-2xl shadow-lg shadow-black/30 inline-block animate-bounce">
           GIF Generator
        </h1>


      
        <div className="flex flex-col w-full items-center gap-y-10">
          <Random />

         <Tag></Tag>
        </div>
      </div>
    </div>
  );
}

export default App;
