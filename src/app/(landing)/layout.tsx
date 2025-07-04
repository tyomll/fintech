import LandingPageHeader from "@/features/landing/ui/landing-page/landing-page-header/landing-page-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LandingPageHeader />
      {children}
    </>
  );
};

export default layout;
