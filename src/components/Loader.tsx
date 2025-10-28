const Loader = () => {
  return (
    <div className="fixed inset-0 top-0 bg-background z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative md:w-52 md:h-52 w-32 h-32 animate-pulse">
          <img src="/logo.png" alt="Solstice Sanctuary Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
