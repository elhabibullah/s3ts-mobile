import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus, RefreshCw } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/gemini';
import { ChatMessage, LoadingState } from '../types';
import { Chat, GenerateContentResponse } from "@google/genai";
import { VIVO_BLUE } from '../constants';

interface ChatSupportProps {
    language?: 'en' | 'ar';
}

const ChatSupport: React.FC<ChatSupportProps> = ({ language = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialMsg = language === 'ar' 
    ? 'مرحباً بكم في S3Ts Tech. أنا مساعد الاستفسارات الخاص بكم.'
    : 'Welcome to S3Ts Tech. I am your Inquiry Assistant.';
    
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: initialMsg }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Re-update initial message if language changes and chat is reset
  useEffect(() => {
     if (messages.length === 1 && messages[0].role === 'model') {
         setMessages([{ role: 'model', text: initialMsg }]);
     }
  }, [language]);

  useEffect(() => {
    if (isOpen && !chatSession) {
      try {
        const session = createChatSession();
        setChatSession(session);
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loadingState]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);

    try {
        const result = await sendMessageToGemini(chatSession, userMsg);
        let accumulatedText = '';
        
        // Optimistic update for the model message container
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        for await (const chunk of result) {
            const chunkText = (chunk as GenerateContentResponse).text;
            if (chunkText) {
                accumulatedText += chunkText;
                setMessages(prev => {
                    const newMsgs = [...prev];
                    newMsgs[newMsgs.length - 1].text = accumulatedText;
                    return newMsgs;
                });
            }
        }
        setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
        setMessages(prev => [...prev, { role: 'model', text: language === 'ar' ? "عذراً، أواجه مشكلة في الاتصال. يرجى المحاولة لاحقاً." : "I'm having trouble connecting to the S3Ts Network. Please try again later." }]);
        setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const fontClass = language === 'ar' ? 'font-tajawal' : 'font-sans';
  const displayFont = language === 'ar' ? 'font-amiri font-bold' : 'font-display font-medium';

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-500 ${isOpen ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`}
      >
        <MessageCircle size={24} strokeWidth={1} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[360px] h-[550px] max-h-[80vh] bg-white rounded-none shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right transform border border-gray-100 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        
        {/* Header */}
        <div className="bg-black p-5 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`${displayFont} tracking-wide text-sm`}>
                {language === 'ar' ? 'مساعد الاستفسارات' : 'Inquiry Assistant'}
            </span>
          </div>
          <div className="flex gap-4">
             <button onClick={() => {
                 setMessages([{ role: 'model', text: initialMsg }]);
                 setChatSession(createChatSession());
             }} className="hover:opacity-70 transition-opacity"><RefreshCw size={16} strokeWidth={1.5} /></button>
             <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity"><Minus size={16} strokeWidth={1.5} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 bg-white scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex mb-6 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] py-3 px-4 text-xs leading-relaxed tracking-wide ${fontClass} ${
                  msg.role === 'user' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-50 text-gray-600 border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loadingState === LoadingState.LOADING && (
            <div className="flex justify-start mb-4">
               <div className="bg-gray-50 p-4 border border-gray-100 flex gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-5 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 border-b border-gray-200 py-2">
            <input
              type="text"
              className={`flex-1 bg-transparent border-none outline-none text-xs text-gray-800 placeholder-gray-400 font-light tracking-wide ${fontClass}`}
              placeholder={language === 'ar' ? "اكتب استفسارك..." : "Type your inquiry..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || loadingState === LoadingState.LOADING}
                className="text-black hover:opacity-60 disabled:opacity-30 transition-opacity"
            >
              <Send size={16} strokeWidth={1.5} className={language === 'ar' ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSupport;