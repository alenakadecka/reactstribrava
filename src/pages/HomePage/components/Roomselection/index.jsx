import { Formular } from './Formular';

export const Roomselection = ({ nazov, image, popis }) => {
  console.log(image);
  return (
    <section className="light">
      <div className="container">
        <h2>{nazov}</h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000/assets/${image}`} />
            <p>{popis}</p>
          </div>
          <Formular />
        </div>
      </div>
    </section>
  );
};
