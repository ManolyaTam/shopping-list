import './button.css';

const Button = (props) => {
    const { borderLess, label, active, noShadow, ...rest } = props
    return (
        <div className={`button 
            ${borderLess ? 'borderless' : ''}
            ${active ? 'active' : ''} 
            ${noShadow ? 'no-shadow' : ''}`
        }
        >
            <button {...rest}>{label}</button>
        </div>
    );
};

export default Button;
