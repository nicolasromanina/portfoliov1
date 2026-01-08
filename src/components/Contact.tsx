import React, { useState, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Send, Check, Linkedin, Github, MessageSquare, 
  User, FileText, Loader2, Sparkles, Target, Zap, Calendar, Globe,
  MailCheck, Clock, Shield, CheckCircle, ExternalLink
} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Configuration EmailJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_btku6vu',
    TEMPLATE_ID: 'template_ixeryir',
    PUBLIC_KEY: '4dOtolsWg-oeN0URA',
    REPLY_TEMPLATE_ID: 'template_lx644bb',
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Le sujet doit contenir au moins 5 caractères';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  setIsSubmitting(true);
  setSubmitStatus('idle');
  setSubmitMessage('');
  
  try {
    console.log('🚀 Envoi des emails...');
    
    // 1. Email à VOUS avec tous les paramètres
    const yourEmailParams = {
      from_name: formData.name,      // → {{from_name}} dans template_ixeryir
      reply_to: formData.email,      // → {{reply_to}} dans template_ixeryir
      subject: formData.subject,     // → {{subject}} dans template_ixeryir
      message: formData.message,     // → {{message}} dans template_ixeryir
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR')
    };
    
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID, // template_ixeryir
      yourEmailParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    // 2. Réponse automatique (déjà fonctionnel)
    const replyTemplateParams = {
      to_name: formData.name,
      to_email: formData.email,
      subject: `Confirmation : ${formData.subject}`,
      reply_message: formData.message.substring(0, 100) + '...',
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR')
    };
    
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.REPLY_TEMPLATE_ID, // template_lx644bb
      replyTemplateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    setSubmitStatus('success');
    setSubmitMessage('Message envoyé avec succès !');
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
    
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    setSubmitStatus('error');
    setSubmitMessage('Une erreur est survenue.');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }, 5000);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Professionnel',
      value: 'nicolasromanina@gmail.com',
      link: 'mailto:nicolasromanina@gmail.com',
      color: 'text-blue-400',
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-500/20',
      description: 'Réponse sous 24h',
      isExternal: false
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+261 34 11 815 03',
      link: 'tel:+261341181503',
      color: 'text-green-400',
      bg: 'from-green-500/10 to-green-600/10',
      border: 'border-green-500/20',
      description: 'Disponible 9h-18h',
      isExternal: false
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Antananarivo, Madagascar',
      color: 'text-purple-400',
      bg: 'from-purple-500/10 to-purple-600/10',
      border: 'border-purple-500/20',
      description: 'Ouvert aux collaborations internationales',
      link: undefined, // Pas de lien pour la localisation
      isExternal: false
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nicolasromanina',
      color: 'text-blue-400',
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-500/20',
      metric: '500+',
      isExternal: true
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nicolasromanina',
      color: 'text-gray-300',
      bg: 'from-gray-800/50 to-gray-900/50',
      border: 'border-gray-700',
      metric: '15+ projets',
      isExternal: true
    },
    {
      icon: MessageSquare,
      label: 'Messenger',
      href: '#',
      color: 'text-pink-400',
      bg: 'from-pink-500/10 to-rose-500/10',
      border: 'border-pink-500/20',
      metric: 'Rapide',
      isExternal: false
    },
  ];

  const collaborations = [
    {
      icon: Target,
      title: 'Stage Ingénieur',
      description: '6 mois à partir de Juin 2026',
      color: 'text-blue-400',
      bg: 'from-blue-500/10 to-blue-600/10'
    },
    {
      icon: Zap,
      title: 'Projet Innovation',
      description: 'Systèmes embarqués & IoT',
      color: 'text-purple-400',
      bg: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: Globe,
      title: 'Consultation Tech',
      description: 'Architecture & Développement',
      color: 'text-green-400',
      bg: 'from-green-500/10 to-green-600/10'
    },
    {
      icon: Calendar,
      title: 'Recherche Académique',
      description: 'Traitement signal & IA',
      color: 'text-amber-400',
      bg: 'from-amber-500/10 to-amber-600/10'
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-500/3 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Connectons-nous
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Contact
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              & Opportunités
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionné par l'innovation technologique, je suis ouvert aux collaborations 
            qui repoussent les limites des systèmes électroniques et informatiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                    <Send className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Envoyer un message</h3>
                    <p className="text-gray-400 text-sm">Je réponds rapidement</p>
                  </div>
                </div>
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 mb-6">
                      <MailCheck className="w-10 h-10 text-green-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Message envoyé !</h4>
                    <p className="text-gray-300 mb-6">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Confirmation envoyée par email</span>
                    </div>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-rose-500/10 mb-6">
                      <Shield className="w-10 h-10 text-red-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Erreur d'envoi</h4>
                    <p className="text-gray-300 mb-6">
                      {submitMessage}
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300"
                    >
                      Réessayer
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-white flex items-center gap-2">
                          <User className="w-4 h-4 text-blue-400" />
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full bg-gray-900/50 border ${
                            errors.name ? 'border-red-500/50' : 'border-gray-800'
                          } rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                          placeholder="Votre nom"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-white flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-400" />
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full bg-gray-900/50 border ${
                            errors.email ? 'border-red-500/50' : 'border-gray-800'
                          } rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                          placeholder="votre@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-white flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-400" />
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full bg-gray-900/50 border ${
                          errors.subject ? 'border-red-500/50' : 'border-gray-800'
                        } rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                        placeholder="Objet du message"
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-white">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full bg-gray-900/50 border ${
                          errors.message ? 'border-red-500/50' : 'border-gray-800'
                        } rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none`}
                        placeholder="Décrivez votre projet, opportunité ou question..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-500 hover:via-blue-600 hover:to-purple-500 disabled:from-gray-800 disabled:via-gray-800 disabled:to-gray-900 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <span>Envoyer le message</span>
                            <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-gray-500 text-sm mt-3">
                        Une confirmation automatique vous sera envoyée par email
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Availability */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Disponibilité & Réponse</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mt-1.5" />
                    <div>
                      <p className="text-white font-medium">Disponible pour opportunités</p>
                      <p className="text-gray-400 text-sm">
                        Stage ingénieur à partir de Juin 2026 • CDI/Défense de thèse
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5" />
                    <div>
                      <p className="text-white font-medium">Réponse garantie</p>
                      <p className="text-gray-400 text-sm">
                        Sous 24-48 heures • Confirmation automatique immédiate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5" />
                    <div>
                      <p className="text-white font-medium">Suivi personnalisé</p>
                      <p className="text-gray-400 text-sm">
                        Chaque demande reçoit une attention particulière
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Coordonnées</h3>
                    <p className="text-gray-400 text-sm">Me contacter directement</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.bg} ${info.border}`}>
                          <Icon className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-white font-medium">{info.title}</h4>
                            {info.link && (
                              <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                <ExternalLink className="w-4 h-4 text-gray-500" />
                              </div>
                            )}
                          </div>
                          <p className={`${info.color} mb-1`}>{info.value}</p>
                          <p className="text-gray-500 text-xs">{info.description}</p>
                        </div>
                      </div>
                    );

                    return (
                      <div
                        key={index}
                        className="group/item p-4 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
                      >
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.isExternal ? '_blank' : undefined}
                            rel={info.isExternal ? 'noopener noreferrer' : undefined}
                            className="block"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-8">Réseaux & Portfolio</h3>
                
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target={social.isExternal ? '_blank' : undefined}
                        rel={social.isExternal ? 'noopener noreferrer' : undefined}
                        className={`group/item relative p-4 rounded-xl bg-gradient-to-br ${social.bg} border ${social.border} hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center text-center`}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        <Icon className={`w-8 h-8 ${social.color} mb-3 group-hover/item:scale-110 transition-transform`} />
                        <span className="text-white font-medium text-sm">{social.label}</span>
                        <span className="text-xs text-gray-400 mt-1">
                          {social.metric}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Collaboration Types */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Types de collaboration</h3>
                <div className="grid grid-cols-2 gap-4">
                  {collaborations.map((collab, index) => {
                    const Icon = collab.icon;
                    return (
                      <div
                        key={index}
                        className={`group/item p-4 rounded-xl bg-gradient-to-br ${collab.bg} border border-gray-800 hover:border-gray-700 transition-all duration-300`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${collab.bg} border ${collab.border}`}>
                            <Icon className={`w-4 h-4 ${collab.color}`} />
                          </div>
                          <h4 className="text-white font-medium text-sm">{collab.title}</h4>
                        </div>
                        <p className="text-gray-400 text-xs">{collab.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-300 font-medium">Disponible pour de nouvelles opportunités</span>
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chaque projet commence par une conversation. Que vous soyez recruteur, 
              collaborateur ou simplement passionné de technologie, n'hésitez pas à 
              prendre contact pour échanger sur des idées innovantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;