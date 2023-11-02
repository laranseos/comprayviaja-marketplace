interface IButtonProps {
  btnClass: string | undefined;
  name: string | undefined;
}

const Button: React.FC<IButtonProps> = ({ btnClass, name }) => {
  return <button className={`btn ${btnClass} color1`} type="button">{name}</button>;
};

export default Button;
