import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, ChevronRight, Sparkles, Brain, Mic, Paperclip, ThumbsUp, ThumbsDown, Zap, Cpu, Code, Database } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Bonjour ! Je suis l\'assistant de Nicolas ROMANINA. Je peux vous parler de son parcours en ingénierie des systèmes électroniques et informatiques. Posez-moi vos questions !',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  }, [messages, isLoading]);

  const systemPrompt = `Tu es l'assistant personnel de Nicolas ROMANINA, ingénieur spécialisé en systèmes électroniques et informatiques.

Informations sur Nicolas :

📚 Formation :
- Master 2 en Ingénierie des Systèmes Électroniques et Informatiques (2025-2026)
- Licence en Physique des Signaux et Systèmes (2021-2022)
- Baccalauréat Série C (2017)

💼 Expériences :
- Stagiaire Développeur Fullstack chez Madagascar 3M (2025)
- Stagiaire Réseau et Système au Ministère de la Jeunesse et des Sports (2022)

⚡ Compétences techniques :
- Développement : Python, JavaScript/TypeScript, C/C++, React, Node.js
- Systèmes embarqués : Arduino, ESP32, PIC FPGA, Raspberry Pi, IoT
- Traitement des signaux : MATLAB, DSP, analyse spectrale
- Réseaux : Linux/Windows Server, TCP/IP, Active Directory
- Bases de données : PostgreSQL, MySQL, MongoDB

Réponds de manière concise et professionnelle. Fournis des informations précises sur le parcours de Nicolas.`;

  const quickQuestions = [
    'Parcours académique',
    'Compétences techniques',
    'Expérience Madagascar 3M',
    'Projets réalisés',
    'Objectifs professionnels',
  ];

  const simulateTyping = async (text: string, callback: (chunk: string) => void) => {
    setIsTyping(true);
    const words = text.split(' ');
    let currentText = '';
    
    for (const word of words) {
      currentText += word + ' ';
      callback(currentText.trim());
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    setIsTyping(false);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading || isTyping) return;

    const userMessage: Message = { 
      role: 'user', 
      content: input,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            { role: 'user', content: input },
          ],
          temperature: 0.7,
          max_tokens: 800,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur API');
      }

      const data = await response.json();
      const fullResponse = data.choices[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse.';
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: '',
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      
      await simulateTyping(fullResponse, (chunk) => {
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = chunk;
          return newMessages;
        });
      });

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Conversation réinitialisée. Comment puis-je vous aider concernant Nicolas ROMANINA ?',
        timestamp: new Date(),
      },
    ]);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <section id="ai" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 mb-6 shadow-lg">
            <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Assistant IA Personnel
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            Interrogez l'IA sur mon parcours, compétences et expériences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Chat Container - Main */}
          <div className="flex-1">
            <div className="rounded-3xl border border-gray-700 bg-gray-800 shadow-xl overflow-hidden backdrop-blur-sm">
              {/* Chat Header */}
              <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                        <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base md:text-lg">Assistant Nicolas</h3>
                      <p className="text-xs md:text-sm text-gray-400">Ingénieur systèmes électroniques</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={clearChat}
                      className="p-2 hover:bg-gray-700 rounded-xl transition-all duration-200 text-gray-400 hover:text-white"
                      title="Nouvelle conversation"
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="lg:hidden p-2 hover:bg-gray-700 rounded-xl transition-all duration-200 text-gray-400 hover:text-white"
                    >
                      <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-[400px] md:h-[500px] overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 mb-4 last:mb-0 animate-fade-in ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-sm">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                      <div className={`rounded-2xl p-4 shadow-sm ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-none'
                          : 'bg-gray-700 text-gray-200 rounded-bl-none'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-medium ${
                            message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                          }`}>
                            {message.role === 'user' ? 'Vous' : 'Assistant'}
                          </span>
                          <span className="text-xs text-gray-400">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                          {message.content}
                        </p>
                      </div>
                      
                      {/* Message Actions */}
                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-2 mt-2 px-1">
                          <button className="p-1 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-blue-400">
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <button className="p-1 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-red-400">
                            <ThumbsDown className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {message.role === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center shadow-sm">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {(isLoading || isTyping) && (
                  <div className="flex gap-3 justify-start animate-fade-in">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-sm">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-700 rounded-2xl rounded-bl-none p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
                        </div>
                        <span className="text-sm text-gray-400">
                          {isTyping ? 'Écrit...' : 'Réfléchit...'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length <= 2 && (
                <div className="px-4 md:px-6 py-4 border-t border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
                  <p className="text-xs md:text-sm text-gray-400 mb-3">Questions rapides :</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs md:text-sm text-gray-300 hover:text-white px-3 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:shadow-md"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="border-t border-gray-700 p-4 md:p-6 bg-gray-800">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <button className="p-2.5 hover:bg-gray-700 rounded-xl transition-colors text-gray-400 hover:text-white">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Posez votre question..."
                        className="w-full bg-gray-700 text-white border border-gray-600 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-500 text-sm md:text-base"
                        disabled={isLoading || isTyping}
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-gray-600 rounded-lg transition-colors text-gray-400">
                        <Mic className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={sendMessage}
                      disabled={isLoading || isTyping || !input.trim()}
                      className="p-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-200 text-white shadow-md hover:shadow-lg disabled:shadow-none"
                    >
                      {isLoading || isTyping ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">En ligne • Réponses instantanées</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      <kbd className="px-2 py-1 bg-gray-700 rounded-lg border border-gray-600">Entrée</kbd> pour envoyer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Sidebar */}
          <div className={`lg:w-80 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-6 shadow-xl">
              <h3 className="font-semibold text-white text-lg mb-6">Capacités de l'Assistant</h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">Intelligence Contextuelle</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Comprend le contexte complet du parcours professionnel et académique
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">Précision Technique</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Détails précis sur les compétences techniques et projets réalisés
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">Réponses Rapides</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Temps de réponse optimisé pour une expérience fluide
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-4">Stack Technique</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-xl">
                      <Code className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-gray-300">Frontend</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-xl">
                      <Cpu className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-gray-300">Backend</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-xl">
                      <Database className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-gray-300">Bases de données</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-xl">
                      <Cpu className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-gray-300">Embedded</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-4">À propos de Nicolas</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                      <div className="text-lg md:text-xl font-bold text-blue-400">3+</div>
                      <div className="text-xs text-gray-400">Années d'étude</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                      <div className="text-lg md:text-xl font-bold text-purple-400">5+</div>
                      <div className="text-xs text-gray-400">Langages maîtrisés</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                      <div className="text-lg md:text-xl font-bold text-emerald-400">2</div>
                      <div className="text-xs text-gray-400">Expériences pro</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                      <div className="text-lg md:text-xl font-bold text-amber-400">10+</div>
                      <div className="text-xs text-gray-400">Projets réalisés</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden mt-8 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            {isExpanded ? 'Masquer les détails' : 'Voir les capacités'}
          </button>
        </div>
      </div>
    </section>
  );
}