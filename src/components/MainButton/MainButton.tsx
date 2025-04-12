import './MainButton.css';

import { MainButtonStyle } from '@/types/enums.ts';

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
      className={`sub-header cursor-pointer py-6 transition-transform hover:scale-103 active:scale-97 ${buttonStyle} ${classes?.join(' ')}`}
      style={{ width: `${width ?? 255}px` }}
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
}

export default MainButton;
