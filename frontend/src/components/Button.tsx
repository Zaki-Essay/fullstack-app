import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({children, onClick, href, className}) => {
    const baseStyles =
        "block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500";

    if (href) {
        return (
            <a href={href} className={`${baseStyles} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
