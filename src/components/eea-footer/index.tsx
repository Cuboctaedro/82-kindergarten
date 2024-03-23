import Image from 'next/image';


export const EeaFooter = () => {
    return (
        <div className="w-full flex items-center justify-center py-6">
            <aside className="w-full px-4 md:container mx-auto md:px-6 flex flex-wrap gap-4 md:gap-6 items-start justify-between">

                <div className="w-full max-w-xs flex-none">
                    <div className="text-sm">Fund operated by:</div>
                    <div className="grid grid-cols-2 gap-6 items-center">
                        <a href="https://www.solcrowe.gr/" target="_blank">
                            <figure className="w-[9rem] h-24 relative">
                                <Image
                                    src="/sol-logo.png"
                                    className="block w-full h-full object-contain object-center"
                                    alt="ΣΟΛ Crowe Logo"
                                    fill
                                />
                                <figcaption className="sr-only">ΣΟΛ Crowe</figcaption>
                            </figure>
                        </a>
                        <a href="https://www.humanrights360.org/" target="_blank">
                            <figure className="w-[9rem] h-32 relative">
                                <Image
                                    src="/human-rights-360-logo.png"
                                    className="block w-full h-full object-contain object-center"
                                    alt="Human Rights 360 Logo"
                                    fill
                                />
                                <figcaption className="sr-only">Human Rights 360</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-xs flex-none">
                    <div className="text-sm pb-6">Implemented by:</div>
                    <figure className="w-[12rem] h-24 relative">
                        <Image
                            src="/kindergarten-logo.png"
                            className="block w-full h-full object-contain object-center"
                            alt="82nd Kindergarten of Athens Logo"
                            fill
                        />
                        <figcaption className="sr-only">82nd Kindergarten of Athens</figcaption>
                    </figure>
                </div>

                <div className="w-full max-w-xs flex-none">
                    <div className="text-sm pb-6">In partnership with:</div>
                    <div className="grid grid-cols-2 gap-12">
                        <a href="https://www.oslo.kommune.no" target="_blank">
                            <figure className="w-[10rem] h-24 relative">
                                <Image
                                    src="/oslo-kommune-logo.png"
                                    className="block w-full h-full object-contain object-center"
                                    alt="Oslo Kommune Logo"
                                    fill
                                />
                                <figcaption className="sr-only">Oslo Kommune</figcaption>
                            </figure>
                        </a>
                        <a href="https://www.oslomet.no/"  target="_blank">
                            <figure className="w-[6rem] h-24 relative">
                                <Image
                                    src="/oslo-met-logo.png"
                                    className="block w-full h-full object-contain object-center"
                                    alt="Oslo Met Logo"
                                    fill
                                />
                                <figcaption className="sr-only">Oslo Met</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>

            </aside>
        </div>
    );
};