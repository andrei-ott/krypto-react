import fastCompany from 'src/assets/featured/fast-company.png';
import forbes from 'src/assets/featured/forbes.png';
import mit from 'src/assets/featured/mit.png';
import techCrunch from 'src/assets/featured/tech-crunch.png';
import heroMonitor from 'src/assets/hero-monitor.png';
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
    </div>
  );
}

export default Home;
