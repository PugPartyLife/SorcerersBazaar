import { ChevronDown } from 'lucide-react';
import CtaButton from './CtaButton.tsx';

export default function Banner() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25px_25px,rgba(255,255,255,0.1)_2px,transparent_0)] bg-[length:50px_50px]" />
        <div
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url("/sorcbazaar-nobg.png")',
            backgroundSize: 'auto 100%',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* <h1 className="font-serif font-bold text-4xl md:text-6xl text-brand-yellow leading-tight">
            The Sorcerer's Bazaar
          </h1> */}

          {/*<p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Discover novel formats, rules, and strategies for your new favorite TCG - Sorcery the Contested Realm.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <CtaButton buttonText="Get Started" buttonHref="#features" arrowRight textClassName="text-brand-navy font-extrabold"/>

          </div>
        </div>
      </div>
    </section>
  );
}
