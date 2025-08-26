import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, MessageCircle, X, Send, User, Code, Briefcase, Phone, GraduationCap, Building, Instagram } from 'lucide-react';
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Yohanes Tamirat</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Skills</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-accent opacity-30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-floating"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-floating-delayed"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="animate-slide-in-up">
            <div className="relative inline-block mb-8">
              <img 
                src="/Myimg.jpg" 
                alt="Yohanes Tamirat" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary glow-primary hover-lift"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
            </div>
          </div>
          
          <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Yohanes</span>
            </h1>
          </div>
          
          <div className="animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-2xl md:text-4xl mb-8 h-12">
              I'm a <span className="gradient-text font-semibold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>
          
          <div className="animate-slide-in-up" style={{animationDelay: '0.6s'}}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Software Engineer & Full-Stack Developer with industry experience
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-slide-in-up" style={{animationDelay: '0.8s'}}>
            <a href="https://github.com/jo122313" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover-lift transition-all duration-300 hover:text-primary group">
              <Github className="w-8 h-8 group-hover:animate-pulse" />
            </a>
            <a href="https://www.linkedin.com/in/yohanes-tamirat-890a99369?fromQR=1" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover-lift transition-all duration-300 hover:text-primary group">
              <Linkedin className="w-8 h-8 group-hover:animate-pulse" />
            </a>
            <a href="https://www.instagram.com/yoha422?igsh=MTFibnRiaTh5Z3R3dQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover-lift transition-all duration-300 hover:text-primary group">
              <Instagram className="w-8 h-8 group-hover:animate-pulse" />
            </a>
            <a href="mailto:yohanestamirat2023@gmail.com" className="p-3 rounded-full glass hover-lift transition-all duration-300 hover:text-primary group">
              <Mail className="w-8 h-8 group-hover:animate-pulse" />
            </a>
          </div>
          
          <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Software Engineer and graduate from Debre Berhan University with hands-on industry experience 
                at Africom Technologies. My journey in technology combines academic excellence with practical application 
                in real-world development environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies including MERN stack and .NET framework, with proficiency in 
                multiple programming languages. My internship experience has given me valuable insights into professional 
                software development practices and team collaboration.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-gradient-primary hover:glow-primary">
                  Download CV
                </Button>
                <Button variant="outline" className="hover-lift">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <Card className="glass p-6 text-center hover-lift glow-card">
                <GraduationCap className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">Debre Berhan University Software Engineering Graduate</p>
              </Card>
              <Card className="glass p-6 text-center hover-lift glow-card">
                <Building className="mx-auto mb-4 text-secondary" size={32} />
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">Africom Technologies Intern</p>
              </Card>
              <Card className="glass p-6 text-center hover-lift glow-card">
                <Code className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Writing maintainable and efficient code</p>
              </Card>
              <Card className="glass p-6 text-center hover-lift glow-card">
                <Briefcase className="mx-auto mb-4 text-secondary" size={32} />
                <h3 className="font-semibold mb-2">Problem Solving</h3>
                <p className="text-sm text-muted-foreground">Analytical thinking and creative solutions</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass p-8 hover-lift glow-card animate-slide-in-up">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <span className="flex items-center">
                        <Building size={16} className="mr-2 text-primary" />
                        {exp.company}
                      </span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
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
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass overflow-hidden hover-lift glow-card group animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
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
      <section id="skills" className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out glow-primary"
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
          <h2 className="text-4xl font-bold mb-16 gradient-text">
            Let's Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in-left">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary" size={20} />
                    <span>yohanestamirat2023@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-primary" size={20} />
                    <span>Available upon request</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="glass p-8 animate-slide-in-right">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Your Email" 
                    type="email"
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:glow-primary">
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
            className="w-14 h-14 rounded-full bg-gradient-primary hover:glow-primary shadow-lg hover-lift"
          >
            <MessageCircle size={24} />
          </Button>
        ) : (
          <Card className="w-80 h-96 glass flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border/30">
              <h3 className="font-semibold">Chat with AI Assistant</h3>
              <Button
                onClick={() => setIsChatOpen(false)}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </Button>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'glass text-muted-foreground'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border/30">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  onClick={handleChatSubmit}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-surface text-center">
        <p className="text-muted-foreground">
          © 2024 Yohanes Tamirat.
        </p>
      </footer>
    </div>
  );
};

export default Index;