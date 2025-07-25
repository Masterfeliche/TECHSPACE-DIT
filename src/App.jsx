import { useState } from 'react'
import { Calendar, TrendingUp as Trending, MessageSquare, Send, ChevronRight, Github, Linkedin, Twitter, Code, Users, Trophy, MapPin, Clock, Mail, Phone, MessageCircle } from 'lucide-react';


function App() {
  // Add this state and handlers
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'feedback',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send to API)
    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      category: 'feedback',
      subject: '',
      message: ''
    });
  };

  return (

    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">DIT-TechSpace</div>
              <div className="hidden md:flex space-x-8">
                <a href="#events" className="hover:text-blue-200">Events</a>
                <a href="#hackathons" className="hover:text-blue-200">Hackathons</a>
                <a href="#trending" className="hover:text-blue-200">Trending</a>
                <a href="#projects" className="hover:text-blue-200">Projects</a>
                <a href="#team" className="hover:text-blue-200">Team</a>
                <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
                <a href="#contact" className="hover:text-blue-200">Contact</a>
              </div>
            </div>
          </nav>


          {/* Upcoming Events Banner */}
          <div className="bg-indigo-800 bg-opacity-50 py-3">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 w-full">
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-blue-200 text-sm sm:text-base">Next Event:</span>
        </span>
        <span className="font-semibold text-base sm:text-lg">AI in Healthcare Workshop</span>
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm sm:text-base">March 15, 2026</span>
        </span>
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm sm:text-base">Main Auditorium</span>
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-auto">
        <span className="mr-0 mb-2 sm:mr-4 sm:mb-0 text-sm sm:text-base">Speaker: Dr. Esther Kazinja</span>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-full text-sm transition duration-300 w-full sm:w-auto">
          Register Now
        </button>
      </div>
    </div>
  </div>
</div>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Where Tech Minds Connect
              </h1>
              <p className="text-xl mb-8">
                Join the largest tech community at our university. Learn, share, and grow together.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition duration-300">
                Join Now <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" 
                alt="Tech Community" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 bg-gray-100">
        <div className="flex items-center mb-12">
            <Trophy className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">Hackathons</h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: "HealthTech Innovation Challenge",
                date: "April 15-16, 2024",
                prize: "$500",
                description: "Build innovative solutions for healthcare challenges using AI and IoT",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                status: "Registration Open",
                participants: "150+ registered"
              },
              {
                title: "Sustainable Future Hackathon",
                date: "May 20-21, 2024",
                prize: "$300",
                description: "Create tech solutions for environmental sustainability",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
                status: "Coming Soon",
                participants: "Opens March 30"
              },
              {
                title: "Fintech Revolution",
                date: "June 10-11, 2024",
                prize: "$400",
                description: "Revolutionize financial services with blockchain and AI",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                status: "Coming Soon",
                participants: "Opens April 15"
              },
              {
                title: "Smart City Challenge",
                date: "July 5-6, 2024",
                prize: "$600",
                description: "Design solutions for future smart cities",
                image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
                status: "Coming Soon",
                participants: "Opens May 1"
              }
            ].map((hackathon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className='relative'>
                  <img src={hackathon.image} alt={hackathon.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {hackathon.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{hackathon.title}</h3>
                    <div className="text-green-600 font-bold">{hackathon.prize}</div>
                    
                  </div>

                  <p className="text-gray-600 mb-4">{hackathon.description}</p>

                   <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-blue-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {hackathon.date}
                    </div>
                    <div className="text-gray-500">{hackathon.participants}</div>
                  </div>
                  <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
                
                  
              </div>
            ))
            }
          </div>

      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Calendar className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>
           <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web3 Workshop",
                date: "DEC 15, 2026",
                description: "Deep dive into blockchain and decentralized applications",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI/ML Hackathon",
                date: "March 22, 2026",
                description: "24-hour coding challenge focused on artificial intelligence",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Tech Career Fair",
                date: "April 5, 2026",
                description: "Connect with top tech companies and startups",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-blue-600 mb-2">{event.date}</p>
                   <p className="text-gray-600">{event.description}</p>
                    <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
           </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section id="trending" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Trending className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">Trending in Tech</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                topic: "Artificial Intelligence",
                description: "Latest developments in AI and machine learning",
                tags: ["AI", "ML", "Deep Learning"]
              },
              {
                topic: "Quantum Computing",
                description: "Breaking through computational barriers",
                tags: ["Quantum", "Computing", "Future Tech"]
              },
              {
                topic: "Cybersecurity",
                description: "Protecting digital assets in 2026",
                tags: ["Security", "Privacy", "Blockchain"]
              },
              {
                topic: "Green Tech",
                description: "Sustainable solutions for tomorrow",
                tags: ["Sustainability", "CleanTech", "Environment"]
              }

            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-3">{item.topic}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">Student Projects</h2>
          </div>
          {/* Coming Soon Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-12 text-center text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Projects Showcase Coming Soon</h3>
              <p className="text-xl mb-8">
                We're building a platform to showcase amazing projects from our tech community.
                Stay tuned for innovative solutions and groundbreaking ideas!
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* Team Section */}
      <section id="team" className="py-20 bg-gray-100">
         <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Users className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          
          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Leadership</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. James Wilson",
                  role: "Faculty Advisor",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                  description: "Computer Science Professor with 15 years of industry experience"
                },
                {
                  name: "Alex Thompson",
                  role: "President",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
                  description: "Final year Computer Science student, passionate about AI and ML"
                },
                {
                  name: "Sofia Chen",
                  role: "Vice President",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
                  description: "Software Engineering major with focus on blockchain technology"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "David Kumar",
                role: "Events Coordinator",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emma Martinez",
                role: "Technical Lead",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Ryan Park",
                role: "Marketing Head",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Lisa Wang",
                role: "Community Manager",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-blue-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>

         </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <MessageSquare className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">What Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Computer Science",
                quote: "DIT-TechTalks helped me stay updated with the latest tech trends and connect with like-minded individuals.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "Software Engineering",
                quote: "The events and workshops have been invaluable for my professional development. I've learned so much!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emily Rodriguez",
                role: "Data Science",
                quote: "Being part of this community has opened up numerous opportunities and helped me grow my network.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-100">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col md:flex-row md:items-center mb-8">
      <MessageCircle className="w-8 h-8 text-blue-600 mr-4 mb-2 md:mb-0" />
      <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Information */}
      <div>
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's Build Together</h3>
          <p className="text-gray-600 mb-6 sm:mb-8">
            We value your feedback and ideas. Whether you want to contribute, suggest improvements, or just say hello, we're here to listen and grow together.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 text-sm">info@dit-techtalks.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600 text-sm">(255) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 text-sm">University Campus, TT-7</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition duration-300">
                <Twitter className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition duration-300">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition duration-300">
                <Github className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div>
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-lg mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="feedback">General Feedback</option>
                <option value="suggestion">Suggestion</option>
                <option value="collaboration">Collaboration</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this about?"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share your thoughts with us..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DIT-TechSpace</h3>
              <p className="text-gray-400">Connecting tech enthusiasts at our university.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#events" className="hover:text-white">Events</a></li>
                <li><a href="#hackathons" className="hover:text-white">Hackathons</a></li>
                <li><a href="#trending" className="hover:text-white">Trending</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#team" className="hover:text-white">Team</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@dit-techtalks.com</li>
                <li>Phone: (255) 456-7890</li>
                <li>Address: University Campus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><Twitter /></a>
                <a href="#" className="hover:text-blue-400"><Linkedin /></a>
                <a href="#" className="hover:text-blue-400"><Github /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DIT-TechSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>

    

         


      </div>
    </>
  );

}

export default App;
