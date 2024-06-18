import { ButtonHTMLAttributes } from "react"

export default function CustomButton({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const classes = `text-white bg-gradient-to-r from-cyan-500 to-purple-700 items-center w-fit p-3 rounded-md flex flex-row ${className}`

    return (
        <button
            className={classes}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
}
