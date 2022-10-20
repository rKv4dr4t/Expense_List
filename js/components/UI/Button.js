import stylesSubmit from './Button.module.css';
import stylesCancel from './ButtonCancel.module.css';

const Button = (props) => {
    // theme: 'regularButton' = solid button style
    // theme: 'cancelButton' = void button style
    let theme = "";
    if (props.theme == 'regularButton') {
        theme = stylesSubmit.button;
    } else if (props.theme == 'cancelButton') {
        theme = stylesCancel.button;
    }

  return (
    <button
      className={theme}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  )
}

export default Button;