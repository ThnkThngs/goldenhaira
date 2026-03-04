import { useState } from 'react';
import { motion } from 'framer-motion';
import { Beaker, Loader2, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { streamAI } from '@/lib/ai-stream';
import { toast } from '@/hooks/use-toast';

const Cocktailing = () => {
  const [products, setProducts] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!products.trim()) return;
    setResult('');
    setLoading(true);
    try {
      await streamAI({
        type: 'cocktailing',
        userMessage: `My current styling products: ${products}. Create a layering guide combining these with The Golden Haira Argan Bonding Oil.`,
        onDelta: (chunk) => setResult(prev => prev + chunk),
        onDone: () => setLoading(false),
      });
    } catch (e) {
      setLoading(false);
      toast({ title: 'Error', description: e instanceof Error ? e.message : 'Failed', variant: 'destructive' });
    }
  };

  return (
    <section id="cocktailing" className="py-24 bg-[hsl(var(--dark-deep))] text-[hsl(var(--cream))] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--gold-light))] mb-4">Product Synergy</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">The Art of Cocktailing</h2>
          <p className="text-[hsl(var(--gold-light))]/70 font-light max-w-xl mx-auto">
            Discover how to layer The Golden Haira Argan Bonding Oil with your favorite styling products.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="relative">
            <Textarea
              placeholder="List your current styling products... e.g. 'heat protectant spray, volumizing mousse, leave-in conditioner'"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              className="min-h-[100px] bg-[hsl(var(--dark))] border-[hsl(var(--gold))]/20 text-[hsl(var(--cream))] font-light pr-14 resize-none placeholder:text-[hsl(var(--gold-light))]/40"
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); generate(); } }}
            />
            <button
              onClick={generate}
              disabled={loading || !products.trim()}
              className="absolute bottom-3 right-3 p-2 bg-[hsl(var(--gold))] text-[hsl(var(--dark))] hover:bg-[hsl(var(--gold-light))] transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>

          {(result || loading) && (
            <div className="p-8 border border-[hsl(var(--gold))]/20 bg-[hsl(var(--dark))]">
              <div className="flex items-center gap-2 mb-4">
                <Beaker size={14} className="text-[hsl(var(--gold-light))]" />
                <p className="text-xs tracking-[0.2em] uppercase text-[hsl(var(--gold-light))]">Your Cocktailing Guide</p>
              </div>
              <div className="prose prose-sm prose-invert max-w-none font-light leading-relaxed whitespace-pre-wrap">
                {result}
                {loading && <span className="inline-block w-2 h-4 bg-[hsl(var(--gold))]/60 animate-pulse ml-1" />}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Cocktailing;
