import accessNotifications from '@/assets/access-notifications.png';
import analyticsFiles from '@/assets/analytics-files.png';
import appSmartphone from '@/assets/app-smartphone.png';
import fastCompany from '@/assets/featured/fast-company.png';
import forbes from '@/assets/featured/forbes.png';
import mit from '@/assets/featured/mit.png';
import techCrunch from '@/assets/featured/tech-crunch.png';
import heroMonitor from '@/assets/hero-monitor.png';
import testimonialsEvan from '@/assets/testimonials/evan.png';
import testimonialsJessica from '@/assets/testimonials/jessica.png';
import testimonialsOlivia from '@/assets/testimonials/olivia.png';
import HomeTextImageSection from '@/components/HomeTextImageSection/HomeTextImageSection.tsx';
import MainButton from '@/components/MainButton/MainButton.tsx';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard.tsx';
import { MainButtonStyle } from '@/types/enums.ts';

function Home() {
  return (
    <div className="home mb-32">
      <article className="flex items-end justify-between">
        <section className="me-4 mb-4">
          <h1>discover and collect rare NFTs</h1>

          <div className="body-text mt-8">
            The most secure marketplace for buying and selling unique crypto assets.
          </div>

          <div className="mt-11 flex gap-[15px]">
            <MainButton buttonStyle={MainButtonStyle.FILL_PURPLE} label="BUY NFTS" />
            <MainButton buttonStyle={MainButtonStyle.STROKE_GREEN} label="SELL NFTS" />
          </div>
        </section>

        <img src={heroMonitor} alt="" width={552} height={586} />
      </article>

      <section className="mt-18">
        <div className="sub-header mb-7">Featured on</div>

        <div className="flex items-center justify-between rounded-[7px] bg-(--dark-purple) px-16 py-3">
          <a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer">
            <img src={techCrunch} alt="Tech Crunch" width={207} height={77} />
          </a>
          <a href="https://www.fastcompany.com" target="_blank" rel="noopener noreferrer">
            <img src={fastCompany} alt="Fast Company" width={184} height={28} />
          </a>
          <a href="https://web.mit.edu/" target="_blank" rel="noopener noreferrer">
            <img src={mit} alt="MIT" width={74} height={40} />
          </a>
          <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer">
            <img src={forbes} alt="Forbes" width={126} height={32} />
          </a>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-4">
          <HomeTextImageSection
            subHeader="Analytics"
            header={`built-in analytics\nto track your nfts`}
            bodyText="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time."
            buttonLabel="view our pricing"
            buttonStyle={MainButtonStyle.FILL_PURPLE}
            textMargin="mb-14"
          >
            <img src={analyticsFiles} alt="analytics" width={510} height={510} className="-ms-7" />
          </HomeTextImageSection>
        </div>

        <div className="mb-14">
          <HomeTextImageSection
            subHeader="get our app"
            header="browse nfts from your smartphone"
            bodyText="Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
            buttonLabel="Download on ios"
            buttonStyle={MainButtonStyle.STROKE_GREEN}
            textMargin="mb-11"
            reversed={true}
          >
            <img
              src={appSmartphone}
              alt="get our app"
              width={500}
              height={500}
              className="me-4.5"
            />
          </HomeTextImageSection>
        </div>

        <HomeTextImageSection
          subHeader="24/7 access"
          header="sell your NFTs from anywhere at any time"
          bodyText="With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
          buttonLabel="Get started"
          buttonStyle={MainButtonStyle.FILL_PURPLE}
          textMargin="mb-12"
        >
          <img
            src={accessNotifications}
            alt="24/7 access"
            width={543}
            height={543}
            className="-ms-15.5"
          />
        </HomeTextImageSection>
      </section>

      <section className="mt-14 text-center">
        <div className="sub-header text-(--light-green-1)">Testimonials</div>
        <h2 className="mt-9">
          read what others
          <br />
          have to say
        </h2>

        <div className="mt-27 flex justify-between gap-[15px]">
          <TestimonialCard
            name="Olivia Cole"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            image={testimonialsOlivia}
          />
          <TestimonialCard
            name="Evan White"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            image={testimonialsEvan}
          />
          <TestimonialCard
            name="Jessica Page"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            image={testimonialsJessica}
          />
        </div>
      </section>

      <section
        className="mt-25 flex w-full flex-col items-center rounded-[30px] pt-9 pb-12 text-center"
        style={{ background: 'var(--gradient)' }}
      >
        <div className="sub-header text-black">Are you ready?</div>

        <h2 className="mt-6 mb-10">
          be a part of the
          <br />
          next big thing
        </h2>

        <MainButton buttonStyle={MainButtonStyle.FILL_BLACK} label="Get started" width={299} />
      </section>
    </div>
  );
}

export default Home;
