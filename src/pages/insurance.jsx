import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Car, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  ClipboardCheck,
  PhoneCall,
  X,
  Loader2,
  Send,
  Building2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InsuranceClaimPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleClaimConsultation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY"); // Replace with your key
    formData.append("subject", "Insurance Claim Consultation Request");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Success! Our insurance expert will call you.");
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus("");
        }, 3000);
      }
    } catch (err) {
      setFormStatus("Error! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: "Intimation", desc: "Notify your insurer and bring the car to us." },
    { title: "Estimation", desc: "We prepare a detailed repair estimate for the surveyor." },
    { title: "Survey", desc: "Digital or physical survey conducted by the company." },
    { title: "Approval", desc: "Company provides the Work Order (Approval) to start." },
    { title: "Repair", desc: "High-precision repairs using genuine parts." },
    { title: "Delivery", desc: "Drive away with only paying the deductible." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      
      {/* --- Consultation Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-slate-900 w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-black text-white mb-2 uppercase italic text-red-600">Claim Assistance</h2>
            <p className="text-slate-400 text-sm mb-8 font-medium italic">Hassle-free Cashless Processing</p>
            <form onSubmit={handleClaimConsultation} className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600" />
              <input type="tel" name="phone" placeholder="Phone" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600" />
              <input type="text" name="insurance_company" placeholder="Insurance Company" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600" />
              <button disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 shadow-xl shadow-red-900/40">
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {isSubmitting ? "Submitting..." : "Get Assistance"}
              </button>
              {formStatus && <p className={`text-center font-bold text-sm mt-4 ${formStatus.includes("Success") ? "text-green-500" : "text-red-500"}`}>{formStatus}</p>}
            </form>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden bg-slate-950 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" alt="Insurance Claim" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-[0.2em] mb-4 transform -skew-x-12">
            24/7 Accident Assistance
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
            Cashless <span className="text-red-600">Insurance</span> <br /> Claims
          </h1>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-300 mt-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-red-600 transition-colors text-white no-underline">Home</Link>
            <ChevronRight size={14} className="text-red-600" />
            <span className="text-white italic">Insurance Claim</span>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck size={14} /> Hassle-Free Repairs
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic leading-tight mb-6 text-slate-950">
                Major Insurers. <br /><span className="text-red-600">Zero Paperwork.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Accidents are stressful enough. Our dedicated Insurance Desk handles the entire claim lifecycle—from reporting and digital surveying to final payment settlement. We ensure your car is restored to factory standards using only <span className="text-slate-900 font-bold underline decoration-red-600">Genuine Parts</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Building2 />, title: "Cashless Garage", desc: "Network with all major companies." },
                { icon: <ClipboardCheck />, title: "Digital Survey", desc: "Faster approvals via spot survey." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="text-red-600">{item.icon}</div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1 italic">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 relative overflow-hidden">
               <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
                 <FileText className="text-red-600" /> Document Checklist
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {["Insurance Policy Copy", "Registration Certificate (RC)", "Valid Driving License", "PAN & Aadhar Card"].map((doc, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                     <span className="text-sm font-bold text-slate-700">{doc}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-8 p-4 bg-red-50 rounded-xl flex gap-3 items-start border border-red-100">
                 <AlertCircle className="text-red-600 shrink-0" size={18} />
                 <p className="text-xs text-red-950 font-medium italic">FIR is mandatory for theft or major third-party injury claims.</p>
               </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-10 space-y-8">
            <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <ShieldCheck className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black uppercase italic mb-4 tracking-tighter">Claim Consultation</h2>
                <p className="text-slate-400 text-sm mb-10 font-medium">Need immediate help with an accident claim? Talk to our specialists.</p>
                <div className="space-y-6">
                  <button onClick={() => setIsModalOpen(true)} className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-red-900/40">
                    Get Expert Assistance <ArrowRight size={20} />
                  </button>
                  <a href="tel:+918576000084" className="w-full bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest py-4 rounded-2xl transition-all border border-white/5 text-sm flex items-center justify-center gap-3 no-underline">
                    <PhoneCall size={18} /> Call Claims Desk
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-slate-100 rounded-[2.5rem]">
              <h4 className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Cashless Partners</h4>
              <div className="grid grid-cols-2 gap-6 opacity-40 grayscale">
                <div className="text-xs font-black text-center border p-2 rounded">ICICI LOMBARD</div>
                <div className="text-xs font-black text-center border p-2 rounded">HDFC ERGO</div>
                <div className="text-xs font-black text-center border p-2 rounded">BAJAJ ALLIANZ</div>
                <div className="text-xs font-black text-center border p-2 rounded">TATA AIG</div>
              </div>
            </div>
          </div>

        </div>

        {/* --- TIMELINE SECTION --- */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">The <span className="text-red-600">Seamless</span> Process</h3>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black mb-4 transform group-hover:-rotate-12 transition-transform duration-300">
                  0{idx + 1}
                </div>
                <h5 className="font-black uppercase italic text-xs mb-2 text-red-600">{step.title}</h5>
                <p className="text-[11px] text-slate-500 font-bold leading-relaxed">{step.desc}</p>
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 text-slate-200">
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceClaimPage;