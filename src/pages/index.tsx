import Image from "next/image";
import { Inter } from "next/font/google";
import Button from '../../components/ui/Button';
import SearchBar from "../../components/ui/SearchBar";
import NavbarUnauth from "../../components/layout/Navbar_unauth";
import BuyNowButton from "../../components/ui/BuyNowButton"
import VideoHeader from "../../components/ui/VideoHeader";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-black flex min-h-screen flex-col items-center`}
    >
      <NavbarUnauth></NavbarUnauth>
      <div style={{ position: 'relative' }}> {/* Make the div a positioning context */}
  <Image src="/HeroImage.png" alt="Long Vu Fashion" width={1830} height={850} />
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -70%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Image src="/Logo.png" alt="Long Vu Logo" width={400} height={800}/>
    <BuyNowButton button_text="BUY NOW"></BuyNowButton>
  </div>
</div>
<VideoHeader></VideoHeader>

    </main>
  );
}
