import './MainButton.scss';

import { MainButtonStyle } from 'src/types/enums.ts';

interface Props {
  buttonStyle: MainButtonStyle;
  label: string;
  onClick?: () => void;
  width?: number;
  classes?: string[];
}

function MainButton({ buttonStyle, label, onClick, width, classes }: Props) {
  return (
    <button
      type="button"
      className={`sub-header py-6 ${buttonStyle} ${classes?.join(' ')}`}
      style={{ width: `${width ?? 255}px` }}
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
}

export default MainButton;
