import { MessageCircle } from "lucide-react";

const LandingPageContactUsHeader = () => (
  <div className="text-center mb-20">
    <div
      className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6"
      tabIndex={0}
      aria-label="Get in Touch Badge"
    >
      <MessageCircle
        className="h-4 w-4 text-blue-400 mr-2"
        aria-hidden="true"
      />
      <span className="text-slate-300 text-sm font-medium">Get in Touch</span>
    </div>
    <h2
      className="text-4xl sm:text-5xl font-bold mb-6"
      tabIndex={0}
      aria-label="Ready to Transform Your Finances?"
    >
      <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
        Ready to Transform Your Finances?
      </span>
    </h2>
    <p
      className="text-xl text-slate-400 max-w-3xl mx-auto"
      tabIndex={0}
      aria-label="Contact Subtitle"
    >
      Connect with our team of financial experts and discover how AI can
      revolutionize your investment strategy.
    </p>
  </div>
);

export default LandingPageContactUsHeader;
