import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { AnimatedCounter } from '@/components/animated-counter';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Heart, 
  Trophy, 
  GraduationCap, 
  Stethoscope, 
  Users, 
  Megaphone,
  Dumbbell,
  Book,
  Leaf,
  Calendar,
  Handshake,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Award,
  Camera,
  Play
} from 'lucide-react';
import logoImage from '@assets/ccc14d05e5591f02aa965e4f16d3941652fa7f49_1757331204245.png';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const { toast } = useToast();
  const { ref: aboutRef, isVisible: aboutVisible } = useIntersectionObserver();
  const { ref: servicesRef, isVisible: servicesVisible } = useIntersectionObserver();
  const { ref: objectivesRef, isVisible: objectivesVisible } = useIntersectionObserver();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
    toast({
      title: `Thank you ${data.name}!`,
      description: "Your message has been received. We'll get back to you soon.",
    });
    form.reset();
  };

  const services = [
    {
      icon: Trophy,
      title: "Sports for Health & Fitness",
      description: "We believe in beating drugs with sports. Through tournaments, awareness programs, and youth engagement.",
      stats: "14 tournaments across Chennai, Ooty, Madurai, and Kodaikanal",
      partners: "Gilgal Sports Academy, DMK Sports Wing, CCJ Ministries"
    },
    {
      icon: GraduationCap,
      title: "Education & Career Growth",
      description: "Empowering the next generation through quality education and career guidance.",
      features: "Tuition centers, scholarships, career counseling by Dr. Sujith from Rotary Club"
    },
    {
      icon: Stethoscope,
      title: "Medical Services & Blood Donation",
      description: "Ensuring accessible healthcare for all communities.",
      achievements: "Major medical camp at Madurai Ambalathadi (300+ beneficiaries)",
      partners: "Christian Fellowship Hospital, Oddanchatram"
    },
    {
      icon: Users,
      title: "Community Upliftment & Tribal Rights",
      description: "Uplifting marginalized communities through skill development and legal awareness.",
      features: "Tribal rights awareness by Adv. Albert and Dr. Anbu Chezhiyan"
    },
    {
      icon: Megaphone,
      title: "Social Awareness & Campaigns",
      description: "Driving change through education, environmental action, and social inclusion.",
      activities: "Tree plantation, moral education, elderly care, social media awareness"
    }
  ];

  const objectives = [
    {
      icon: Dumbbell,
      title: "Promote Health and Fitness through Sports",
      description: "Building healthy communities through active engagement"
    },
    {
      icon: Book,
      title: "Enhance Educational Opportunities",
      description: "Creating pathways for learning and growth"
    },
    {
      icon: Stethoscope,
      title: "Ensure Accessible Medical Services",
      description: "Healthcare for all community members"
    },
    {
      icon: Users,
      title: "Foster Community Development",
      description: "Strengthening bonds and collective growth"
    },
    {
      icon: Leaf,
      title: "Engage in Holistic Activities",
      description: "Comprehensive approach to community well-being"
    },
    {
      icon: Heart,
      title: "Promote Truth and Love",
      description: "Foundation of all our community initiatives"
    }
  ];

  const partners = [
    "Gilgal Sports Academy",
    "DMK Sports Wing", 
    "CCJ Ministries",
    "Christian Sports Fellowship",
    "Florans Trust",
    "Christian Fellowship Hospital",
    "Rotary Club",
    "State Human Rights Department"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSlider />

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/30" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 ${aboutVisible ? 'animate-fade-in-up' : ''}`}>
              About Nanmai Seivom
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${aboutVisible ? 'animate-fade-in-up' : ''}`}>
              Building communities through truth, love, and dedicated service since 2014
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img 
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Community education program" 
              className="rounded-xl shadow-lg"
            />
            
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-lg text-foreground">
                  To inspire and empower communities to build better society rooted in Truth and Love.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-foreground">
                  To build a better society rooted in truth and love by engaging in diverse initiatives that empower communities. Through sports, we promote healthy lifestyles and unity; through education, we nurture knowledge and opportunities; through medical services, we ensure well-being; through community development, we uplift marginalized groups and enhance livelihoods.
                </p>
              </div>
            </div>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Journey</h3>
              <p className="text-lg text-foreground leading-relaxed">
                Founded in Madurai with a vision to combat drug addiction through sports and community engagement, Nanmai Seivom Trust has expanded its reach to tribal communities in Kodaikanal downhills. Our comprehensive approach includes sports tournaments for youth engagement, educational support, medical camps, and community development programs. We believe in the power of sports to beat drugs and create positive change in society. Our future expansion plans include reaching communities across Tamil Nadu and eventually throughout India.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 ${servicesVisible ? 'animate-fade-in-up' : ''}`}>
              What We Do
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${servicesVisible ? 'animate-fade-in-up' : ''}`}>
              Comprehensive community development through five core service areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`service-card shadow-lg border border-border ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-foreground mb-4">{service.description}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {service.stats && <p><strong>Stats:</strong> {service.stats}</p>}
                    {service.partners && <p><strong>Partners:</strong> {service.partners}</p>}
                    {service.features && <p><strong>Features:</strong> {service.features}</p>}
                    {service.achievements && <p><strong>Achievements:</strong> {service.achievements}</p>}
                    {service.activities && <p><strong>Activities:</strong> {service.activities}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-white/90">Numbers that tell our story of community transformation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={1200} suffix="+" />
              </div>
              <p className="text-lg text-white/90">Youth Engaged</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={14} />
              </div>
              <p className="text-lg text-white/90">Tournaments Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={300} suffix="+" />
              </div>
              <p className="text-lg text-white/90">Medical Beneficiaries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter target={9} suffix="+" />
              </div>
              <p className="text-lg text-white/90">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-muted/30" ref={objectivesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 ${objectivesVisible ? 'animate-fade-in-up' : ''}`}>
              Our Objectives
            </h2>
            <p className={`text-xl text-muted-foreground ${objectivesVisible ? 'animate-fade-in-up' : ''}`}>
              Six core principles guiding our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="shadow-lg border border-border">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <objective.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{objective.title}</h3>
                    <p className="text-sm text-muted-foreground">{objective.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Join us in our mission to build better communities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Autonomous Events</h3>
                <p className="text-muted-foreground mb-6">Self-organized initiatives led by our dedicated team members</p>
                <Button 
                  data-testid="button-learn-more-autonomous"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="text-secondary text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Collaborative Events</h3>
                <p className="text-muted-foreground mb-6">Partnership programs with local organizations and communities</p>
                <Button 
                  data-testid="button-join-partnership"
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Join Partnership
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Volunteer Opportunities</h3>
                <p className="text-muted-foreground mb-6">Community participation events where everyone can contribute</p>
                <Button 
                  data-testid="button-volunteer-now"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Volunteer Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Partners</h2>
            <p className="text-xl text-muted-foreground">Collaborating with amazing organizations to create lasting impact</p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {partners.concat(partners).map((partner, index) => (
                <Card key={index} className="flex-shrink-0 shadow-lg border border-border min-w-[250px] text-center">
                  <CardContent className="p-6">
                    <Heart className="text-primary text-3xl mb-4 mx-auto" />
                    <h3 className="font-bold text-primary">{partner}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Events Conducted</h2>
            <p className="text-xl text-muted-foreground">Showcasing our impact through cricket tournaments and drug awareness campaigns</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cricket Tournament Photos */}
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Cricket tournament participants"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="text-white text-4xl" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Trophy className="text-primary h-5 w-5" />
                  <h3 className="font-bold text-primary">Cricket Tournament 2024</h3>
                </div>
                <p className="text-muted-foreground text-sm">Chennai district championship with 200+ youth participants promoting sports as an alternative to drugs</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1593341646782-e0635909d428?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Drug awareness campaign"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Camera className="text-white text-4xl" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Megaphone className="text-secondary h-5 w-5" />
                  <h3 className="font-bold text-secondary">Drug Awareness Campaign</h3>
                </div>
                <p className="text-muted-foreground text-sm">Community education program in Kodaikanal tribal areas reaching 300+ families</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Youth sports championship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Award className="text-white text-4xl" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="text-primary h-5 w-5" />
                  <h3 className="font-bold text-primary">Youth Championship</h3>
                </div>
                <p className="text-muted-foreground text-sm">Inter-district sports meet in Madurai bringing together 400+ young athletes</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Community health awareness"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Stethoscope className="text-white text-4xl" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Heart className="text-secondary h-5 w-5" />
                  <h3 className="font-bold text-secondary">Health Awareness</h3>
                </div>
                <p className="text-muted-foreground text-sm">Medical camp and health education at Ooty reaching 150+ tribal community members</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Community development program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Handshake className="text-white text-4xl" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Leaf className="text-primary h-5 w-5" />
                  <h3 className="font-bold text-primary">Community Development</h3>
                </div>
                <p className="text-muted-foreground text-sm">Skill development and livelihood training program for marginalized communities</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Education support program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Book className="text-white text-4xl" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="text-secondary h-5 w-5" />
                  <h3 className="font-bold text-secondary">Education Support</h3>
                </div>
                <p className="text-muted-foreground text-sm">Scholarship distribution and career guidance session for 100+ underprivileged students</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Invite Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Join hands with Nanmai Seivom Trust to create lasting impact in communities. Together, we can build a better society rooted in truth and love.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Corporate Sponsorship</h3>
                <p className="text-white/90 mb-6">Support our programs through financial contributions and gain valuable CSR credits</p>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Brand visibility at events</li>
                  <li>• CSR report documentation</li>
                  <li>• Tax benefits under 80G</li>
                  <li>• Community impact certificates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Partnership</h3>
                <p className="text-white/90 mb-6">Collaborate with us to organize events and awareness programs in your area</p>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Joint event organization</li>
                  <li>• Resource sharing</li>
                  <li>• Volunteer coordination</li>
                  <li>• Local impact measurement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Individual Donors</h3>
                <p className="text-white/90 mb-6">Make a direct difference in someone's life through your generous contributions</p>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Monthly giving programs</li>
                  <li>• Sponsor a child's education</li>
                  <li>• Fund medical camps</li>
                  <li>• Support sports equipment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-white/90 mb-8">Ready to make a difference? Get in touch with us to explore partnership opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                data-testid="button-become-sponsor"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Become a Sponsor
              </Button>
              <Button
                data-testid="button-partnership-inquiry"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Partnership Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to join our mission? Let's connect and build better communities together</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-lg border border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground">seivomnanmai@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-secondary/5 rounded-lg">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>+91 8695101448</p>
                          <p>+91 90920 92516</p>
                          <p>+91 9159428589</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          39, Anjal nagar, 2nd Street,<br />
                          Palamedu Main Road,<br />
                          Madurai-625018
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button
                        data-testid="link-instagram"
                        variant="ghost"
                        size="icon"
                        className="w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button
                        data-testid="link-facebook"
                        variant="ghost"
                        size="icon"
                        className="w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        data-testid="link-youtube"
                        variant="ghost"
                        size="icon"
                        className="w-12 h-12 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Youtube className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-lg border border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
                  
                  <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input 
                              data-testid="input-name"
                              placeholder="Your name" 
                              className="focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input 
                              data-testid="input-phone"
                              placeholder="Your phone number" 
                              className="focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-email"
                            type="email"
                            placeholder="your.email@example.com" 
                            className="focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="input-message"
                            placeholder="Tell us how you'd like to get involved, partnership ideas, or any questions you have..."
                            className="min-h-[120px] focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                    <Button 
                      data-testid="button-send-message"
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={logoImage} 
                  alt="Nanmai Seivom Trust Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm">Empowering communities through truth, love, and dedicated service since 2014.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button 
                    data-testid="footer-nav-home"
                    onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    data-testid="footer-nav-about"
                    onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    data-testid="footer-nav-services"
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    data-testid="footer-nav-contact"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Sports Programs</li>
                <li>Education Support</li>
                <li>Medical Services</li>
                <li>Community Development</li>
                <li>Social Awareness</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <Button
                  data-testid="footer-link-instagram"
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 bg-primary/20 rounded-lg text-primary hover:bg-primary hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  data-testid="footer-link-facebook"
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 bg-primary/20 rounded-lg text-primary hover:bg-primary hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  data-testid="footer-link-youtube"
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 bg-primary/20 rounded-lg text-primary hover:bg-primary hover:text-white"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
              <Button
                data-testid="footer-button-join-with-us"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Join With Us
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Nanmai Seivom Trust. All rights reserved. Building better society rooted in truth and love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
