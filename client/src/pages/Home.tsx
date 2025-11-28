import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Image Background and Integrated Navbar */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        {/* Church Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/hero-church.png"
            alt="Igreja Adventista do Sétimo Dia"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar - Integrated within Hero */}
        <nav className="relative z-10 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Brand */}
              <Link href="/" className="text-white font-bold text-lg hover:text-primary transition-colors">
                <span className="font-montserrat">IASD Planalto</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/sobre" className="text-white hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
                <Link href="/ministerios" className="text-white hover:text-primary transition-colors">
                  Ministérios
                </Link>
                <Link href="/galeria" className="text-white hover:text-primary transition-colors">
                  Galeria
                </Link>
                <Link href="/contato" className="text-white hover:text-primary transition-colors">
                  Contato
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-3 border-t border-white/10">
                <Link 
                  href="/" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/sobre" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link 
                  href="/ministerios" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ministérios
                </Link>
                <Link 
                  href="/galeria" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galeria
                </Link>
                <Link 
                  href="/contato" 
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white mb-2">
              <span className="block text-3xl md:text-4xl font-light tracking-widest mb-2">IASD</span>
              <span className="block text-6xl md:text-8xl font-bold tracking-tight">Setor Planalto</span>
              <span className="block text-2xl md:text-4xl font-light mt-4">Itumbiara - GO</span>
            </h1>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
                >
                  <i className="fab fa-instagram mr-3 text-xl"></i>
                  Siga no Instagram
                </Button>
              </a>
              <a 
                href="https://wa.me/5564999999999" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                >
                  <i className="fab fa-whatsapp mr-3 text-xl"></i>
                  Fale Conosco
                </Button>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Refined Design */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full -ml-36 -mb-36"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Heading with subtle accent line */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <i className="fas fa-hands-praying text-primary text-2xl"></i>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground text-center font-montserrat leading-tight">
                Bem-vindo à Nossa Igreja
              </h2>
            </div>

            {/* Refined paragraph with better typography */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12 font-light">
              Somos uma comunidade de fé comprometida em viver e compartilhar o amor de Jesus Cristo. 
              Aqui você encontrará um lugar de adoração genuína, comunhão autêntica e crescimento espiritual contínuo. 
              Venha fazer parte da nossa família.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <i className="fas fa-arrow-right mr-3"></i>
                Conheça Mais Sobre Nós
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Grid Layout */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nossa Missão
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto"></div>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Card 1 - Refined */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10">
                {/* Icon with subtle background */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-bible text-4xl text-primary"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  Estudo da Bíblia
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Aprofunde seu conhecimento das Escrituras através de estudos bíblicos semanais, grupos de discussão e seminários temáticos que enriquecem a fé.
                </p>
              </div>
              {/* Subtle bottom border on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>

            {/* Card 2 - Refined */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-users text-4xl text-primary"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  Comunhão
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Construa relacionamentos significativos com irmãos em Cristo em um ambiente acolhedor, familiar e verdadeiramente inclusivo.
                </p>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>

            {/* Card 3 - Refined */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-hands-helping text-4xl text-primary"></i>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-montserrat">
                  Serviço
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Participe de projetos sociais e missionários que transformam vidas em nossa comunidade e além das fronteiras.
                </p>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministérios Section - Premium Layout */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <i className="fas fa-microphone text-primary text-2xl"></i>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nossos Ministérios
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Conheça os programas e iniciativas que movem nossa comunidade de fé
            </p>
          </div>

          {/* Three Ministry Cards - Clean Design with PNG Logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Heróis da Fé */}
            <div className="group text-center">
              <div className="mb-8 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img src="/herois-da-fe-logo.png" alt="Heróis da Fé" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-4">
                Heróis da Fé
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Um ministério dedicado a inspirar e fortalecer a fé através de histórias de coragem e perseverança na vida cristã.
              </p>
            </div>

            {/* Sons do Céu */}
            <div className="group text-center">
              <div className="mb-8 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img src="/sons-do-ceu-logo.png" alt="Sons do Céu" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-4">
                Sons do Céu
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Ministério de música e adoração que celebra a Deus através de cânticos e apresentações inspiradoras.
              </p>
            </div>

            {/* Impacto Jovem Adventista */}
            <div className="group text-center">
              <div className="mb-8 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img src="/impacto-jovem-logo.png" alt="Impacto Jovem Adventista" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-4">
                Impacto Jovem Adventista
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Movimento de jovens comprometidos em fazer diferença na sociedade e viver os valores cristãos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Refined */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-6">
              Nossa Comunidade
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Momentos de fé, comunhão e transformação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="/community-worship.jpg" 
                alt="Culto de adoração" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-semibold text-xl">Adoração</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="/youth-ministry.jpg" 
                alt="Ministério jovem" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-semibold text-xl">Jovens</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="/bible-study.jpg" 
                alt="Estudo bíblico" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-semibold text-xl">Estudo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Gallery */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <i className="fas fa-images text-primary text-2xl"></i>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-4">
              Galeria de Momentos
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Explore os instantes que definem nossa jornada de fé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['/hero-church.jpg', '/prayer-hands.jpg', '/community-worship.jpg', '/youth-ministry.jpg'].map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer">
                <img 
                  src={img}
                  alt="Galeria" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <i className="fas fa-search text-white text-3xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Streaming - Premium */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <i className="fas fa-video text-primary text-2xl"></i>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-4">
              Transmissão ao Vivo
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Acompanhe nossos cultos em tempo real
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative w-full bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/GYKKjHq_EKE?autoplay=0&controls=1&modestbranding=1"
                  title="Transmissão ao Vivo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: 'fa-calendar', title: 'Próxima Transmissão', desc: 'Sábado às 10h30' },
                { icon: 'fa-youtube', title: 'YouTube', desc: 'Inscreva-se no canal' },
                { icon: 'fa-mobile-alt', title: 'Aplicativo', desc: 'Disponível em breve' }
              ].map((item, idx) => (
                <div key={idx} className="bg-background border border-border/50 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300 group">
                  <i className={`fas ${item.icon} text-5xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-montserrat">{item.title}</h3>
                  <p className="text-muted-foreground font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact - Refined */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <i className="fas fa-map-location-dot text-primary text-2xl"></i>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-montserrat mb-4">
              Nos Visite
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Venha fazer parte da nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-96 lg:h-full min-h-96 border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8243087829!2d-49.2969!3d-18.9769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd4a0a0a0a0a0b%3A0x0!2sRua%20Sumar%C3%A9%2C%20628%20-%20Setor%20Planalto%2C%20Itumbiara%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Address Card */}
              <div className="bg-card border border-border/50 rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-location-dot text-primary text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-montserrat mt-1">
                    Endereço
                  </h3>
                </div>
                <p className="text-lg text-foreground font-semibold mb-1">
                  Rua Sumaré, 628
                </p>
                <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                  Setor Planalto<br />
                  Itumbiara - GO
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  <i className="fas fa-directions mr-2"></i>
                  Ver no Mapa
                </Button>
              </div>

              {/* Contact Card */}
              <div className="bg-card border border-border/50 rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-phone text-primary text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-montserrat mt-1">
                    Contato
                  </h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-medium uppercase tracking-wide">Telefone</p>
                    <p className="text-lg text-foreground font-semibold">(64) 99999-9999</p>
                  </div>
                  <div className="h-px bg-border/30"></div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-lg text-foreground font-semibold">contato@iasdplanalto.com.br</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card border border-border/50 rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <i className="fas fa-clock text-primary text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-montserrat mt-1">
                    Horários
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-primary mt-1 text-sm"></i>
                    <span className="text-foreground"><span className="font-semibold">Sábado:</span> <span className="text-muted-foreground">9h00 - Escola Sabatina</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-primary mt-1 text-sm"></i>
                    <span className="text-foreground"><span className="font-semibold">Sábado:</span> <span className="text-muted-foreground">10h30 - Culto Divino</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-primary mt-1 text-sm"></i>
                    <span className="text-foreground"><span className="font-semibold">Quarta:</span> <span className="text-muted-foreground">20h00 - Culto de Oração</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Refined */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full -ml-36 -mb-36"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-montserrat">
            Visite-nos
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Você é sempre bem-vindo em nossa comunidade. Venha conhecer nossa família e experimentar o amor transformador de Deus.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg">
              <i className="fas fa-map-marker-alt mr-3"></i>
              Como Chegar
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <i className="far fa-calendar-alt mr-3"></i>
              Ver Programação
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
