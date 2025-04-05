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
    </div>
  );
}

export default Home;
