export default function SectionHeader({ step, title }) {
  return (
    <div className="flex flex-col items-end mb-10">
      <span className="absolute text-black-/50 text-xs uppercase my-auto">
        {title}
      </span>
      <div className="flex items-center w-full gap-3">
        <div className="relative w-10 h-10 transform rotate-45 border border-black/10 flex items-center justify-center rounded-lg">
          <span className="transform -rotate-45 text-sm">{step}</span>
        </div>
        <div className="flex-grow border-t border-black/10"></div>
      </div>
    </div>
  );
}
