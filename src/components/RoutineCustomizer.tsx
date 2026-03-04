import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { streamAI } from '@/lib/ai-stream';
import { toast } from '@/hooks/use-toast';

const hairTypes = ['Straight', 'Wavy', 'Curly', 'Coily'];
const concerns = ['Frizz', 'Dryness', 'Damage', 'Color-treated', 'Heat damage'];

const RoutineCustomizer = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleConcern = (c: string) => {
    setSelectedConcerns(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const generate = async () => {
    if (!selectedType) {
      toast({ title: 'Please select your hair type', variant: 'destructive' });
      return;
    }
    setResult('');
    setLoading(true);
    try {
      await streamAI({
        type: 'routine',
        userMessage: `My hair type is ${selectedType}. My concerns are: ${selectedConcerns.length ? selectedConcerns.join(', ') : 'general maintenance'}. Generate a personalized 3-step routine.`,
        onDelta: (chunk) => setResult(prev => prev + chunk),
        onDone: () => setLoading(false),
      });
    } catch (e) {
      setLoading(false);
      toast({ title: 'Error', description: e instanceof Error ? e.message : 'Failed to generate routine', variant: 'destructive' });
    }
  };

  return (
    <section id="routine" className="py-24 bg-primary/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">AI-Powered</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Your Personalized Routine</h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Tell us about your hair and get a custom 3-step routine featuring The Golden Haira Argan Bonding Oil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Inputs */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 border border-border bg-card">
            <h3 className="font-serif text-xl text-foreground mb-6">Hair Type</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {hairTypes.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-4 py-3 border text-sm tracking-wide transition-all ${
                    selectedType === t
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border text-muted-foreground hover:border-primary/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <h3 className="font-serif text-xl text-foreground mb-4">Concerns</h3>
            <div className="space-y-3 mb-8">
              {concerns.map(c => (
                <div key={c} className="flex items-center space-x-3">
                  <Checkbox
                    id={c}
                    checked={selectedConcerns.includes(c)}
                    onCheckedChange={() => toggleConcern(c)}
                  />
                  <Label htmlFor={c} className="text-sm text-muted-foreground font-light cursor-pointer">{c}</Label>
                </div>
              ))}
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 size={14} className="mr-2 animate-spin" /> : <Sparkles size={14} className="mr-2" />}
              {loading ? 'Generating...' : 'Generate My Routine'}
            </button>
          </motion.div>

          {/* Right: Result */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 border border-primary/20 bg-card min-h-[400px]">
            {!result && !loading && (
              <div className="flex items-center justify-center h-full text-muted-foreground font-light text-sm">
                <p>Your personalized routine will appear here ✦</p>
              </div>
            )}
            {(result || loading) && (
              <div className="prose prose-sm max-w-none text-foreground font-light leading-relaxed whitespace-pre-wrap">
                {result}
                {loading && <span className="inline-block w-2 h-4 bg-primary/60 animate-pulse ml-1" />}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoutineCustomizer;
