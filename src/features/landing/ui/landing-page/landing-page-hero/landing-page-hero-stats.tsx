const stats = [
  {
    value: "99.9%",
    label: "Prediction Accuracy (After winning the hackathon) ",
  },
  { value: "50K+", label: "Active Users (After winning the hackathon)" },
  { value: "$2.5B+", label: "Assets Managed (After winning the hackathon)" },
];

const LandingPageHeroStats = () => (
  <div
    className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20"
    aria-label="Hero Stats"
  >
    {stats.map((stat, index) => (
      <div key={index} className="text-center">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          {stat.value}
        </div>
        <div className="text-slate-400 text-sm uppercase tracking-wider">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

export default LandingPageHeroStats;
