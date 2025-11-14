import "./footer.css"
import { Link } from 'react-router-dom'
const footer = () => {
    return (
        //   <!-- footer -->
        <footer class="footer text-white bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <h5 class="highlight">About US</h5>
                        <p class="mb-0">We focus on providing all games to</p>
                        <p class="mb-0">the gamers for price as low as possible</p>
                        <p class=""> </p>
                        <p><i class="fa-solid fa-gamepad" ></i> Gamer's spot</p>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h5>Quick links</h5>
                        <ul class="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="../all_games">All Games</Link></li>
                            <li><Link to="../emulators">Emulators</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Connect And Follow Us On</h5>
                        <div class="social-icons">
                            <Link to="https://store.steampowered.com/"><i class="fa-brands fa-steam"></i> </Link>
                            <Link to="https://www.xbox.com/en-IN/"><i class="fa-brands fa-xbox"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default footer;