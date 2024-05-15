import Image from 'next/image';

interface EEAGrantsLayoutProps {
    children: React.ReactNode
}

export const EEAGrantsLayout = ({
    children,
}: EEAGrantsLayoutProps) => {

    return (
        <div>
            <aside className="w-full pb-12 md:pb-24 flex flex-wrap items-start justify-between gap-8">
                <div className="relative h-24 w-48">
                    <Image src="/eea-grants-logo.png" alt="EEA Grants Logo" fill className="w-full h-full object-left object-contain" />
                </div>
            </aside>
            <div>
                {children}
            </div>
            <aside className="w-full pt-12 md:pt-24 flex flex-wrap items-start justify-between gap-8">
                <div>
                    <div className="font-sans text-sm text-gray-600 pb-6">Fund operated by:</div>
                    <div className="flex items-center justify-between gap-6">
                        <div className="relative h-24 w-48">
                            <Image src="/sol-logo.png" alt="ΣΟΛ Crowe Logo" fill className="w-full h-full object-left object-contain" />
                        </div>
                        <div className="relative h-24 w-48">
                            <Image src="/human-rights-360-logo.png" alt="Human Rights 360 Logo" fill className="w-full h-full object-left object-contain" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-sans text-sm text-gray-600 pb-6">Implemented by:</div>
                    <div className="relative h-24 w-48">
                        <Image src="/kindergarten-logo.png" alt="82 Kindergarten Logo" fill className="w-full h-full object-left object-contain" />
                    </div>

                </div>
                <div>
                    <div className="font-sans text-sm text-gray-600 pb-6">In partnership with:</div>
                    <div className="flex items-center justify-between gap-6">
                        <div className="relative h-24 w-48">
                            <Image src="/oslo-kommune-logo.png" alt="Oslo Kommune Logo" fill className="w-full h-full object-left object-contain" />
                        </div>
                        <div className="relative h-24 w-48">
                            <Image src="/oslo-met-logo.png" alt="Oslo MET Logo" fill className="w-full h-full object-left object-contain" />
                        </div>
                    </div>
                </div>

            </aside>
        </div>
    );
};