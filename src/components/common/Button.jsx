import React from 'react';

/**
 * @param {object} props
 * * @param {React.ReactNode} props.children
 * * @param {'primary' | 'secondary'} [props.variant='primary'] 
 * * @param {string} [props.className=''] 
 * * @param {function} [props.onClick]
 * * @param {object} [rest]
 * @returns {JSX.Element}
 */

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...rest
}) => {
    const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

    const primaryClasses = "bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-purple-700 hover:cursor-pointer shadow-md";

    const secondaryClasses = "bg-transparent border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] hover:cursor-pointer"


    const combinedClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;


    return (
        <button
            className={combinedClasses}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;