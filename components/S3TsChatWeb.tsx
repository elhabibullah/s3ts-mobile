
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, Mic, Video, Phone, MoreVertical, Search, Paperclip, Globe, ShieldCheck, Zap, User, Settings, LogOut, X, PhoneIncoming, Trash2, Ban, Volume2, Lock, Bell, HardDrive, Moon, HelpCircle, Users, RefreshCcw, Camera, ChevronRight, Instagram, Facebook, Share2, Link, CheckCircle2, Briefcase, Store, BarChart3, ShoppingBag, Plus, PhoneOutgoing, PhoneMissed, Image as ImageIcon, CircleDashed, Clock, LayoutGrid, Megaphone } from 'lucide-react';
import { MessageSquare as MessageIcon } from 'lucide-react';

interface S3TsChatWebProps {
  onNavigate: (view: 'home') => void;
}

interface Message {
    id: number;
    sender: string;
    text: string;
    isMe: boolean;
    time: string;
}

interface Contact {
    id: number;
    name: string;
    status: string;
    type: 'internal' | 'bridge' | 'customer';
    phone?: string;
    isBusiness?: boolean;
    avatar?: string;
}

interface Product {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
    gallery?: string[];
}

interface StatusUpdate {
    id: number;
    author: string;
    text: string;
    time: string;
    isMe: boolean;
}

interface CallEntry {
    id: number;
    name: string;
    type: 'incoming' | 'outgoing' | 'missed';
    time: string;
    duration?: string;
}

// Full Name Constant
const FULL_NAME = "Abdelwahid Habibullah Adam Banu Hashim";

// --- DATA SETS ---

// Personal Contacts
const PERSONAL_CONTACTS: Contact[] = [
    { id: 0, name: 'S3Ts HQ', status: 'online', type: 'internal' },
    { id: 1, name: 'H3 Fintech', status: 'online', type: 'internal' },
    { id: 2, name: 'Dad', status: 'offline', type: 'bridge', phone: '+966 55 123 4567' },
    { id: 3, name: 'Sarah', status: 'online', type: 'bridge', phone: '+966 54 987 6543' },
];

// Hub Contacts (Customers)
const HUB_CONTACTS: Contact[] = [
    { id: 10, name: 'Ahmed Al-Rashid', status: 'online', type: 'customer', phone: '+966 50 111 2222' },
    { id: 11, name: 'Fatima Design', status: 'offline', type: 'customer', isBusiness: true },
    { id: 12, name: 'Dr. Youssef Clinic', status: 'online', type: 'customer', phone: '+966 50 000 1111' },
    { id: 13, name: 'Khalid Properties', status: 'offline', type: 'customer' },
];

// Call History Log
const INITIAL_CALLS: CallEntry[] = [
    { id: 1, name: 'Ahmed Al-Rashid', type: 'incoming', time: '10:30 AM', duration: '5m 23s' },
    { id: 2, name: 'Fatima Design', type: 'missed', time: 'Yesterday' },
    { id: 3, name: 'Dad', type: 'outgoing', time: 'Yesterday', duration: '12m 04s' },
];

// Initial Chat History
const INITIAL_CHATS: Record<number, Message[]> = {
    0: [
        { id: 1, sender: 'S3Ts HQ', text: 'Welcome to S3Ts Chat. Your connection is secured by Quantum-Key Distribution.', isMe: false, time: '10:30 AM' },
        { id: 2, sender: 'S3Ts HQ', text: 'How can we assist you today, Abdelwahid?', isMe: false, time: '10:30 AM' },
    ],
    1: [
        { id: 1, sender: 'H3 Fintech', text: 'Transaction Alert: SAR 50,000 received from Investment Fund A.', isMe: false, time: '09:15 AM' },
        { id: 2, sender: 'Me', text: 'Move to savings vault.', isMe: true, time: '09:20 AM' },
    ],
    2: [
        { id: 1, sender: 'Dad', text: 'Are you coming for dinner tonight?', isMe: false, time: 'Yesterday' },
        { id: 2, sender: 'Me', text: 'Yes, InshaAllah. I will bring the new prototype.', isMe: true, time: 'Yesterday' },
    ],
    10: [
        { id: 1, sender: 'Ahmed Al-Rashid', text: 'I would like to order 50 boxes of the Royal Pralines for my event.', isMe: false, time: '10:15 AM' },
        { id: 2, sender: 'Me', text: 'Certainly, Mr. Ahmed. We will prepare them immediately.', isMe: true, time: '10:16 AM' },
    ]
};

