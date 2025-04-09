import './MainButton.scss';

import { MainButtonStyle } from 'src/types/enums.ts';

interface Props {
  buttonStyle: MainButtonStyle;
  label: string;
  onClick?: () => void;
  width?: number;
}

function MainButton({ buttonStyle, label, onClick, width }: Props) {
  return (
    <button
      type="button"
      className={`${buttonStyle} sub-header`}
      style={{ width: `${width ?? 255}px` }}
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
}

export default MainButton;
