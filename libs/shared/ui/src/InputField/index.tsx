import { InputFieldProps } from './type';
import styles from './InputField.module.css';

const Input = ({ type, name, label, id, value, onChange }: InputFieldProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={true}
      />
    </>
  );
};

export default Input;
