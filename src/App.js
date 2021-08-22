import logo from './logo.svg';
import './App.css';
import SelectingTag from './component/selectingTag';
import SelectedTag from './component/selectedTag';
import { useState } from 'react';

function App() {
  const [tag, setTag] = useState([
    'javaScript',
    'CSS',
    'Github',
    'SourceTree',
    'VSC',
    'C/C++',
    'C#',
    'ReactJS',
    'Vue',
    'Angular'
  ]);
  const [selectedTag, setSelectedTag] = useState(['gg']);
  console.log('selectedTag: ', selectedTag);

  return (
    <>
    <div style={{display:'flex', backgroundColor:'blue', maxWidth:'500px', width:'700px',flexWrap:'wrap'}}>
      {selectedTag.map((el,i) => {
        return(
          <li key={i} style={{listStyleType: 'none'}}><SelectedTag prop={el} selectedTag={selectedTag} setSelectedTag={setSelectedTag} /></li>
        )
      })}
    </div>
    <div style={{display:'flex', backgroundColor:'red', maxWidth:'400px', width:'700px', flexWrap:'wrap'}}>
      {tag.map((el,i) => {
        return(
          <li key={i} style={{listStyleType: 'none'}}><SelectingTag prop={el} setTag={setTag} selectedTag={selectedTag} tag={tag} setSelectedTag={setSelectedTag} /></li>
        )
      })}
    </div>
    </>
  );
}

export default App;
