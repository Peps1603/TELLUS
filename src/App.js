import React, { useState, useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { saveViewed} from './actions'

function App({ viewed, onImagePressed }) { 
  const [data, setData] = useState (null)
  const [images, setImagesText] = useState("You have viewed these images: ");

  useEffect (() => {
   fetch("https://epic.gsfc.nasa.gov/api/natural")
   .then ((response) => response.json())
   .then(setData);
  }, []);
  
  if (data) {
    return (<div>
      {images}
    <header>
      <h1>Tellus</h1>
      </header>
      <div className="App">
    {data.map(natural => (
      <div key={natural.identifier}>
        <h2>{natural.date}</h2> 
        <p>
        <a href={'https://epic.gsfc.nasa.gov/archive/natural/'+natural.identifier.slice(0,4)+'/'+ natural.identifier.slice(4,6)+'/'+ natural.identifier.slice(6,8)+'/png/'+natural.image+'.png'} target="_blank" rel="noreferrer"
            onClick={() => {
              const isViewed = 
                viewed.some(image => image.text === natural.date)
                if (!isViewed) {
                  onImagePressed(natural.date);
                  const newText = images + natural.date +', ';
                  setImagesText(newText);
                }
            }}
            >
    <img alt={"Image id:" +natural.identifier} src={'https://epic.gsfc.nasa.gov/archive/natural/'+natural.identifier.slice(0,4)+'/'+ natural.identifier.slice(4,6)+'/'+ natural.identifier.slice(6,8)+'/thumbs/'+natural.image+'.jpg'}/>
  </a>
        </p>
      </div>
      ))}
      </div>
    </div>)
  }
  


   return <div> No User Available </div>;
}



const mapStateToProps = state => ({
  viewed: state.viewed,
});

const mapDispatchToProps = dispatch => ({
  onImagePressed: text => dispatch(saveViewed(text)),
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
