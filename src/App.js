import React, { useState, useEffect } from 'react';
import CatCard from './components/CatCard.jsx';

const API_KEY = 'live_8Z6Cj5Jb1cpGtEy7UKUOkq8vgeZh67JjxUuybPbWrI3f00UF355BugnnY87y2Kbe';


function App() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const newCats = data.map(cat => {
          return {
            id: cat.id,
            imageUrl: cat.url,
            breedName: cat.breeds[0].name,
            breedDescription:cat.breeds[0].description,
            
          };
          
        });
        

        console.log(data);

        setCats(newCats);
        
      })
      
      .catch(error => {
        console.log(error);
      });
  }, [page]);
  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="container d-flex justify-content-center flex-column align-content-center align-items-md-center">
      <div className="row mt-3 g-2">
        {cats.map(cat => (
          <CatCard
            key={cat.id}
            imageUrl={cat.imageUrl}
            breedName={cat.breedName}
            breedDescription={cat.breedDescription}
            
          />
        ))}
      </div>
      <div className="row my-5">
        <div className="col">
        <div className="container d-flex justify-content-between">
        <button
            className="btn btn-primary me-2"
            onClick={handlePrevClick}
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Siguiente
          </button>

        </div>
          
        
        </div>
      </div>
    </div>
  );
}

export default App;

