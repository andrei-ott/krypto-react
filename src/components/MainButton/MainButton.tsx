import './MainButton.scss';

import { MainButtonType } from '../../types/enums.ts';

interface Props {
  style: MainButtonType;
  label: string;
  onClick?: () => void;
  width?: number;
}

function MainButton({ style, label, onClick, width }: Props) {
  const widthClass = `w-[${width ?? 255}px]`;

  return (
    <button
      type="button"
      className={`${style} sub-header ${widthClass}`}
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
}

export default MainButton;
