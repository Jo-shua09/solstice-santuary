const Loader = () => {
  return (
    <div className="fixed inset-0 top-0 bg-background z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-30 h-30 animate-pulse">
          <img src="/logo.png" alt="Solstice Sanctuary Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
