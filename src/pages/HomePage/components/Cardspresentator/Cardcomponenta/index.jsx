import './style.css';

export const Cardcomponenta = ({
  id,
  image,
  nazov,
  popis,
  onClickSelectRoom,
}) => {
  const handleVyberPokoje = () => {
    onClickSelectRoom(id);
  };

  return (
    <>
      <div onClick={handleVyberPokoje} className="card">
        <img
          className="card__image"
          src={`http://localhost:4000/assets/${image}`}
        />
        <div className="card__title">{nazov}</div>
        <div className="card__body">{popis}</div>
      </div>
    </>
  );
};
