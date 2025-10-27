const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 animate-pulse">
          <img src="/icon-logo.png" alt="Solstice Sanctuary Logo" className="w-full h-full object-contain animate-spin-slow" />
        </div>
        <p className="text-muted-foreground font-medium">Loading your sanctuary...</p>
      </div>
    </div>
  );
};

export default Loader;
