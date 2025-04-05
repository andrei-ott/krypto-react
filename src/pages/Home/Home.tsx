import accessNotifications from 'src/assets/access-notifications.png';
import analyticsFiles from 'src/assets/analytics-files.png';
import appSmartphone from 'src/assets/app-smartphone.png';
import fastCompany from 'src/assets/featured/fast-company.png';
import forbes from 'src/assets/featured/forbes.png';
import mit from 'src/assets/featured/mit.png';
import techCrunch from 'src/assets/featured/tech-crunch.png';
import heroMonitor from 'src/assets/hero-monitor.png';
import HomeTextImageSection from 'src/components/HomeTextImageSection/HomeTextImageSection.tsx';
import MainButton from 'src/components/MainButton/MainButton.tsx';
import { MainButtonType } from 'src/types/enums.ts';

function Home() {
  return (
    <div className="mt-14">
      <article className="flex justify-between items-end">
        <section className="mb-4 me-4">
          <h1>discover and collect rare NFTs</h1>

          <div className="body-text mt-8">
            The most secure marketplace for buying and selling unique crypto assets.
          </div>

          <div className="flex gap-[15px] mt-11">
            <MainButton style={MainButtonType.FILL_PURPLE} label="BUY NFTS" />
            <MainButton style={MainButtonType.STROKE_GREEN} label="SELL NFTS" />
          </div>
        </section>

        <img src={heroMonitor} alt="" width={552} height={586} />
      </article>

      <section className="mt-23">
        <div className="sub-header mb-7">Featured on</div>

        <div className="flex py-3 px-16 justify-between items-center bg-(--dark-purple) rounded-[7px]">
          <img src={techCrunch} alt="Tech Crunch" width={207} height={77} />
          <img src={fastCompany} alt="Tech Crunch" width={184} height={28} />
          <img src={mit} alt="Tech Crunch" width={74} height={40} />
          <img src={forbes} alt="Tech Crunch" width={126} height={32} />
        </div>
      </section>

      <section className="mt-26">
        <div className="mb-8">
          <HomeTextImageSection
            subHeader="Analytics"
            header={`built-in analytics\nto track your nfts`}
            bodyText="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time."
            buttonLabel="view our pricing"
            buttonStyle={MainButtonType.FILL_PURPLE}
            textMargin="mb-14"
          >
            <img src={analyticsFiles} alt="analytics" width={510} height={510} className="-ms-7" />
          </HomeTextImageSection>
        </div>

        <div className="mb-23">
          <HomeTextImageSection
            subHeader="get our app"
            header="browse nfts from your smartphone"
            bodyText="Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
            buttonLabel="Download on ios"
            buttonStyle={MainButtonType.STROKE_GREEN}
            textMargin="mb-11"
            reversed={true}
          >
            <img
              src={appSmartphone}
              alt="get our app"
              width={500}
              height={500}
              className="me-[18px]"
            />
          </HomeTextImageSection>
        </div>

        <HomeTextImageSection
          subHeader="24/7 access"
          header="sell your NFTs from anywhere at any time"
          bodyText="With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
          buttonLabel="Get started"
          buttonStyle={MainButtonType.FILL_PURPLE}
          textMargin="mb-[63px]"
        >
          <img
            src={accessNotifications}
            alt="24/7 access"
            width={543}
            height={543}
            className="-ms-[62px]"
          />
        </HomeTextImageSection>
      </section>
    </div>
  );
}

export default Home;
