import Image from "next/image";
import { Inter } from "next/font/google";
import Button from '../../components/ui/Button';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-black flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
      <Button button_text="SIGN IN"></Button>
    </main>
  );
}
