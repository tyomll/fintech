import LandingPageHeader from "@/features/landing/ui/landing-page/landing-page-header/landing-page-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LandingPageHeader />
      {children}
    </div>
  );
};

export default layout;
