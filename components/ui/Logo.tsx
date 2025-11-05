const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizes = {
    small: "w-8 h-8",
    default: "w-12 h-12", 
    large: "w-16 h-16"
  };

  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      {/* خرس فانتزی */}
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
        <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-3 left-3 right-3 h-1 bg-white rounded-full"></div>
      </div>
      
      {/* متن لوگو */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800 leading-6">ZiiZii</span>
        <span className="text-sm text-gray-600 leading-4">Kids</span>
      </div>
    </div>
  );
};

export default Logo;