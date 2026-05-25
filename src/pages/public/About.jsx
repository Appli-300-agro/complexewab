import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-dark mb-6">À Propos du Complexe WAB</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Situé à Douala Bonamoussadi, le Complexe WAB (William Andem) est une destination multi-services d'exception 
            fondée par l'ancien gardien international William Andem. Nous allions gastronomie de prestige, 
            hébergement de standing et espaces événementiels modernes.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Notre Vision</h2>
            <p className="text-secondary leading-relaxed">
              Le Complexe WAB s'est donné pour mission d'offrir une expérience multiservice de haute qualité au Cameroun. 
              Sous l'impulsion de William Andem, nous mettons tout en œuvre pour garantir l'excellence, le confort et la satisfaction 
              de nos clients, que ce soit pour un repas d'exception, un séjour tout confort ou un événement mémorable.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Target className="text-primary h-8 w-8" />
                <h4 className="font-bold">Excellence</h4>
                <p className="text-xs text-secondary">Maintenir les plus hauts standards de service dans tous nos domaines d'activité.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <h4 className="font-bold">Hospitalité</h4>
                <p className="text-xs text-secondary">Offrir un accueil chaleureux et professionnel à chaque visiteur.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 border-dashed relative overflow-hidden">
            <img src="/complexe-wab-2.jpg" alt="Complexe WAB Interior" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
            <h3 className="text-xl font-bold mb-6 text-secondary-dark relative z-10">Nos Domaines d'Expertise</h3>
            <ul className="grid grid-cols-1 gap-3 relative z-10">
              {[
                "Restauration de Prestige & Buffet à Volonté",
                "Hébergement en Appartements & Studios Meublés",
                "Organisation de Banquets, Mariages & Spectacles",
                "Salles de Conférences & Séminaires Modulables",
                "Bar Lounge & Cave à Vins Sélectionnée",
                "Espace Snack & Fast Food de Qualité",
                "Salle de Sport & Remise en Forme (Gym)",
                "Service Traiteur pour vos Événements"
              ].map(item => (
                <li key={item} className="flex items-center text-sm text-secondary font-medium">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-10 text-center bg-primary p-16 rounded-[2rem] text-white">
        <h2 className="text-3xl font-bold mb-6">Vous souhaitez réserver ?</h2>
        <p className="text-primary-light mb-8 max-w-2xl mx-auto">
          Qu'il s'agisse d'une table pour notre buffet, d'un séjour dans nos appartements ou de la location d'une salle, 
          notre équipe est à votre entière disposition.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Contacter la réception
        </button>
      </section>
    </div>
  );
};

export default About;
