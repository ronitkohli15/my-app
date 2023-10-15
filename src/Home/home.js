
import image2 from'../images/image2.jpg';
import image1 from'../images/image1.jpg';
import './home.css'
import '../cards/cards';
function Home()
{
  return (
  <>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={image2} class="d-block carousel-height" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={image1} class="d-block carousel-height" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={image2} class="d-block carousel-height" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <cards/>
  </>
  )
}
export default Home;