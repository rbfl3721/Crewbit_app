import logo from './logo.svg';
import './App.css'; // 여기다 스타일링

function App() {
  let posts = '디자인이 바뀐게 없어 내가한거랑..'
  let posts2 = '이것은 무언의 당근....그러나 유언이죠'

  return (
    <div className='App'>
      <div className="black-nav">
        <div style={{color : 'blue', fontSize : '30px'}}>
          crewbit - make your own team 
          and manage your careear!
        </div>
      </div>
      <img src={ logo }/>
      <h4> { posts } </h4>
      <h3> {posts2} </h3>
    </div>
  );
}

export default App;
