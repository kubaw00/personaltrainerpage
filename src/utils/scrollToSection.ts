export const scrollToSection = (id: string) => {
  const section = document.querySelector(`${id}`) as HTMLElement | null;

  if (section) {
    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: "smooth",
    });
  }
};