// Den Belge Catalogue
const INITIAL_PRODUCTS: Product[] = [
    { id: '1', name: 'Madinah Truffles', price: 'SAR 120.00', desc: 'Dark chocolate infused with local mint.', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=200', gallery: ['https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=200'] },
    { id: '2', name: 'Royal Praline Box', price: 'SAR 250.00', desc: '24pc Gold-leaf assorted selection.', image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=200', gallery: ['https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=200'] },
    { id: '3', name: 'Ruby Pistachio Slab', price: 'SAR 45.00', desc: 'Hand-poured ruby chocolate with raw pistachio.', image: 'https://images.unsplash.com/photo-1614088685112-0a760b7163c8?auto=format&fit=crop&q=80&w=200', gallery: ['https://images.unsplash.com/photo-1614088685112-0a760b7163c8?auto=format&fit=crop&q=80&w=200'] },
];

// Initial Status Updates
const INITIAL_UPDATES: StatusUpdate[] = [
    { id: 1, author: 'Fatima Design', text: 'New showroom opening soon! 🎨', time: '10 min ago', isMe: false },
    { id: 2, author: 'Dr. Youssef Clinic', text: 'We are closed for maintenance today.', time: '1 hour ago', isMe: false },
];

const S3TsChatWeb: React.FC<S3TsChatWebProps> = ({ onNavigate }) => {
  const [loginStep, setLoginStep] = useState<'scan' | 'verifying' | 'success' | 'chat'>('scan');
  const [activeChatId, setActiveChatId] = useState(0);
  const [chats, setChats] = useState<Record<number, Message[]>>(INITIAL_CHATS);
  const [messageInput, setMessageInput] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'calling' | 'connected'>('idle');
  const [activeCallName, setActiveCallName] = useState('');
  
  const [showMenu, setShowMenu] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  // Settings & Modes
  const [settingsView, setSettingsView] = useState<'main' | 'account' | 'privacy' | 'chats' | 'notifications' | 'storage' | 'help' | 'invite'>('main');
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [isHubMode, setIsHubMode] = useState(false); // Business Mode State
  
  // Hub Sidebar Tabs
  const [sidebarTab, setSidebarTab] = useState<'chats' | 'calls' | 'updates'>('chats');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  // Updates / Status
  const [updates, setUpdates] = useState<StatusUpdate[]>(INITIAL_UPDATES);
  const [newUpdateText, setNewUpdateText] = useState('');

  // Catalogue Management
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', desc: '' });
  const [productImages, setProductImages] = useState<string[]>([]);
  const [showStorePreview, setShowStorePreview] = useState(false);

  // Calls Log
  const [callLog, setCallLog] = useState<CallEntry[]>(INITIAL_CALLS);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const productImgInputRef = useRef<HTMLInputElement>(null);
  
  // Theme Colors based on Mode
  const accentColor = isHubMode ? 'text-yellow-500' : 'text-teal-400';
  const accentBorder = isHubMode ? 'border-yellow-500' : 'border-teal-500';
  const accentBg = isHubMode ? 'bg-yellow-500' : 'bg-teal-500';

  // Logic to determine current contacts list
  const currentContactsList = isHubMode ? HUB_CONTACTS : PERSONAL_CONTACTS;
  const activeContact = currentContactsList.find(c => c.id === activeChatId) || currentContactsList[0];

  // Auto-login simulation
  useEffect(() => {
    if (loginStep === 'scan') {
      const timer = setTimeout(() => setLoginStep('verifying'), 2000);
      return () => clearTimeout(timer);
    }
    if (loginStep === 'verifying') {
        const timer = setTimeout(() => setLoginStep('success'), 1500);
        return () => clearTimeout(timer);
    }
    if (loginStep === 'success') {
        const timer = setTimeout(() => setLoginStep('chat'), 1000);
        return () => clearTimeout(timer);
    }
  }, [loginStep]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, activeChatId]);

  // Reset tab when mode changes & set default chat
  useEffect(() => {
      setSidebarTab('chats');
      setActiveChatId(isHubMode ? HUB_CONTACTS[0].id : PERSONAL_CONTACTS[0].id);
      setShowContactInfo(false);
  }, [isHubMode]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage: Message = {
        id: Date.now(),
        sender: 'Me',
        text: messageInput,
        isMe: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChats(prev => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), newMessage]
    }));
    
    setMessageInput('');

    // Simulation Logic
    setTimeout(() => {
        if (activeContact.id === 0) { // HQ
            addReply(activeChatId, 'S3Ts HQ', 'Command processed. Neural Core is optimizing your request.');
        } else if (activeContact.id === 2) { // Dad
            addReply(activeChatId, 'Dad', 'Great! Mom made Kabsa. See you soon.');
        } else if (activeContact.id === 10) { // Ahmed
            addReply(activeChatId, 'Ahmed Al-Rashid', 'Excellent. Send the invoice to my office.');
        }
    }, 2000);
  };

  const addReply = (chatId: number, sender: string, text: string) => {
      const reply: Message = {
        id: Date.now(),
        sender: sender,
        text: text,
        isMe: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChats(prev => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), reply]
    }));
  };

  const triggerCall = (name: string) => {
      setActiveCallName(name);
      setCallStatus('calling');
      setTimeout(() => setCallStatus('connected'), 2000);
      setTimeout(() => setCallStatus('idle'), 6000); // End call demo
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUserAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleProductImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && productImages.length < 5) {
          const reader = new FileReader();
          reader.onloadend = () => setProductImages([...productImages, reader.result as string]);
          reader.readAsDataURL(file);
      }
  };

  const handleAddProduct = () => {
    if(!newProduct.name || !newProduct.price) return;
    const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: newProduct.price,
        desc: newProduct.desc,
        image: productImages[0] || 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=200',
        gallery: productImages.length > 0 ? productImages : ['https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=200']
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', price: '', desc: '' });
    setProductImages([]);
    setShowAddProduct(false);
  };

  const handleDeleteProduct = (id: string) => {
      setProducts(products.filter(p => p.id !== id));
  };

  const handlePostUpdate = () => {
      if(!newUpdateText.trim()) return;
      setUpdates([{
          id: Date.now(),
          author: 'Me',
          text: newUpdateText,
          time: 'Just now',
          isMe: true
      }, ...updates]);
      setNewUpdateText('');
  };

  // --- Render Sidebar Content Function ---
  const renderSidebarContent = () => {
      // 1. CALLS TAB
      if (isHubMode && sidebarTab === 'calls') {
          return (
            <div className="flex-1 flex flex-col bg-zinc-950">
                <div className="p-4 border-b border-yellow-900/20">
                    <h3 className="text-sm font-bold text-yellow-500">Call History</h3>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                    {callLog.map(call => (
                        <div 
                            key={call.id} 
                            onClick={() => triggerCall(call.name)}
                            className="p-3 mb-2 flex items-center justify-between hover:bg-zinc-900 rounded-lg cursor-pointer transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-full ${call.type === 'missed' ? 'bg-red-900/20 text-red-500' : 'bg-zinc-800 text-gray-400'}`}>
                                    {call.type === 'incoming' && <PhoneIncoming size={16} />}
                                    {call.type === 'outgoing' && <PhoneOutgoing size={16} />}
                                    {call.type === 'missed' && <PhoneMissed size={16} />}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-200">{call.name}</h4>
                                    <p className="text-[10px] text-gray-500 flex items-center gap-2">
                                        {call.time} {call.duration && <span>• {call.duration}</span>}
                                    </p>
                                </div>
                            </div>
                            <Phone size={14} className="text-gray-600" />
                        </div>
                    ))}
                </div>
             </div>
          );
      }
      
      // 2. UPDATES TAB (Contains Status Feed + Catalogue Manager)
      if (isHubMode && sidebarTab === 'updates') {
          return (
            <div className="flex-1 flex flex-col bg-zinc-950">
                 <div className="p-4 border-b border-yellow-900/20 flex justify-between items-center">
                     <h3 className="text-sm font-bold text-yellow-500">Updates & Tools</h3>
                     <button onClick={() => setShowStorePreview(true)} className="text-[10px] text-blue-400 hover:text-blue-300">Preview Store</button>
                 </div>
                 <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-8">
                     
                     {/* SECTION A: STATUS */}
                     <div>
                         <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Status</h4>
                         <div className="flex items-center gap-4 cursor-pointer hover:bg-zinc-900/50 p-2 rounded-xl transition-colors mb-2">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full border-2 border-gray-600 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                    {userAvatar ? <img src={userAvatar} className="w-full h-full object-cover"/> : <User size={20} className="text-gray-400" />}
                                </div>
                                <div className="absolute bottom-0 right-0 bg-yellow-500 rounded-full border-2 border-black p-0.5">
                                    <Plus size={10} className="text-black" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">My Status</h4>
                                <p className="text-xs text-gray-500">Tap to add an update</p>
                            </div>
                         </div>
                         {/* Recent Updates List */}
                         {updates.filter(u => !u.isMe).map(update => (
                             <div key={update.id} className="flex items-center gap-4 cursor-pointer hover:bg-zinc-900/50 p-2 rounded-xl transition-colors">
                                 <div className="w-12 h-12 rounded-full border-2 border-yellow-500 p-0.5">
                                     <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center">
                                         <span className="font-bold text-xs">{update.author.substring(0,2)}</span>
                                     </div>
                                 </div>
                                 <div>
                                     <h4 className="text-sm font-bold text-white">{update.author}</h4>
                                     <p className="text-xs text-gray-500">{update.time}</p>
                                 </div>
                             </div>
                         ))}
                     </div>

                     <div className="h-px bg-zinc-800"></div>

                     {/* SECTION B: CATALOGUE MANAGER */}
                     <div>
                         <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Catalogue Manager</h4>
                         
                         {/* Add Product Form */}
                         {showAddProduct ? (
                            <div className="bg-zinc-900 p-4 rounded-xl border border-yellow-900/30 mb-6 animate-fade-in">
                                <div className="space-y-3">
                                    {/* Image Uploader Simulation */}
                                    <div 
                                        className="border-2 border-dashed border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-yellow-500 hover:bg-zinc-800 transition-colors"
                                        onClick={() => productImgInputRef.current?.click()}
                                    >
                                        <input 
                                            type="file" 
                                            ref={productImgInputRef} 
                                            className="hidden" 
                                            accept="image/*"
                                            onChange={handleProductImageUpload}
                                        />
                                        <ImageIcon size={24} className="text-gray-500 mb-2" />
                                        <span className="text-xs text-gray-400">Add Images (Max 5)</span>
                                        <div className="flex gap-2 mt-3 flex-wrap">
                                            {productImages.map((img, i) => (
                                                <div key={i} className="w-10 h-10 bg-gray-800 rounded overflow-hidden">
                                                    <img src={img} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            {Array.from({length: 5 - productImages.length}).map((_, i) => (
                                                 <div key={i} className="w-10 h-10 bg-gray-800/50 rounded border border-gray-700"></div>
                                            ))}
                                        </div>
                                    </div>

                                    <input 
                                        type="text" 
                                        placeholder="Product Name" 
                                        value={newProduct.name}
                                        onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                                        className="w-full bg-black border border-gray-700 p-2 text-xs text-white rounded outline-none" 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Price (e.g. SAR 50.00)" 
                                        value={newProduct.price}
                                        onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                                        className="w-full bg-black border border-gray-700 p-2 text-xs text-white rounded outline-none" 
                                    />
                                    <div className="flex gap-2 pt-2">
                                        <button onClick={() => setShowAddProduct(false)} className="flex-1 py-2 text-xs text-gray-400 hover:bg-gray-800 rounded">Cancel</button>
                                        <button onClick={handleAddProduct} className="flex-1 py-2 text-xs bg-yellow-600 text-black font-bold rounded hover:bg-yellow-500">Save Item</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button onClick={() => setShowAddProduct(true)} className="w-full mb-6 py-3 border border-dashed border-gray-700 rounded-xl text-gray-500 text-xs uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition-colors flex items-center justify-center gap-2">
                                <Plus size={16} /> Add New Product
                            </button>
                        )}

                        <div className="space-y-4">
                            {products.map(product => (
                                <div key={product.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-yellow-900/10 flex relative group">
                                    <div className="w-16 h-16 bg-gray-800 relative shrink-0">
                                        <img src={product.image} className="w-full h-full object-cover" />
                                        {product.gallery && product.gallery.length > 1 && (
                                            <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] px-1 rounded flex items-center gap-0.5"><ImageIcon size={8} /> {product.gallery.length}</span>
                                        )}
                                    </div>
                                    <div className="p-3 flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-xs text-gray-200 truncate">{product.name}</h4>
                                            <span className="text-xs text-yellow-500 font-medium">{product.price}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">In Catalogue</p>
                                    </div>
                                    <button onClick={() => handleDeleteProduct(product.id)} className="absolute top-2 right-2 p-1.5 bg-red-900/20 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 size={12} />
                                    </button>
                                </div>
                            ))}
                        </div>
                     </div>
                 </div>
             </div>
          );
      }
      
      // 3. CHATS LIST (Default for both Personal & Hub)
      return (
        <>
            <div className="p-4">
                <div className="bg-zinc-900/50 rounded-lg flex items-center px-4 py-3 border border-zinc-800 focus-within:border-teal-900 transition-colors">
                    <Search size={16} className="text-gray-500" />
                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs ml-3 w-full text-white placeholder-gray-600 font-light" />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {currentContactsList.map((contact) => (
                    <div 
                        key={contact.id}
                        onClick={() => {
                            setActiveChatId(contact.id);
                            setActiveCallName(contact.name);
                        }}
                        className={`p-4 flex items-center gap-4 cursor-pointer transition-all border-l-2 ${activeChatId === contact.id ? (isHubMode ? 'bg-yellow-900/10 border-yellow-500' : 'bg-teal-900/10 border-teal-500') : 'border-transparent hover:bg-zinc-900/50'}`}
                    >
                        <div className="relative">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${isHubMode ? 'bg-zinc-800 text-gray-400' : (contact.type === 'internal' ? 'bg-gradient-to-br from-teal-900 to-black text-teal-400 border border-teal-700' : 'bg-zinc-800 text-gray-400')}`}>
                                {contact.name.substring(0,2).toUpperCase()}
                            </div>
                            {contact.status === 'online' && <div className={`absolute bottom-0 right-0 w-3 h-3 ${isHubMode ? 'bg-yellow-500 shadow-yellow-500/50' : 'bg-teal-500 shadow-teal-500/50'} rounded-full border-2 border-black`}></div>}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className={`text-sm font-medium truncate ${isHubMode ? 'text-gray-200' : (contact.type === 'internal' ? 'text-teal-50' : 'text-gray-300')}`}>
                                    {contact.name}
                                </h4>
                                {chats[contact.id]?.length > 0 && (
                                    <span className="text-[10px] text-gray-600">{chats[contact.id][chats[contact.id].length-1].time}</span>
                                )}
                            </div>
                            <p className="text-xs text-gray-500 truncate">
                                {chats[contact.id]?.length > 0 ? chats[contact.id][chats[contact.id].length-1].text : 'Start a new conversation'}
                            </p>
                        </div>
                        {contact.type === 'bridge' && <Globe size={12} className="text-blue-500/50" />}
                    </div>
                ))}
            </div>
        </>
      );
  };

  // Login View
  if (loginStep !== 'chat') {
    return (
        <div className="min-h-screen bg-black text-teal-400 font-display flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
            </div>

            <div className="z-10 text-center space-y-8 animate-fade-in">
                <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
                     <div className={`absolute inset-0 border-2 border-teal-500/30 rounded-full ${loginStep === 'verifying' ? 'animate-ping' : ''}`}></div>
                     <div className="absolute inset-0 border-2 border-t-teal-400 border-r-transparent border-b-teal-400 border-l-transparent rounded-full animate-spin"></div>
                     <img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" className="w-24 h-24 rounded-full opacity-80" alt="Logo" />
                </div>

                <div>
                    <h1 className="text-3xl tracking-widest uppercase mb-2">S3TsChat loading data</h1>
                    <p className="text-xs tracking-[0.3em] text-teal-600 uppercase">
                        {loginStep === 'scan' && 'Connecting to Neural Core...'}
                        {loginStep === 'verifying' && 'Syncing Holographic Node...'}
                        {loginStep === 'success' && 'Identity Confirmed'}
                    </p>
                </div>
            </div>
        </div>
    );
  }

  const currentMessages = chats[activeChatId] || [];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col md:flex-row overflow-hidden relative">
      
      {/* Call Overlay */}
      {callStatus !== 'idle' && (
          <div className="absolute inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center animate-fade-in">
              <div className={`w-32 h-32 rounded-full border-4 ${accentBorder} shadow-[0_0_50px_rgba(20,184,166,0.5)] flex items-center justify-center mb-8 relative`}>
                   <img src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" className="w-full h-full rounded-full opacity-50" />
                   <div className={`absolute inset-0 rounded-full border-4 ${accentBorder} animate-ping`}></div>
              </div>
              <h2 className="text-3xl font-display text-white mb-2">{activeCallName || activeContact.name}</h2>
              <p className={`${accentColor} tracking-widest uppercase animate-pulse`}>
                  {callStatus === 'calling' ? 'Establishing Holo-Link...' : 'Connected (Secure)'}
              </p>
              <div className="mt-12 flex gap-8">
                  <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 transition-colors shadow-lg shadow-red-900/50" onClick={() => setCallStatus('idle')}>
                      <PhoneIncoming size={32} className="rotate-[135deg]" />
                  </button>
                  {callStatus === 'connected' && (
                       <button className="p-4 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                            <Volume2 size={32} />
                       </button>
                  )}
              </div>
          </div>
      )}

      {/* Store Preview Modal (Customer View) */}
      {showStorePreview && (
          <div className="absolute inset-0 z-[70] bg-white text-black animate-fade-in-up overflow-y-auto">
              <div className="sticky top-0 bg-white z-10 px-4 py-3 flex items-center gap-4 shadow-sm">
                  <button onClick={() => setShowStorePreview(false)} className="text-gray-600"><ArrowLeft size={24} /></button>
                  <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-yellow-600">Den Belge Chocolatier</h3>
                      <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 size={10} /> Verified Business</p>
                  </div>
                  <Search size={20} className="text-gray-400" />
                  <MoreVertical size={20} className="text-gray-400" />
              </div>
              
              <div className="p-4">
                  <div className="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-100">
                      <h4 className="font-bold text-sm mb-1">About Us</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">100% artisanal Belgian chocolate hand made in Madinah. Certified Halal.</p>
                      <div className="flex gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Clock size={12} /> Open 9AM - 10PM</span>
                          <span className="flex items-center gap-1"><LayoutGrid size={12} /> Madinah, KSA</span>
                      </div>
                  </div>

                  <h4 className="font-bold text-lg mb-4">Catalogue</h4>
                  <div className="grid grid-cols-2 gap-4">
                      {products.map(p => (
                          <div key={p.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                              <div className="h-32 bg-gray-100 relative">
                                  <img src={p.image} className="w-full h-full object-cover" />
                                  {p.gallery && p.gallery.length > 1 && (
                                      <span className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-2 rounded-full flex items-center gap-1">
                                          <ImageIcon size={10} /> {p.gallery.length}
                                      </span>
                                  )}
                              </div>
                              <div className="p-3">
                                  <div className="font-bold text-sm mb-1">{p.name}</div>
                                  <div className="text-yellow-600 text-xs font-bold">{p.price}</div>
                                  <button className="w-full mt-3 py-2 bg-yellow-500 text-white text-xs font-bold rounded-lg uppercase">Add to Cart</button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      )}

      {/* Settings / Profile Modal */}
      {showProfile && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
            <div className={`bg-zinc-900 w-full md:w-[450px] h-full border-l ${isHubMode ? 'border-yellow-900/30' : 'border-teal-900/30'} shadow-2xl animate-slide-in-right overflow-y-auto`}>
                
                {/* Header */}
                <div className={`p-6 border-b ${isHubMode ? 'border-yellow-900/30' : 'border-teal-900/30'} flex items-center gap-4 sticky top-0 bg-zinc-900/95 backdrop-blur z-10`}>
                    <button 
                        onClick={() => {
                            if (settingsView === 'main') setShowProfile(false);
                            else setSettingsView('main');
                        }}
                        className="text-gray-400 hover:text-white"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h2 className="text-xl font-display tracking-wide text-white">
                        {settingsView === 'main' ? 'Settings' : settingsView.charAt(0).toUpperCase() + settingsView.slice(1)}
                    </h2>
                </div>

                <div className="p-6">
                    {settingsView === 'main' ? (
                        <>
                            {/* Profile Header */}
                            <div className={`flex items-center gap-4 mb-8 pb-8 border-b ${isHubMode ? 'border-yellow-900/20' : 'border-teal-900/20'}`}>
                                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                                    <div className={`w-20 h-20 rounded-full bg-zinc-950 flex items-center justify-center text-2xl font-bold ${accentColor} border-2 ${accentBorder} overflow-hidden`}>
                                        {userAvatar ? (
                                            <img src={userAvatar} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            "AH"
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera size={20} className="text-white" />
                                    </div>
                                    <input 
                                        type="file" 
                                        ref={fileInputRef} 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={handleAvatarUpload}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-normal tracking-wide text-white truncate">{FULL_NAME}</h3>
                                    <p className={`text-xs ${accentColor} uppercase tracking-widest mt-1`}>{isHubMode ? 'S3Ts Hub Admin' : 'Urgent calls only'}</p>
                                </div>
                                <div className={`p-2 rounded-full ${isHubMode ? 'bg-yellow-900/20' : 'bg-teal-900/20'}`}>
                                    <Zap size={16} className={accentColor} />
                                </div>
                            </div>
                            
                            {/* Hub Mode Switcher */}
                             <button 
                                onClick={() => setIsHubMode(!isHubMode)}
                                className={`w-full flex items-center gap-4 p-4 mb-6 rounded-xl transition-all border ${isHubMode ? 'bg-yellow-900/10 border-yellow-500/30' : 'bg-zinc-800 border-transparent hover:bg-zinc-700'}`}
                             >
                                <div className={`p-2 rounded-lg ${isHubMode ? 'bg-yellow-500 text-black' : 'bg-zinc-700 text-gray-400'}`}>
                                    <Briefcase size={20} />
                                </div>
                                <div className="flex-1 text-left">
                                    <div className={`text-sm font-bold ${isHubMode ? 'text-yellow-400' : 'text-gray-200'}`}>S3Ts Hub</div>
                                    <div className="text-xs text-gray-500">Business & Enterprise Mode</div>
                                </div>
                                <div className={`w-10 h-5 rounded-full relative transition-colors ${isHubMode ? 'bg-yellow-500' : 'bg-zinc-600'}`}>
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isHubMode ? 'left-6' : 'left-1'}`}></div>
                                </div>
                            </button>

                            {/* Menu Items */}
                            <div className="space-y-1">
                                {[
                                    { icon: User, label: 'Account', desc: 'Security notifications, change number', id: 'account' },
                                    { icon: Lock, label: 'Privacy', desc: 'Block contacts, disappearing messages', id: 'privacy' },
                                    { icon: Camera, label: 'Avatar', desc: 'Create, edit, profile photo', id: 'avatar', action: () => fileInputRef.current?.click() },
                                    { icon: Users, label: 'Lists', desc: 'Manage people and groups', id: 'lists' },
                                    { icon: MessageIcon, label: 'Chats', desc: 'Theme, wallpapers, chat history', id: 'chats' },
                                    { icon: Bell, label: 'Notifications', desc: 'Message, group & call tones', id: 'notifications' },
                                    { icon: HardDrive, label: 'Storage and data', desc: 'Network usage, auto-download', id: 'storage' },
                                    { icon: Settings, label: 'Accessibility', desc: 'Increase contrast, animation', id: 'accessibility' },
                                    { icon: Globe, label: 'App language', desc: 'English (device language)', id: 'language' },
                                    { icon: HelpCircle, label: 'Help and feedback', desc: 'Help centre, contact us, privacy policy', id: 'help' },
                                    { icon: Share2, label: 'Invite a friend', desc: '', id: 'invite' },
                                    { icon: RefreshCcw, label: 'App updates', desc: 'Version 3.0.1 (Latest)', id: 'updates' },
                                ].map((item) => (
                                    <button 
                                        key={item.label}
                                        onClick={() => item.action ? item.action() : setSettingsView(item.id as any)}
                                        className="w-full flex items-center gap-4 p-4 hover:bg-zinc-800 rounded-xl transition-colors text-left"
                                    >
                                        <item.icon size={20} className="text-gray-400" />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-gray-200">{item.label}</div>
                                            {item.desc && <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Socials */}
                            <div className="mt-8 pt-8 border-t border-teal-900/20">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow S3Ts</p>
                                <div className="flex gap-4">
                                    <button className="p-3 bg-zinc-800 rounded-full hover:text-pink-500 transition-colors"><Instagram size={20} /></button>
                                    <button className="p-3 bg-zinc-800 rounded-full hover:text-blue-500 transition-colors"><Facebook size={20} /></button>
                                    <button className="p-3 bg-zinc-800 rounded-full hover:text-white transition-colors"><span className="font-bold text-lg">@</span></button>
                                </div>
                            </div>
                        </>
                    ) : (
                        /* Sub Pages Content (Simulated) */
                        <div className="animate-fade-in space-y-6">
                            {settingsView === 'account' && (
                                <>
                                    {/* Universal Bridge Status Section */}
                                    <div className="bg-zinc-800/50 p-4 rounded-xl border border-blue-500/20 mb-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Universal Bridge</h4>
                                            <div className="px-2 py-0.5 bg-blue-500/10 rounded text-[10px] text-blue-400 border border-blue-500/20">Active</div>
                                        </div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Link size={16} className="text-blue-400" />
                                            <span className="text-sm">WhatsApp Linked</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={16} className="text-green-500" />
                                            <span className="text-sm">Signal Protocol Ready</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-3 pt-3 border-t border-gray-700">
                                            Running via Neural Matrix Protocol (Client Relay). No API fees applied.
                                        </p>
                                    </div>
                                    <button className="w-full p-4 bg-zinc-800 rounded-xl text-left hover:bg-zinc-700">Change Phone Number</button>
                                    <button className="w-full p-4 bg-zinc-800 rounded-xl text-left hover:bg-zinc-700 text-red-400">Delete Account</button>
                                </>
                            )}
                            
                            {/* ... Other settings pages ... */}
                            {!['account'].includes(settingsView) && (
                                <div className="text-center py-20 opacity-50">
                                    <Settings size={48} className="mx-auto mb-4" />
                                    <p>System Configured by Neural OS</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}

      {/* Sidebar (Contacts / Tools) */}
      <div className={`w-full md:w-[350px] bg-black border-r ${isHubMode ? 'border-yellow-900/30' : 'border-teal-900/30'} flex flex-col h-full z-20`}>
         
         {/* HEADER */}
         <div className={`h-20 px-4 border-b ${isHubMode ? 'border-yellow-900/30' : 'border-teal-900/30'} flex justify-between items-center bg-black/80 backdrop-blur-md`}>
             <div className="flex items-center relative gap-1">
                 <img 
                    src="https://fit-4rce-x.s3.eu-north-1.amazonaws.com/S3Ts_chat_logo.jpg" 
                    alt="Logo" 
                    className={`h-10 w-10 rounded-lg opacity-90 transition-all ${isHubMode ? 'sepia brightness-110' : ''}`}
                 />
                 {isHubMode && (
                     <span className="absolute -top-1 -right-2 text-[8px] font-bold text-yellow-500 tracking-widest bg-black px-1 rounded border border-yellow-500/30">HUB</span>
                 )}
             </div>

             <button 
                onClick={() => setShowProfile(true)}
                className={`font-display text-sm tracking-wider ${isHubMode ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]' : 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'} hover:text-white transition-colors animate-pulse truncate max-w-[180px]`}
             >
                 {FULL_NAME.split(' ')[0]}
             </button>

             <button onClick={() => onNavigate('home')} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"><LogOut size={20} /></button>
         </div>

         {/* Sidebar Tabs (Hub Mode) */}
         {isHubMode && (
             <div className="flex border-b border-yellow-900/30 bg-zinc-900/50">
                 {['chats', 'calls', 'updates'].map(tab => (
                     <button
                        key={tab}
                        onClick={() => setSidebarTab(tab as any)}
                        className={`flex-1 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${sidebarTab === tab ? 'text-yellow-400 border-b-2 border-yellow-500 bg-yellow-900/10' : 'text-gray-500 hover:text-gray-300'}`}
                     >
                         {tab}
                     </button>
                 ))}
             </div>
         )}

         {/* Content Area Switcher */}
         {renderSidebarContent()}
         
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-zinc-950 relative">
          {/* Chat Header */}
          <div className={`h-20 border-b ${isHubMode ? 'border-yellow-900/30' : 'border-teal-900/30'} flex items-center justify-between px-6 bg-black/40 backdrop-blur`}>
             <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setShowContactInfo(!showContactInfo)}
             >
                <div className="relative">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${isHubMode ? 'bg-zinc-800 text-gray-400' : 'bg-zinc-800 text-gray-400'}`}>
                        {activeContact.name.substring(0,2).toUpperCase()}
                     </div>
                     {activeContact.status === 'online' && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"></div>}
                </div>
                <div>
                    <h3 className="text-sm font-medium text-white">{activeContact.name}</h3>
                    <p className="text-xs text-gray-500">{activeContact.status === 'online' ? 'Online via Quantum-Link' : 'Last seen recently'}</p>
                </div>
             </div>
             
             <div className="flex gap-4 text-gray-400">
                <button onClick={() => triggerCall(activeContact.name)} className="hover:text-white transition-colors"><Phone size={20} /></button>
                <button className="hover:text-white transition-colors"><Video size={20} /></button>
                <button onClick={() => setShowMenu(!showMenu)} className="hover:text-white transition-colors"><MoreVertical size={20} /></button>
             </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-black/20">
              {currentMessages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                      <div className={`w-16 h-16 rounded-full border-2 border-dashed ${accentBorder} flex items-center justify-center opacity-30`}>
                          <MessageIcon size={24} className={accentColor} />
                      </div>
                      <p className="text-xs tracking-widest uppercase">Start Holographic Transmission</p>
                  </div>
              ) : (
                  currentMessages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[70%] p-4 rounded-2xl relative group ${
                              msg.isMe 
                                ? `${accentBg} text-black rounded-tr-none shadow-[0_0_15px_rgba(20,184,166,0.3)]` 
                                : 'bg-zinc-800 text-gray-200 rounded-tl-none border border-gray-700'
                          }`}>
                              <p className="text-sm leading-relaxed font-light">{msg.text}</p>
                              <span className={`text-[10px] absolute -bottom-5 ${msg.isMe ? 'right-0 text-gray-500' : 'left-0 text-gray-600'}`}>
                                  {msg.time}
                              </span>
                          </div>
                      </div>
                  ))
              )}
              <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/60 backdrop-blur border-t border-gray-900">
              <form onSubmit={handleSend} className="flex items-center gap-4 max-w-4xl mx-auto">
                  <button type="button" className="text-gray-400 hover:text-white transition-colors"><Plus size={24} /></button>
                  <div className="flex-1 bg-zinc-900 rounded-full flex items-center px-4 py-3 border border-gray-800 focus-within:border-gray-600 transition-colors">
                      <input 
                        type="text" 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type a message..." 
                        className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-gray-500 font-light"
                      />
                      <button type="button" className="text-gray-400 hover:text-white ml-2"><Paperclip size={18} /></button>
                  </div>
                  {messageInput.trim() ? (
                      <button type="submit" className={`p-3 rounded-full ${accentBg} text-black hover:opacity-90 transition-opacity shadow-lg`}>
                          <Send size={20} className={isHubMode ? '' : '-ml-0.5 mt-0.5'} />
                      </button>
                  ) : (
                      <button 
                        type="button"
                        onMouseDown={() => setIsRecording(true)}
                        onMouseUp={() => setIsRecording(false)}
                        className={`p-3 rounded-full bg-zinc-800 text-gray-400 hover:text-white transition-colors ${isRecording ? 'animate-pulse text-red-500' : ''}`}
                      >
                          <Mic size={20} />
                      </button>
                  )}
              </form>
          </div>
      </div>

      {/* Contact Info Sidebar (Right) */}
      {showContactInfo && (
          <div className="w-[300px] bg-zinc-900 border-l border-gray-800 animate-slide-in-right p-6 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Contact Info</h3>
                  <button onClick={() => setShowContactInfo(false)} className="text-gray-500 hover:text-white"><X size={20}/></button>
              </div>
              
              <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">
                      {activeContact.name.substring(0,2).toUpperCase()}
                  </div>
                  <h2 className="text-lg font-bold text-white mb-1">{activeContact.name}</h2>
                  <p className="text-sm text-gray-500">{activeContact.phone || '+966 5X XXX XXXX'}</p>
              </div>

              <div className="space-y-4">
                  <div className="bg-black/40 p-4 rounded-xl">
                      <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">About</h4>
                      <p className="text-sm text-gray-300 font-light">
                          {activeContact.isBusiness ? 'Business Account' : 'Standard Account'}
                      </p>
                  </div>
                  
                  <div className="bg-black/40 p-4 rounded-xl">
                      <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Security</h4>
                      <div className="flex items-center gap-2 text-green-500 text-xs">
                          <Lock size={12} />
                          <span>End-to-end Encrypted</span>
                      </div>
                  </div>

                  <button className="w-full py-3 bg-zinc-800 text-red-400 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 flex items-center justify-center gap-2">
                      <Ban size={14} /> Block Contact
                  </button>
                  <button className="w-full py-3 bg-zinc-800 text-gray-400 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 flex items-center justify-center gap-2">
                      <Trash2 size={14} /> Clear Chat
                  </button>
              </div>
          </div>
      )}

    </div>
  );
};

export default S3TsChatWeb;
