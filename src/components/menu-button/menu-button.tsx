import { IoMenu, IoClose } from 'react-icons/io5';

interface MenuButtonProps {
    isOpen: boolean
    setIsOpen: (state: boolean) => void
}

export const MenuButton = ({
    isOpen,
    setIsOpen,
}: MenuButtonProps) => {
    return (
        <button
            onClick={() => {
                setIsOpen(!isOpen);
            }}
            className="w-6 h-6 flex items-center justify-center relative z-50 hover:bg-blue-50"
        >
            <span className="sr-only">Μενού</span>
            <span className="w-6 h-6 flex items-center justify-center">
                {isOpen && (
                    <IoClose size="24" />
                )}
                {!isOpen && (
                    <IoMenu size="24" />
                )}
            </span>
        </button>
    );
};