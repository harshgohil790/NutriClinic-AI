function Button({

    children,

    onClick,

    type = "button",

    variant = "primary",

    className = "",

    disabled = false,

}) {

    const styles = {

        primary:
            "bg-green-600 hover:bg-green-700 text-white",

        secondary:
            "bg-gray-200 hover:bg-gray-300 text-black",

        danger:
            "bg-red-500 hover:bg-red-600 text-white",

    };

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`

                px-6

                py-3

                rounded-xl

                font-semibold

                transition

                ${styles[variant]}

                ${className}

            `}

        >

            {children}

        </button>

    );

}

export default Button;