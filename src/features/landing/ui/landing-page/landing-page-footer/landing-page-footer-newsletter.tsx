import { Button } from "@/shared/@core/ui/button";

const LandingPageFooterNewsletter = () => (
  <div className="border-t border-slate-800/50 mt-16 pt-12">
    <div className="max-w-md mx-auto text-center">
      <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
      <p className="text-slate-400 mb-6">
        Get the latest market insights and AI predictions delivered to your
        inbox.
      </p>
      <div className="flex items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
          aria-label="Email address"
        />
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 rounded-xl">
          Subscribe
        </Button>
      </div>
    </div>
  </div>
);

export default LandingPageFooterNewsletter;
