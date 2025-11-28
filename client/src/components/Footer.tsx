export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section with Logo and Description */}
        <div className="border-b border-blue-400/20">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Logo and Church Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <img 
                    src="/logo-adventista.png" 
                    alt="Logo IASD" 
                    className="h-20 shadow-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold font-montserrat text-white">IASD</h3>
                  <p className="text-blue-200 text-sm">Setor Planalto</p>
                </div>
                <p className="text-blue-100 font-light leading-relaxed text-sm mb-6">
                  Uma comunidade de fé comprometida em viver e compartilhar o amor de Jesus Cristo.
                </p>
                {/* Social Icons */}
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500/20 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a 
                    href="https://wa.me/5564999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500/20 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-whatsapp text-white"></i>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500/20 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-youtube text-white"></i>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-facebook text-white"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                  Navegação
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/sobre" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a href="/ministerios" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                      Ministérios
                    </a>
                  </li>
                  <li>
                    <a href="/galeria" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                      Galeria
                    </a>
                  </li>
                  <li>
                    <a href="/contato" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                      Contato
                    </a>
                  </li>
                </ul>
              </div>

              {/* Ministries */}
              <div>
                <h4 className="text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                  Ministérios
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-star text-blue-400 text-xs"></i>
                      Heróis da Fé
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-music text-blue-400 text-xs"></i>
                      Sons do Céu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-bolt text-blue-400 text-xs"></i>
                      Impacto Jovem
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fas fa-hands-praying text-blue-400 text-xs"></i>
                      Cultos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold font-montserrat mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                  Contato
                </h4>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-map-marker-alt text-blue-400 mt-1 text-lg"></i>
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold mb-1">Endereço</p>
                      <p className="text-blue-100 font-light">
                        Rua Sumaré, 628<br />
                        Setor Planalto<br />
                        Itumbiara - GO
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-phone text-blue-400 mt-1 text-lg"></i>
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold mb-1">Telefone</p>
                      <p className="text-blue-100 font-light">(64) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-envelope text-blue-400 mt-1 text-lg"></i>
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold mb-1">Email</p>
                      <p className="text-blue-100 font-light break-all">contato@iasdplanalto.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Times Section */}
        <div className="border-b border-blue-400/20 bg-blue-950/50">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-calendar text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold">Sábado</p>
                  <p className="text-white font-semibold">9h00 - Escola Sabatina</p>
                  <p className="text-white font-semibold">10h30 - Culto Divino</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-moon text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold">Quarta-feira</p>
                  <p className="text-white font-semibold">20h00 - Culto de Oração</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-video text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold">Transmissão</p>
                  <p className="text-white font-semibold">YouTube - Ao Vivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-blue-200 font-light text-sm">
                © {currentYear} Igreja Adventista do Sétimo Dia - Setor Planalto. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 text-sm font-light">
                Política de Privacidade
              </a>
              <div className="w-1 h-4 bg-blue-400/30"></div>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 text-sm font-light">
                Termos de Uso
              </a>
              <div className="w-1 h-4 bg-blue-400/30"></div>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 text-sm font-light">
                Sitemap
              </a>
            </div>
          </div>

          {/* Made with Manus */}
          <div className="mt-8 pt-8 border-t border-blue-400/20 text-center">
            <p className="text-blue-300 text-xs font-light">
              Desenvolvido com <i className="fas fa-heart text-red-500 mx-1"></i> por Manus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
