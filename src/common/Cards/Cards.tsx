import { FC } from "react";
import Card from "react-bootstrap/Card";
import styles from "./cards.module.css";

interface IProps {
  img: string;
  text: string;
  price: number;
}

const Cards: FC<IProps> = ({ img, text, price }) => {
  return (
    <Card className={styles.container} style={{ width: "18rem" }}>
      <div style={{overflow:"hidden"}}>
        <Card.Img className={styles.image} variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Text className={styles.card_text}>{text}</Card.Text>
        <p className={styles.card_price}>{price.toLocaleString()} تومان</p>
      </Card.Body>
    </Card>
  );
};
export default Cards;
