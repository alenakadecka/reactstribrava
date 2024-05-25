import './style.css';
import { Cardcomponenta } from './Cardcomponenta';

export const Cardspresentator = ({ pokojeSeznam, onClickSelectRoom }) => {
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, ve kterém pokoji si nejvíce oddýchnete.</p>
          <div className="cards-row">
            {pokojeSeznam.map((pokoj, index) => (
              <Cardcomponenta
                onClickSelectRoom={onClickSelectRoom}
                key={index}
                id={index}
                image={pokoj.image}
                nazov={pokoj.nazov}
                popis={pokoj.popis}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
