const Marquee = () => {
  const items = [
    'FORMULATED IN FRANCE',
    'SALON EXCLUSIVE',
    'THE GOLD STANDARD',
    'FORTIFIED WITH AMINO ACIDS',
  ];

  return (
    <div className="bg-card overflow-hidden py-2.5 border-y border-border/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <span key={j} className="flex items-center">
                <span className="text-foreground/70 text-xs tracking-[0.25em] font-light mx-6">
                  {item}
                </span>
                <span className="text-primary text-xs mx-2">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
