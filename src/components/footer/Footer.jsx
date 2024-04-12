import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer className="text-gray-600 body-font bg-orange-600">
                {/* main  */}
                <div className="container px-5 py-[35px] mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo  */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-3xl font-bold">E-Nepal</span>
                    </a>
                    {/* para  */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 eNepal —
                        <Link
                        to={'/'}
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @eNepal
                        </Link>
                    </p>
                    
                    {/* media icon  */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* facebook  */}
                        <a className="text-gray-100 cursor-pointer" href="https://www.facebook.com/dipak.Developer" target="_blank">
                             <img className="w-[30px] h-[30px]" src="../../../img/facebook.png" alt="facebook icon" />
                        </a>

                        {/* twitter  */}
                        <a className="ml-3 text-gray-100 cursor-pointer" href="https://twitter.com/DipakPokha89809" target="_blank">
                        <img className="w-[30px] h-[30px]" src="../../../img/twitter.png" alt="twitter icon" />
                        </a>

                        {/* instagram  */}
                        <a className="ml-3 text-gray-100 cursor-pointer" href="https://www.instagram.com/pokharel.diwakar/" target="_blank">
                        <img className="w-[30px] h-[30px]" src="../../../img/instagram.png" alt="instagram icon" />
                        </a>

                        {/* linkedIn  */}
                        <a className="ml-3 text-gray-100 cursor-pointer" href="https://www.linkedin.com/in/dipak-developer/" target="_blank">
                        <img className="w-[30px] h-[30px]" src="../../../img/linkedin.png" alt="linkedin icon" />
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;