import './all_games.css';
import PPSSPP from './images/ppsspp.jpg';
import Dolphin from './images/dolphin.jpg';
import Gold from './images/PPSSPP_Gold.jpg';
import Cemu from './images/cemu.jpg';

const Emulators = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-danger fw-bold">
         Emulators
      </h2>

      <div className="row g-4">
        {/* Emulator 1 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={PPSSPP} className="card-img-top gameimg" alt="PCSX2" />
            <div className="card-body text-center">
              <h5 className="card-title">PPSSPP For Windows</h5>
              <p className="card-text">
                Play classic PlayStation 2 games on your PC with enhanced performance and resolution.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emulator 2 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={PPSSPP} className="card-img-top gameimg" alt="PCSX2" />
            <div className="card-body text-center">
              <h5 className="card-title">PPSSPP For Android</h5>
              <p className="card-text">
                Play classic PlayStation 2 games on your PC with enhanced performance and resolution.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emulator 3 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={PPSSPP} className="card-img-top gameimg" alt="PCSX2" />
            <div className="card-body text-center">
              <h5 className="card-title">PPSSPP For MAC</h5>
              <p className="card-text">
                Play classic PlayStation 2 games on your PC with enhanced performance and resolution.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emulator 4 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={Dolphin} className="card-img-top gameimg" alt="Dolphin Emulator" />
            <div className="card-body text-center">
              <h5 className="card-title">Dolphin Emulator</h5>
              <p className="card-text">
                Experience GameCube and Wii titles in HD with this powerful open-source emulator.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emulator 5 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={Gold} className="card-img-top gameimg" alt="RPCS3" />
            <div className="card-body text-center">
              <h5 className="card-title">RPCS3</h5>
              <p className="card-text">
                The most advanced PlayStation 3 emulator capable of running hundreds of PS3 titles.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emulator 6 */}
        <div className="col-md-4">
          <div className="card game-card">
            <img src={Cemu} className="card-img-top gameimg" alt="Cemu Emulator" />
            <div className="card-body text-center">
              <h5 className="card-title">Cemu</h5>
              <p className="card-text">
                Play Wii U games on PC in 4K resolution with powerful customization options.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-download"></i> Download
                </button>
                <button className="btn btn-light">
                  <i className="fa-solid fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Emulators;