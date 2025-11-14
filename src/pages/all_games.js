import './all_games.css';
import mine from './images/mine.jpg';
import gowr from './images/gow_ragnarok.jpg';
import GTAV from './images/gtav.jpg'
import elden from './images/elden.jpg'
import spiderman from './images/spider.jpg'
import codmw from './images/codmw.jpg'

const Games = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-danger fw-bold">
        <i className="fa-solid fa-dice"></i> All Games
      </h2>

      <div className="row g-4">
        {/* Game 1 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={GTAV} className="card-img-top gameimg" alt="GTA V" />
            <div className="card-body text-center">
              <h5 className="card-title">GTA V</h5>
              <p className="card-text">
                Explore Los Santos in the most popular open-world action game.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-bolt"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game 2 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img
              src={gowr}
              className="card-img-top gameimg"
              alt="GOW Ragnarok"
            />
            <div className="card-body text-center">
              <h5 className="card-title">God of War: Ragnarok</h5>
              <p className="card-text">
                Join Kratos and Atreus in an epic Norse adventure full of gods and monsters.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-bolt"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game 3 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img
              src={elden}
              className="card-img-top gameimg"
              alt="Elden Ring"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Elden Ring</h5>
              <p className="card-text">
                Step into a vast world filled with mystery, bosses, and breathtaking landscapes.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-bolt"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game 4 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img
              src={spiderman}
              className="card-img-top gameimg"
              alt="Spider-Man"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Spider-Man PS5</h5>
              <p className="card-text">
                Swing through New York and fight villains in this stunning action-packed game.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-bolt"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game 5 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img
              src={codmw}
              className="card-img-top gameimg"
              alt="Call of Duty"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Call of Duty: Modern Warfare</h5>
              <p className="card-text">
                Engage in tactical warfare with realistic graphics and modern combat missions.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-bolt"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game 6 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img
              src={mine}
              className="card-img-top gameimg"
              alt="Minecraft"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Minecraft</h5>
              <p className="card-text">
                Create, explore, and survive in a pixelated sandbox world with endless possibilities.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-bolt"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
