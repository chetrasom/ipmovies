

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-base">
            <div className="container py-[40px] md:py-[50px] lg:py-[60px]">
                <div className="text-center text-white text-3xl font-bold mb-4">
                    <span className="text-primary">IP</span> Movies
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="font-primary text-lg text-stone-300">
                        {year} | All Rights Reserved
                    </p>

                    <div className="font-primary tracking-wider text-white">
                        <span className="text-primary">Develop By{" "}</span>
                        Chetra Som
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer