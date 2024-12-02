import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 text-white pt-8 w-full">
        <div className="max-container">
            <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-2">
                <div>
                    <h3 className="mb-3 font-semibold">Company</h3>
                    <ul>
                        <li><Link  to="/about">About Us</Link></li>
                        <li><Link  to="/careers">Careers</Link></li>
                        <li><Link  to="/press">Press</Link></li>
                        <li><Link  to="/block">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-3 font-medium">Help & Support</h3>
                    <ul>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="max-md:text-center">
                    <h3 className="mb-3 font-medium">Follow Us</h3>
                    <ul className="flex justify-center gap-2 max-sm:ml-10">
                        <li><Link to="#"><img src="https://img.icons8.com/color/48/000000/facebook-logo.png" alt="facebook" /></Link></li>
                        <li><Link to="#"><img src="https://img.icons8.com/color/48/000000/instagram-logo.png" alt="instagram" /></Link></li>
                        <li><Link to="#"><img src="https://img.icons8.com/color/48/000000/twitter-logo.png" alt="twitter" /></Link></li>
                    </ul>
                </div>
            </div>
           <div className="text-center mt-2 max-md:mt-3">
           <p className="text-sm">© 2024 Travify. All rights reserved.</p>
           <p className="text-sm">Explore. Dream. Discover.</p>
           </div>
        </div>
    </footer>
  )
}

export default Footer