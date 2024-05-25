import '/global.css';

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Hotel Stříbrava</h2>
          <p>
            Ke Kamenné lávce 12 317 24 Libnice nad Stříbravou
            <br />
            recepce@hotelstribrava.cz
          </p>
        </div>
        <img src="/mapa.png" />
      </div>
    </section>
  );
};
