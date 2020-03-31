export const handleScrollStop = () => {
  document.body.style.overflow = "hidden";
};

// tried to add it, but gives 50/50 results
// so i decided to put all action to onWheel
export const handleScrollActive = (timer: any) => {
  document.body.style.overflow = "unset";
  clearTimeout(timer);
  timer = setTimeout(handleScrollStop, 2500);
};
