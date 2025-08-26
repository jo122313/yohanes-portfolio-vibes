import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, MessageCircle, X, Send, User, Code, Briefcase, Phone, GraduationCap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I\'m Yohanes\' AI assistant. Ask me anything about his skills, projects, or experience!' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  
  const roles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  
  const projects = [
    {
      title: 'JobConnect Platform',
      description: 'A web-based recruitment platform designed to simplify and streamline the hiring process. Enables employers to post jobs, manage applications, and request interviews, while job seekers can create profiles, search jobs, and receive AI-powered personalized recommendations. Includes admin panel for employer approval.',
      tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Material UI', 'JWT', 'AI Recommendations'],
      github: 'https://github.com/jo122313/talentconnect',
      live: 'https://talentconnect-eight.vercel.app/',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    },
    {
      title: 'Contact Management Application',
      description: 'A web application built to store, organize, and manage user contacts with LinkedIn login integration for authentication. Features role-based access control, email invitations to contacts, and real-time Ethiopian banks exchange rate display as an integrated feature.',
      tech: ['.NET 8', 'React.js', 'SQL Server', 'LinkedIn API', 'Email Integration', 'Role-based Access'],
      github: 'https://github.com/jo122313/ContactManagementApp',
      live: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    },
    {
      title: 'Ethiopian Banks Foreign Exchange Rate',
      description: 'Real-time foreign exchange rate tracker for Ethiopian banks. Displays current exchange rates, historical data, and currency conversion tools.',
      tech: ['React', 'API Integration', 'Chart.js', 'Responsive Design'],
      github: 'https://github.com/jo122313/ethiopian-banks-exchange',
      live: '#',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
    }
  ];

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React.js/MERN Stack', level: 85 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'REST API Development', level: 85 },
    { name: 'MongoDB/MySQL/PostgreSQL', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'C# (.NET)', level: 70 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Figma/UI-UX Design', level: 75 },
    { name: 'Power BI/Data Visualization', level: 70 },
    { name: 'Agile/Scrum', level: 80 }
  ];

  const experiences = [
    {
      title: 'MERN Stack & .NET Developer',
      company: 'Africom Technologies',
      type: 'Internship',
      duration: 'Student Internship',
      description: 'Gained hands-on experience in full-stack development using MERN stack (MongoDB, Express.js, React, Node.js) and .NET framework. Worked on real-world projects and collaborated with experienced developers.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', '.NET', 'C#', 'JavaScript']
    }
  ];

  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    
    const typeWriter = () => {
      if (index < currentText.length) {
        setTypedText(currentText.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    };
    
    typeWriter();
  }, [currentRole]);

  const handleChatSubmit = () => {
    if (!currentMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: currentMessage }]);
    
    // Simple bot responses
    const responses = [
      "Yohanes has internship experience at Africom Technologies as a MERN Stack & .NET Developer, plus 3+ years of overall development experience.",
      "He's proficient in JavaScript/TypeScript, React, Node.js, Python, Java, C++, and .NET framework with hands-on project experience.",
      "As a Debre Berhan University student, Yohanes combines academic knowledge with practical industry experience from his internship.",
      "Yohanes is passionate about creating efficient, scalable solutions and loves learning new technologies across multiple programming languages.",
      "You can contact him at yohanestamirat2023@gmail.com for collaboration or job opportunities!"
    ];
    
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: 'bot', message: randomResponse }]);
    }, 1000);
    
    setCurrentMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              YT
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <img 
              src="/Myimg.jpg" 
              alt="Yohanes Tamirat" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-2xl animate-fade-in"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Yohanes</span>
          </h1>
          <div className="text-2xl md:text-4xl mb-8 h-12 animate-fade-in">
            I'm a <span className="text-purple-400 font-semibold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300 animate-fade-in">
            Software Engineer & Full-Stack Developer with industry experience
          </p>
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a href="https://github.com/jo122313" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yohanes-tamirat-890a99369?fromQR=1" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/yoha422?igsh=MTFibnRiaTh5Z3R3dQ%3D%3D&utm_source=qr" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="mailto:yohanestamirat2023@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated Software Engineer and graduate from Debre Berhan University with hands-on industry experience 
                at Africom Technologies. My journey in technology combines academic excellence with practical application 
                in real-world development environments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern web technologies including MERN stack and .NET framework, with proficiency in 
                multiple programming languages. My internship experience has given me valuable insights into professional 
                software development practices and team collaboration.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Download CV
                </Button>
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all">
                <GraduationCap className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-gray-400">Debre Berhan University Software Engineering Graduate</p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all">
                <Building className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-gray-400">Africom Technologies Intern</p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all">
                <Code className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-gray-400">Writing maintainable and efficient code</p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all">
                <Briefcase className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="font-semibold mb-2">Problem Solving</h3>
                <p className="text-sm text-gray-400">Analytical thinking and creative solutions</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-300">
                      <span className="flex items-center">
                        <Building size={16} className="mr-2 text-purple-400" />
                        {exp.company}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-purple-400" size={20} />
                    <span>yohanestamirat2023@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-purple-400" size={20} />
                    <span>Available upon request</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white/5 border-white/10">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Your Email" 
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <Button
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:scale-110 transition-all"
          >
            <MessageCircle size={24} />
          </Button>
        ) : (
          <Card className="w-80 h-96 bg-black/90 border-white/20 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <h3 className="font-semibold">Chat with AI Assistant</h3>
              <Button
                onClick={() => setIsChatOpen(false)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <X size={16} />
              </Button>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-white/10 text-gray-300'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button 
                  onClick={handleChatSubmit}
                  size="sm"
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 text-center">
        <p className="text-gray-400">
          © 2024 Yohanes Tamirat.
        </p>
      </footer>
    </div>
  );
};

export default Index;