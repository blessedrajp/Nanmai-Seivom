import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logoImage} 
              alt="Nanmai Seivom Trust Logo"
              className="h-20 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button 
                data-testid="nav-home"
                onClick={() => handleNavClick('#home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                data-testid="nav-about"
                onClick={() => handleNavClick('#about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                data-testid="nav-services"
                onClick={() => handleNavClick('#services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                data-testid="nav-contact"
                onClick={() => handleNavClick('#contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </li>
            <li>
              <Button
                data-testid="button-join-with-us"
                onClick={() => handleNavClick('#contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Join With Us
              </Button>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <Button
            data-testid="button-mobile-menu"
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <ul className="space-y-4 mt-4">
              <li>
                <button 
                  data-testid="mobile-nav-home"
                  onClick={() => handleNavClick('#home')}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  data-testid="mobile-nav-about"
                  onClick={() => handleNavClick('#about')}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  data-testid="mobile-nav-services"
                  onClick={() => handleNavClick('#services')}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  data-testid="mobile-nav-contact"
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <Button
                  data-testid="mobile-button-join-with-us"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Join With Us
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
