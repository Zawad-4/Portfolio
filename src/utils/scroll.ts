export const handleScroll = (
  setActiveSection: (section: string) => void,
  setIsScrolling: (isScrolling: boolean) => void
) => {
  setIsScrolling(true);
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150);

  const sections = ['hero', 'about', 'projects', 'contact'];
  const current = sections.find(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight / 2;
    }
    return false;
  });
  if (current) setActiveSection(current);
};