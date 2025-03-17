// app/page.tsx
export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/start-background.webp')", 
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}
      ></div>
      
      {/* Overlaying Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Välkommen till Hawaii Shop!</h1>
        <p className="text-lg md:text-2xl mt-4 drop-shadow-lg">Upptäck våra somriga produkter! 🌴</p>
      </div>
    </div>
  );
}