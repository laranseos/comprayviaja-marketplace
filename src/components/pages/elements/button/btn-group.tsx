import { FC } from "react";

const ButtonGroup: FC<{ buttons: IButtonProps[] }> = ({ buttons }) => {
  return (
    <div className="btn-group-showcase">
      {buttons.map((button, index) => (
        <a key={index} href={button.href} className={button.className} role={button.role} type={button.type}>
          {button.label}
        </a>
      ))}
    </div>
  );
};

export default ButtonGroup;
