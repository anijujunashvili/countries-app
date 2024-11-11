import styles from "@/pages/home/components/card/card-header/card-header.module.css";
type CardHeaderProps = {
  image: string;
  uploaded: number;
};
const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const coverPhoto = props.image;
  return (
    <>
      <div style={{}}>
        <img src={coverPhoto} className="card-image" alt="card-image"></img>
      </div>
    </>
  );
};

export default CardHeader;
