import React from 'react';
import './style.css';


function CatCard(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="d-flex flex-column align-items-center">
          <img 
            src={props.imageUrl} 
            className="card-img-top rounded-2 mt-2" 
            alt="Gato" 
            style={{ 
              width: '75%', 
              height: '15.625rem', 
              objectFit: 'cover' 
            }} 
          />
        </div>
        
        <div className="card-body">
          <h5 className="card-title">{props.breedName}</h5>
          <p className="card-title">{props.breedDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CatCard;

