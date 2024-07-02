const Button = ({children, disabled, ...props}) => {
    let btnClass = 'w-full py-4 rounded-xl bg-purple'

    if (disabled) {
        btnClass = 'w-full py-4 rounded-xl bg-navy cursor-not-allowed text-slate-400'
    }
    
    return (
        <button 
            disabled={disabled}
            {...props}
            className={btnClass}
        >
            {children}
        </button>
    )
}

export default Button