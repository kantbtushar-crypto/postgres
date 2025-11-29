import React, { useState } from 'react';
import { Menu, X, Database, Check, Star, ShieldCheck, Mail, MapPin, ArrowRight, Twitter, Linkedin, Facebook, Quote, Terminal } from 'lucide-react';
import { COURSES, TESTIMONIALS, FAQS } from './constants';
import { BookSyllabus } from './components/BookSyllabus';
import { CourseCard } from './components/CourseCard';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to manage which book is currently active in the syllabus section
  const [selectedBookLevel, setSelectedBookLevel] = useState<string | null>(null);

  const handleOpenCourse = (level: string) => {
    setSelectedBookLevel(level);
    scrollToSectionId('syllabus');
  };

  const handleCloseBook = () => {
    setSelectedBookLevel(null);
  };

  const scrollToSectionId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSectionId(id);
    setIsMobileMenuOpen(false);
  };

  // SQL Snippets for Background Animation
  const SQL_SNIPPETS = [
    "SELECT * FROM career_growth WHERE speed = 'FAST';",
    "UPDATE skills SET mastery = true;",
    "CREATE INDEX idx_success ON students(salary);",
    "INSERT INTO companies (name) VALUES ('Google'), ('Amazon');",
    "VACUUM FULL ANALYZE confidence_boost;",
    "GRANT ALL PRIVILEGES TO hard_work;",
    "COMMIT; -- Career upgrade complete",
    "SELECT name, salary_hike FROM placements ORDER BY hike DESC;",
    "ALTER TABLE lifestyle ADD COLUMN remote_work BOOLEAN;",
    "DROP TABLE financial_worries;",
    "BEGIN TRANSACTION; -- Start Learning",
    "EXPLAIN ANALYZE SELECT future FROM dreams;",
    "checkpoint_completion_target = 0.9;"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-postgres-50 p-2 rounded-lg group-hover:bg-postgres-100 transition-colors">
                 <Database className="h-6 w-6 text-postgres-600" />
              </div>
              <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">Postgres<span className="text-postgres-600">Mastery</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="text-slate-600 hover:text-postgres-600 font-medium transition-colors text-sm uppercase tracking-wide">Courses</a>
              <a href="#syllabus" onClick={(e) => handleNavClick(e, 'syllabus')} className="text-slate-600 hover:text-postgres-600 font-medium transition-colors text-sm uppercase tracking-wide">Syllabus</a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="text-slate-600 hover:text-postgres-600 font-medium transition-colors text-sm uppercase tracking-wide">Reviews</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-600 hover:text-postgres-600 font-medium transition-colors text-sm uppercase tracking-wide">About</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-postgres-600 transition-colors">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-lg absolute w-full z-50">
             <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="block text-slate-600 font-medium py-2">Courses</a>
             <a href="#syllabus" onClick={(e) => handleNavClick(e, 'syllabus')} className="block text-slate-600 font-medium py-2">Syllabus</a>
             <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="block text-slate-600 font-medium py-2">Reviews</a>
             <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block text-slate-600 font-medium py-2">About</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Dynamic Lines */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 z-0">
           {/* Static Grid */}
           <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
           
           {/* Moving Data Beams */}
           <div className="absolute left-[15%] w-[1px] h-32 bg-gradient-to-b from-transparent via-postgres-400 to-transparent animate-beam opacity-0" style={{ animationDuration: '4s', animationTimingFunction: 'ease-in-out' }}></div>
           <div className="absolute left-[35%] w-[1px] h-48 bg-gradient-to-b from-transparent via-indigo-300 to-transparent animate-beam opacity-0" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
           <div className="absolute left-[60%] w-[1px] h-24 bg-gradient-to-b from-transparent via-purple-300 to-transparent animate-beam opacity-0" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
           <div className="absolute left-[85%] w-[1px] h-64 bg-gradient-to-b from-transparent via-postgres-300 to-transparent animate-beam opacity-0" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-postgres-50 text-postgres-800 text-sm font-semibold mb-8 animate-fade-in-up border border-postgres-100 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-postgres-600 mr-2 animate-pulse"></span>
            India's #1 PostgreSQL Learning Platform
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight">
            Master the World's Most<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-postgres-600 via-indigo-600 to-purple-600 animate-gradient-x">Advanced Database</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            From "SELECT *" to High Availability Architecture. 
            Structured courses designed for Indian developers, priced for maximum value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="px-8 py-4 bg-postgres-600 text-white rounded-full font-bold text-lg shadow-xl shadow-postgres-200/50 hover:bg-postgres-700 transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center">
              View Courses
            </a>
            <a href="#syllabus" onClick={(e) => handleNavClick(e, 'syllabus')} className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md">
              <BookOpenIcon className="mr-2 h-5 w-5" />
              See Syllabus
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500 font-medium">
            <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-100"><ShieldCheck className="h-4 w-4 mr-2 text-postgres-500"/> Trusted by 5,000+ Students</div>
            <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-100"><Star className="h-4 w-4 mr-2 text-yellow-500"/> 4.9/5 Average Rating</div>
          </div>
        </div>
        
        {/* Soft Background Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-postgres-100/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-slate-50 relative scroll-mt-24">
        {/* subtle grid pattern for visual consistency */}
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-postgres-600 font-bold tracking-wider uppercase text-sm mb-2 block">Career Paths</span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">Choose Your Level</h2>
            <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">Structured learning paths tailored for every stage of your database engineering career.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course, idx) => (
              <div key={course.id} className="h-full">
                <CourseCard 
                  course={course} 
                  onViewSyllabus={() => handleOpenCourse(course.level)}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <div className="inline-flex flex-wrap justify-center items-center bg-white px-8 py-4 rounded-xl border border-slate-200 shadow-sm text-slate-600 text-sm gap-4">
                <span className="font-semibold text-slate-900">Secure Payment via:</span> 
                <span className="flex items-center gap-4 opacity-70">
                  <span>UPI</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>PhonePe</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>GPay</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>Paytm</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>Cards</span>
                </span>
             </div>
          </div>
        </div>
      </section>

      {/* Book Syllabus Section */}
      <section id="syllabus" className="bg-white border-y border-slate-100 scroll-mt-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none"></div>
         <BookSyllabus 
            selectedLevel={selectedBookLevel} 
            onClose={handleCloseBook}
            onSelectLevel={handleOpenCourse}
         />
      </section>

      {/* Why Us / Features */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-postgres-600 font-bold tracking-wider uppercase text-sm mb-2 block">The PostgresMastery Difference</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Why 5,000+ developers choose us</h2>
                <div className="space-y-8">
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white text-postgres-600 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                        <Database className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-slate-900">Production-Grade Curriculum</h4>
                      <p className="mt-2 text-slate-500 leading-relaxed">Most courses teach you "how". We teach you "why". Learn the internals that actually matter in production environments.</p>
                    </div>
                  </div>
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white text-postgres-600 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                        <Check className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-slate-900">Hinglish Mentorship</h4>
                      <p className="mt-2 text-slate-500 leading-relaxed">Complex topics like MVCC and WAL are hard. Our localized explanation style ensures you actually understand them.</p>
                    </div>
                  </div>
                  <div className="flex group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white text-postgres-600 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                        <ArrowRight className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-slate-900">Job-Ready Skills</h4>
                      <p className="mt-2 text-slate-500 leading-relaxed">We focus on query tuning and architecture—the exact skills that crack interviews at top product companies.</p>
                    </div>
                  </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-postgres-200/20 rounded-3xl transform rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Students learning" className="relative rounded-2xl shadow-2xl border border-slate-100" />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 animate-bounce-slow">
                   <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-slate-800 font-bold text-lg leading-tight">"The simplified approach to complex topics is unmatched."</p>
                   <p className="text-slate-500 text-sm mt-3 font-semibold flex items-center">
                      <div className="w-6 h-6 rounded-full bg-slate-200 mr-2"></div>
                      Amit, Senior DBA
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials - REDESIGNED with CODE BACKGROUND */}
      <section id="reviews" className="py-24 relative overflow-hidden bg-slate-900 scroll-mt-24">
        
        {/* CSS Injection for Vertical Marquee */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          .animate-marquee-vertical {
            animation: marquee-vertical 40s linear infinite;
          }
        `}} />

        {/* Animated Code Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 z-10"></div>
           {/* Increased opacity to make code more visible */}
           <div className="animate-marquee-vertical flex flex-col gap-6 p-4 opacity-30">
              {[...SQL_SNIPPETS, ...SQL_SNIPPETS, ...SQL_SNIPPETS, ...SQL_SNIPPETS].map((snippet, idx) => (
                  <div key={idx} className="flex items-center font-mono text-sm text-postgres-400 whitespace-nowrap">
                     <span className="text-slate-600 mr-4 select-none w-8 text-right">{(idx + 1) * 10}</span>
                     <span>{snippet}</span>
                  </div>
              ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
           <div className="text-center mb-20">
             <div className="inline-flex items-center justify-center p-2 bg-slate-800/50 rounded-full mb-4 border border-slate-700/50 backdrop-blur-sm shadow-lg">
                <Terminal size={14} className="text-postgres-400 mr-2" />
                <span className="text-postgres-200 text-xs font-mono flex items-center">
                  postgres_mastery=# SELECT * FROM reviews;<span className="ml-1 w-2 h-4 bg-postgres-400 animate-pulse"></span>
                </span>
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
               Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-postgres-400 to-indigo-400">Success Stories</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">
               Don't just take our word for it. See how our curriculum is executing career upgrades across India.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(item => (
                <div 
                   key={item.id} 
                   className="group relative bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800/60 hover:border-postgres-500/30 flex flex-col h-full overflow-hidden"
                >
                   {/* Decorative Quote */}
                   <div className="absolute -top-4 -right-4 text-slate-700/50 group-hover:text-postgres-900/50 transition-colors duration-500">
                      <Quote size={120} fill="currentColor" strokeWidth={0} />
                   </div>

                   {/* Stars */}
                   <div className="flex space-x-1 mb-6 text-amber-400 relative z-10">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                   </div>

                   {/* Content */}
                   <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow relative z-10 font-medium font-serif italic">
                     "{item.content}"
                   </p>

                   {/* Author */}
                   <div className="flex items-center pt-6 border-t border-slate-700/50 relative z-10 mt-auto">
                      <div className="relative">
                        <div className="absolute inset-0 bg-postgres-500 rounded-full blur-sm opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                        <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover border-2 border-slate-600 group-hover:border-postgres-400 transition-colors relative" />
                      </div>
                      <div className="ml-4">
                         <h4 className="font-bold text-white text-base">{item.name}</h4>
                         <div className="text-xs font-bold text-postgres-400 uppercase tracking-wide">{item.role}</div>
                         <div className="text-xs text-slate-500 font-medium">{item.company}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-postgres-200 transition-colors bg-slate-50/50">
                   <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                     <span className="text-postgres-500 mr-3 text-xl">?</span> 
                     {faq.question}
                   </h3>
                   <p className="text-slate-600 pl-8 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Instructor Bio */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         {/* Background Grid Pattern on Dark */}
         <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))] opacity-10"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-10">Meet Your Instructor</h2>
            <div className="flex flex-col items-center">
               <div className="relative mb-8">
                  <div className="absolute inset-0 bg-postgres-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="h-40 w-40 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center text-4xl overflow-hidden relative z-10">
                     <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Instructor" className="object-cover h-full w-full opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
               </div>
               
               <h3 className="text-3xl font-bold mb-2">Vikram Malhotra</h3>
               <p className="text-postgres-400 font-medium mb-8 tracking-wide uppercase text-sm">Principal Database Engineer (15+ Years Exp)</p>
               
               <blockquote className="text-xl text-slate-300 leading-relaxed max-w-2xl italic font-serif border-l-4 border-postgres-600 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                 "I've scaled databases for some of India's largest startups. My mission is to bridge the gap between college theory and production reality. I don't just teach syntax; I teach you how to think like a database architect."
               </blockquote>
            </div>
         </div>
      </section>

      {/* Footer - 4 Column Layout */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
             
             {/* Column 1: Brand */}
             <div>
                <div className="flex items-center text-white font-bold text-xl mb-6">
                  <div className="bg-slate-900 p-1.5 rounded border border-slate-800 mr-2">
                     <Database className="h-5 w-5 text-postgres-500" /> 
                  </div>
                  PostgresMastery
                </div>
                <p className="mb-6 leading-relaxed text-slate-500">
                   Empowering Indian developers with world-class database education. Master the stack, upgrade your career.
                </p>
                <div className="flex space-x-4">
                   <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                   <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                   <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></a>
                </div>
             </div>
             
             {/* Column 2: Courses */}
             <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Our Courses</h4>
                <ul className="space-y-3">
                   <li><a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="hover:text-postgres-400 flex items-center"><ArrowRight size={12} className="mr-2 opacity-50"/> Foundation (L1)</a></li>
                   <li><a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="hover:text-postgres-400 flex items-center"><ArrowRight size={12} className="mr-2 opacity-50"/> Intermediate (L2)</a></li>
                   <li><a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="hover:text-postgres-400 flex items-center"><ArrowRight size={12} className="mr-2 opacity-50"/> Advanced (L3)</a></li>
                   <li><a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="hover:text-postgres-400 flex items-center"><ArrowRight size={12} className="mr-2 opacity-50"/> Expert (L4)</a></li>
                </ul>
             </div>
             
             {/* Column 3: Platform (Fills the gap) */}
             <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Platform</h4>
                <ul className="space-y-3">
                   <li><a href="#syllabus" onClick={(e) => handleNavClick(e, 'syllabus')} className="hover:text-postgres-400">Interactive Syllabus</a></li>
                   <li><a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="hover:text-postgres-400">Success Stories</a></li>
                </ul>
             </div>
             
             {/* Column 4: Contact & Legal */}
             <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact & Legal</h4>
                <ul className="space-y-4">
                   <li className="flex items-start">
                      <MapPin size={18} className="mr-3 text-postgres-600 flex-shrink-0 mt-0.5"/> 
                      <span>HSR Layout, Sector 4,<br/>Bangalore, KA 560102</span>
                   </li>
                   <li className="flex items-center">
                      <Mail size={18} className="mr-3 text-postgres-600 flex-shrink-0"/> 
                      <a href="mailto:support@postgresmastery.in" className="hover:text-white">support@postgresmastery.in</a>
                   </li>
                   <li className="pt-4 border-t border-slate-900 flex flex-col space-y-2 text-xs">
                      {/* <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-postgres-400">About Us</a> */}
                      {/* <a href="#" className="hover:text-postgres-400">Privacy Policy</a> */}
                      {/* <a href="#" className="hover:text-postgres-400">Terms of Service</a> */}
                   </li>
                </ul>
             </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-xs flex flex-col md:flex-row justify-between items-center">
             <p>&copy; {new Date().getFullYear()} PostgresMastery India. All rights reserved.</p>
             <p className="mt-2 md:mt-0">Made with ❤️ in Bangalore</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Icon
const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export default App;