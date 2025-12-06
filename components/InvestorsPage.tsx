import React, { useState } from 'react';
import { Lock, ChevronRight, CheckCircle, Loader2 } from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    // Simulate network request/email sending
    setTimeout(() => {
      setSubmissionStatus('success');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-950 min-h-screen text-white animate-fade-in flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display mb-4 tracking-wide">Investor Relations</h1>
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">Authorized Access Only</p>
        </div>

        {/* Portal Access Card */}
        <div className="w-full max-w-md mb-16">
            <div className="bg-white text-black p-8 md:p-12 shadow-2xl relative min-h-[500px] flex flex-col justify-center">
              
              {submissionStatus === 'success' ? (
                // Success State
                <div className="flex flex-col items-center text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-display mb-4">Request Received</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Thank you for submitting your request. You will be contacted within 5 business days by our Relations Officer.
                    </p>
                    <div className="bg-gray-50 p-4 w-full border border-gray-100 rounded text-xs text-gray-500 leading-relaxed">
                        A confirmation email has been sent to <strong>{email}</strong> from <span className="text-black font-medium">noreply@s3ts.com</span>.
                    </div>
                    <button 
                        onClick={() => {
                            setSubmissionStatus('idle');
                            setActiveTab('login');
                            setEmail('');
                        }}
                        className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                    >
                        Return to Login
                    </button>
                </div>
              ) : (
                // Form State
                <>
                    <div className="flex justify-between mb-10 border-b border-gray-200">
                        <button 
                        onClick={() => setActiveTab('login')}
                        className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'login' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                        Partner Login
                        </button>
                        <button 
                        onClick={() => setActiveTab('register')}
                        className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'register' ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                        Request Access
                        </button>
                    </div>

                    {activeTab === 'login' ? (
                        <form className="space-y-6 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Investor ID / Email</label>
                            <input type="email" required className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm" placeholder="Enter your ID" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Password</label>
                            <input type="password" required className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm" placeholder="••••••••" />
                        </div>
                        <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors mt-4">
                            Access Portal <Lock size={14} />
                        </button>
                        <p className="text-center text-[10px] text-gray-500 mt-4 cursor-pointer hover:underline">Forgot credentials?</p>
                        </form>
                    ) : (
                        <form className="space-y-6 animate-fade-in" onSubmit={handleRegister}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">First Name</label>
                                <input type="text" required className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Last Name</label>
                                <input type="text" required className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Corporate Entity</label>
                            <input type="text" required className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm" placeholder="Company or Fund Name" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Professional Email</label>
                            <input 
                                type="email" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm" 
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Projected Investment</label>
                            <select className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors bg-transparent text-sm text-gray-700">
                                <option>Select Range</option>
                                <option>Seed ($50k - $250k)</option>
                                <option>Series A ($250k - $1M)</option>
                                <option>Institutional ($1M+)</option>
                            </select>
                        </div>
                        <button 
                            type="submit"
                            disabled={submissionStatus === 'submitting'}
                            className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors mt-8 disabled:opacity-70 disabled:cursor-wait"
                        >
                            {submissionStatus === 'submitting' ? (
                                <>Processing <Loader2 size={14} className="animate-spin" /></>
                            ) : (
                                <>Submit Request <ChevronRight size={14} /></>
                            )}
                        </button>
                        <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
                            By submitting, you agree to the S3Ts Non-Disclosure Agreement. Access is subject to board approval.
                        </p>
                        </form>
                    )}
                </>
              )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default InvestorsPage;