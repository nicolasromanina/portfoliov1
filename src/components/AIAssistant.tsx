import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, ChevronRight, Sparkles, Brain } from 'lucide-react';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  const systemPrompt = `Tu es l'assistant personnel de Nicolas ROMANINA, ingénieur spécialisé en systèmes électroniques et informatiques.

Informations sur Nicolas :

📚 Formation :
- Master 2 en Ingénierie des Systèmes Électroniques et Informatiques (2025-2026)
- Licence en Physique des Signaux et Systèmes (2022-2023)
- Baccalauréat Série C (2017)

💼 Expériences :
- Stagiaire Développeur Fullstack chez Madagascar 3M (2025)
- Stagiaire Réseau et Système au Ministère de la Jeunesse et des Sports (2022)

⚡ Compétences techniques :
- Développement : Python, JavaScript/TypeScript, C/C++, React, Node.js
- Systèmes embarqués : Arduino, FPGA, Raspberry Pi, IoT
- Traitement des signaux : MATLAB, DSP, analyse spectrale
- Réseaux : Linux/Windows Server, TCP/IP, Active Directory
- Bases de données : PostgreSQL, MySQL, MongoDB

Réponds de manière concise et professionnelle. Fournis des informations précises sur le parcours de Nicolas.`;

  const quickQuestions = [
    'Parle-moi de ton parcours académique',
    'Quelles sont tes compétences techniques ?',
    'Décris ton expérience chez Madagascar 3M',
    'Quels projets as-tu réalisés ?',
    'Quels sont tes objectifs professionnels ?',
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
    <section id="ai" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mb-4">
            <Brain className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Assistant IA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Posez vos questions sur mon parcours et compétences
          </p>
        </div>

        {/* Chat Container */}
        <div className="rounded-2xl border border-gray-700 bg-gray-800 shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Assistant Nicolas</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-sm text-gray-400">En ligne</p>
                  </div>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Nouvelle conversation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-6 bg-gray-900/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 mb-6 last:mb-0 animate-fade-in ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`max-w-[80%] ${
                  message.role === 'user' ? 'order-1' : 'order-2'
                }`}>
                  <div className={`rounded-xl p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                      : 'bg-gray-800 text-gray-200 border border-gray-700'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${
                        message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {message.role === 'user' ? 'Vous' : 'Assistant'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
                
                {message.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {(isLoading || isTyping) && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
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
            <div className="px-6 py-4 border-t border-gray-700 bg-gray-800">
              <p className="text-sm text-gray-400 mb-3">Questions suggérées :</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-700 bg-gray-800 p-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-500"
                  disabled={isLoading || isTyping}
                />
              </div>
              
              <button
                onClick={sendMessage}
                disabled={isLoading || isTyping || !input.trim()}
                className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed transition-all duration-200 text-white font-medium flex items-center gap-2"
              >
                {isLoading || isTyping ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500">Assistant actif</span>
              </div>
              <div className="text-xs text-gray-500">
                Appuyez sur <kbd className="px-2 py-1 bg-gray-900 rounded border border-gray-700">Entrée</kbd> pour envoyer
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center">
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white">Intelligence contextuelle</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Réponses basées sur le parcours complet de Nicolas
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-700 bg-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Réponses précises</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Informations techniques et détaillées sur ses compétences
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-700 bg-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold text-white">Conversation naturelle</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Dialogue fluide avec questions de suivi pertinentes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}