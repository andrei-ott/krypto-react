import './MainButton.scss';

import { MainButtonType } from '../../types/enums.ts';

interface Props {
  style: MainButtonType;
  label: string;
  onClick?: () => void;
}

function MainButton({ style, label, onClick }: Props) {
  return (
    <button type="button" className={`${style} sub-header`} onClick={() => onClick?.()}>
      {label}
    </button>
  );
}

export default MainButton;
