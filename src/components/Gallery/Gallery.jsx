import Card from "../../components/Card/Card";
import data from "../../assets/data/logements.json";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
      {data.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          image={data.cover}
          id={data.id}
        />
      ))}
    </div>
  );
}

export default Gallery;
