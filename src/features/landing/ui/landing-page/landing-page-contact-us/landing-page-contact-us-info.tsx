import { CONTACT_ITEMS } from "@/features/landing/lib/constants";

const LandingPageContactUsInfo = () => (
  <div className="space-y-8">
    <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
    <div className="space-y-6">
      {CONTACT_ITEMS.map((item, index) => (
        <div key={index} className="flex items-start group">
          <div
            className={`bg-gradient-to-r ${item.gradient} p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
          >
            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              {item.title}
            </p>
            <p className="text-slate-400 whitespace-pre-line">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LandingPageContactUsInfo;
