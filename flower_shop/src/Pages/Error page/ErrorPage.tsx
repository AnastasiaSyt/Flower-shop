import image from "../../assets/flowers-green-leaves.jpg";
import error_image from "../../assets/flower_404.png";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="error">
        <p className="text_404">Кажется, что-то пошло не так</p>
        <img src={error_image} alt="error image" className="image_error" />
        <p className="big_text">404</p>
      </div>
    </div>
  );
}

export default ErrorPage;
