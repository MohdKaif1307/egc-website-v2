interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  gradient?: string;
  backgroundSize?: 'cover' | 'contain' | 'auto' | '100% 100%';
  backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  height?: 'screen' | 'auto' | 'custom';
  customHeight?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
}

export default function Hero({ 
  backgroundImage, 
  title, 
  subtitle, 
  gradient = "from-primary-800 via-primary-700 to-primary-600",
  backgroundSize = "cover",
  backgroundPosition = "center",
  height = "screen",
  customHeight,
  titleClassName = "text-4xl md:text-5xl font-bold mb-6",
  subtitleClassName = "text-xl text-blue-100 max-w-3xl mx-auto",
  children 
}: HeroProps) {
  return (
    <section className={`relative bg-gradient-to-r ${gradient} text-white py-20 overflow-hidden ${
      height === 'screen' ? 'h-screen min-h-[600px]' : 
      height === 'custom' ? customHeight : 
      'py-20'
    }`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className={titleClassName}>
            {title}
          </h1>
          {subtitle && (
            <p className={subtitleClassName}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
