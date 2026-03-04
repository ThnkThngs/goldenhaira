import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Loader2, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { streamAI } from '@/lib/ai-stream';
import { toast } from '@/hooks/use-toast';

const AskExpert = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) return;
    setAnswer('');
    setLoading(true);
    try {
      await streamAI({
        type: 'expert',
        userMessage: question,
        onDelta: (chunk) => setAnswer(prev => prev + chunk),
        onDone: () => setLoading(false),
      });
    } catch (e) {
      setLoading(false);
      toast({ title: 'Error', description: e instanceof Error ? e.message : 'Failed', variant: 'destructive' });
    }
  };

  return (
    <section id="expert" className="py-24 bg-background scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Expert Advice</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Ask The Expert</h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Get professional hair care advice from Master Stylist Bambang Soteto's AI assistant.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="relative">
            <Textarea
              placeholder="Ask any hair care question... e.g. 'How do I reduce frizz in humid weather?'"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[100px] bg-card border-border text-foreground font-light pr-14 resize-none"
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); } }}
            />
            <button
              onClick={ask}
              disabled={loading || !question.trim()}
              className="absolute bottom-3 right-3 p-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>

          {(answer || loading) && (
            <div className="p-8 border border-primary/20 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle size={14} className="text-primary" />
                <p className="text-xs tracking-[0.2em] uppercase text-primary">Master Stylist Bambang Soteto</p>
              </div>
              <div className="prose prose-sm max-w-none text-foreground font-light leading-relaxed whitespace-pre-wrap">
                {answer}
                {loading && <span className="inline-block w-2 h-4 bg-primary/60 animate-pulse ml-1" />}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AskExpert;
