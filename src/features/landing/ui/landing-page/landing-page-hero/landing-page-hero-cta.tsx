import { Button } from "@/shared/ui/@core/button";
import { ArrowRight, Play } from "lucide-react";

const LandingPageHeroCTA = () => (
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <Button
      size="lg"
      className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-base rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
      tabIndex={0}
      aria-label="Start Your Journey"
    >
      Start Your Journey
      <ArrowRight
        className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
        aria-hidden="true"
      />
    </Button>
    <Button
      size="lg"
      variant="outline"
      className="group border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 py-4 text-lg rounded-xl bg-slate-900/50 backdrop-blur-sm hover:border-slate-500 transition-all duration-300"
      tabIndex={0}
      aria-label="Watch Demo"
    >
      <Play
        className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
        aria-hidden="true"
      />
      Watch Demo
    </Button>
  </div>
);

export default LandingPageHeroCTA;
