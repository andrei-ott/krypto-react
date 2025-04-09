import './Footer.scss';

import { Link } from 'react-router-dom';
import MainButton from 'src/components/MainButton/MainButton.tsx';
import { MainButtonStyle } from 'src/types/enums.ts';

function Footer() {
  return (
    <footer className="mt-28">
      <div className="flex gap-[15px] pb-12.5">
        <div className="min-w-[165px]">
          <Link to="/" className="big-header">
            KRYPTO
          </Link>
        </div>

        <div className="min-w-[165px]">
          <div className="section-header mb-4.5">krypto</div>

          <div className="section-body flex flex-col">
            <Link to="/">About</Link>
            <Link to="/buy-nfts">Buy NFTs</Link>
            <Link to="/sell-nfts">Sell NFTs</Link>
          </div>
        </div>

        <div className="min-w-[165px]">
          <div className="section-header mb-4.5">Market</div>

          <div className="section-body flex flex-col">
            <Link to="/browse-nfts">Browse NFTs</Link>
            <Link to="/buy-nfts">Buy NFTs</Link>
            <Link to="/sell-nfts">Sell NFTs</Link>
          </div>
        </div>

        <div className="min-w-[165px]">
          <div className="section-header mb-4.5">Contact</div>

          <div className="section-body flex flex-col">
            <a href="mailto:ott.andrey.ao@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/andrey-ott-7a79b034b/">Linkedin</a>
            <a href="https://t.me/ottebrut">Telegram</a>
          </div>
        </div>

        <div className="w-full">
          <div className="big-header mb-7">Join our newsletter</div>

          <div className="input-container relative flex h-[50px]">
            <input type="email" className="h-full w-full ps-6" placeholder="Email address" />

            <MainButton
              buttonStyle={MainButtonStyle.FILL_GREEN}
              label="Submit"
              classes={['text-[15px]! py-[11px] absolute right-0 top-0']}
              width={115}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
