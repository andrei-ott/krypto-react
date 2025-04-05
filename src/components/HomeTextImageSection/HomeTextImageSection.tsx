import MainButton from 'src/components/MainButton/MainButton.tsx';
import { MainButtonType } from 'src/types/enums.ts';

interface Props {
  subHeader: string;
  header: string;
  bodyText: string;
  buttonLabel: string;
  buttonStyle: MainButtonType;
  reversed?: boolean;

  textMargin: string;

  children?: React.ReactNode;
}

function HomeTextImageSection({
  subHeader,
  header,
  bodyText,
  buttonLabel,
  buttonStyle,
  reversed,
  textMargin,
  children,
}: Props) {
  return (
    <article className={`flex justify-between items-end ${reversed ? 'flex-row-reverse' : ''}`}>
      {children}

      <section className={`w-[525px] ${textMargin}`}>
        <div className="sub-header text-(--light-green-1)">{subHeader}</div>

        <h2 className="mt-[18px] whitespace-pre-line">{header}</h2>

        <div className="body-text mt-8 mb-11">{bodyText}</div>

        <MainButton style={buttonStyle} label={buttonLabel} width={360} />
      </section>
    </article>
  );
}

export default HomeTextImageSection;
