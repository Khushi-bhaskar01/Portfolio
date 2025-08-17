import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  src: string;
  color: string;
  i: number;
}

const Card = ({ title, description, src, color }: CardProps) => {
  return (
    <div className="cardContainer" style={{ background: color }}>
      <div className="card">
        <div className="imageWrapper">
          <img src={src} alt={title} />
        </div>
        <div className="textWrapper">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;