interface PageTitleProps {
    children: React.ReactNode
}

export const PageTitle = ({
    children,
}: PageTitleProps) => {
    return (
        <h1 className="font-thin text-3xl font-sans text-orange-500">{children}</h1>
    );
};
