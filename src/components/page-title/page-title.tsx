interface PageTitleProps {
    children: React.ReactNode
}

export const PageTitle = ({
    children,
}: PageTitleProps) => {
    return (
        <h1 className="p-6 shadow-03 font-serif font-extrabold text-2xl md:text-3xl xl:text-4xl bg-green-500 text-white">{children}</h1>
    );
};
