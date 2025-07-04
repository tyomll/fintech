"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebarOverlay = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    />
  );
};

export default DashboardSidebarOverlay;
