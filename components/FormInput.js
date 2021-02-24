import styles from './FormInput.module.scss';

const FormInput = (props) => {
  return (
    <div
      className={
        props.errors[props.for]
          ? `${styles.input_error} ${styles.input}`
          : styles.input
      }
    >
      <label htmlFor={props.for}>
        {props.for}
        <span aria-hidden="true">{' * '}</span>
        <span className={styles.errorMsg} aria-live="polite">
          {props.errors[props.for]}
        </span>
      </label>
      <input
        aria-required="true"
        type={props.type}
        id={props.for}
        name={props.for}
        htmlFor={props.for}
        placeholder={`enter your ${props.for}`}
        value={props.input[props.for] || ''}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default FormInput;
