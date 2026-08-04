import CtaCard from './CtaCard.tsx';

const FEATURES = [
  {
    title: 'Beginner Friendly Formats',
    description: 'If you are a beginner, or are looking to introduce someone to the game, click here!',
    buttonText: 'Learn More',
    buttonHref: '#',
  },
  {
    title: 'Fun and Competitive Formats',
    description: 'If you are an experienced sorcery player, and are looking to get into 2HG, pauper, cube, or maybe something completely new, click here!',
    buttonText: 'Learn More',
    buttonHref: '#',
  },
  {
    title: 'Constructed',
    description: 'If you are looking to get into playing the meta, or are just looking to get a taste of what the pros are playing, click here!',
    buttonText: 'Learn More',
    buttonHref: '#',
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          What will you <span className="text-brand-yellow font-serif">DISCOVER?</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {FEATURES.map((item) => (
          <CtaCard
            key={item.title}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            buttonHref={item.buttonHref}
          />
        ))}
      </div>
    </section>
  );
}
