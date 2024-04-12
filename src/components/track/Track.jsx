const Track = () => {
    return (
        <section>
            <div className=" container mx-auto px-5 py-10 md:py-14">
                {/* main  */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                        <img src="../../../img/tshirt.png" alt="tshirt icon" className="w-20 h-20 mb-3 inline-block" />
                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Tshirts</h2>
                            <p className="leading-relaxed">Our T-Shirts are 100% made of cotton.
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                        <img src="../../../img/computer.png" alt="compute icon icon" className="w-20 h-20 mb-3 inline-block" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Powerful Computers</h2>
                            <p className="leading-relaxed"> 100% authentic computers.
                            </p>
                        </div>
                    </div>

                    {/* Track 3  */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                        <img src="../../../img/book.png" alt="book icon" className="w-20 h-20 mb-3 inline-block" />

                            <h2 className="title-font font-medium text-lg text-gray-900" >Top Selling books</h2>
                            <p className="leading-relaxed">We have top selling books.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Track;
