import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';

const linkStyle = {
    color: '#FFF',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',    
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.1rem',
    whiteSpace: 'nowrap',
};

const NavbarUnauth = () => {
    const [imgSrc, setImgSrc] = useState('/Bell_light.png');
    const [searchBarWidth, setSearchBarWidth] = useState(1024);

    useEffect(() => {
        const handleResize = () => {
            const zoom = window.devicePixelRatio;
            // Exponential shrinking factor
            const shrinkFactor = Math.pow(zoom, 1.5);
            const newWidth = Math.max(300, 1024 / shrinkFactor);
            setSearchBarWidth(newWidth);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav 
            className="text-white py-4 w-full"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4.875rem',
                margin: '28px 55px 10px 55px',
            }}
        >
            <div style={{ flexShrink: 0 }}>
                <Link href="/">
                    <Image src="/Logo.png" alt="Long Vu Fashion" width={100} height={40} />
                </Link>
            </div>

            <div style={{ width: `${searchBarWidth}px`, flexShrink: 1, minWidth: 0 }}> 
                <SearchBar />
            </div>

            <div style={{ flexShrink: 0 }}>
                <Link href="/">
                    <Image 
                        src={imgSrc} 
                        alt="Notifications" 
                        width={30} 
                        height={30} 
                        onMouseEnter={() => setImgSrc('/Bell_light_grad.png')}
                        onMouseLeave={() => setImgSrc('/Bell_light.png')}
                    />
                </Link>
            </div>

            <div style={{ flexShrink: 0 }}>
                <a href="/about" className="hover-gradient-link uppercase" style={linkStyle}>
                    ABOUT US
                </a>
            </div>

            <div style={{ flexShrink: 0 }}>
                <a href="/contact" className="hover-gradient-link uppercase" style={linkStyle}>
                    CONTACT
                </a> 
            </div>

            <div style={{ flexShrink: 0 }}>
                <Button button_text="SIGN IN" />
            </div>

            <style jsx>{`
                .hover-gradient-link {
                    transition: all 0.3s ease;
                }
                .hover-gradient-link:hover {
                    background: linear-gradient(90deg, #05FFF0 45.37%, #064CFF 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            `}</style>
        </nav>
    );
};

export default NavbarUnauth;