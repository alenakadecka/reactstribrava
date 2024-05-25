import { Header } from './components/header';
import { Cardspresentator } from './components/Cardspresentator';
import { Roomselection } from './components/Roomselection';
import { Footer } from './components/Footer';

import './style.css';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [pokoje, setPokoje] = useState(null);
  const [vybranyPokoj, setVybranyPokoj] = useState(0);

  useEffect(() => {
    const fetchPokoje = async () => {
      const response = await fetch('http://localhost:4000/api/data');
      const data = await response.json();
      setPokoje(data.data);
    };

    fetchPokoje();
  }, []);

  console.log(vybranyPokoj);

  console.log(
    pokoje !== null ? pokoje[vybranyPokoj] : 'neni vybran zadny pokoj',
  );

  return (
    <div className="container">
      <Header />
      {pokoje !== null ? (
        <main>
          <Cardspresentator
            pokojeSeznam={pokoje}
            onClickSelectRoom={setVybranyPokoj}
          />
          <Roomselection
            nazov={pokoje[vybranyPokoj].nazov}
            image={`http://localhost:4000/api/data${pokoje[vybranyPokoj].image}`}
            popis={pokoje[vybranyPokoj].popis}
          />
        </main>
      ) : null}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
