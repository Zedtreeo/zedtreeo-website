type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-zt-accent">{value}</div>
      <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
