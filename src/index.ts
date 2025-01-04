export const setDynamicBackground = () => {
  const baseHue = Math.random() * 360;
  const hue1 = baseHue;
  const hue2 = (baseHue + 120) % 360;
  const hue3 = (baseHue + 240) % 360;
  const saturation = 70 + Math.random() * 20;
  const lightness = 60 + Math.random() * 20;
  const alpha = 0.4;
  document.documentElement.style.setProperty(
    "--circle-1-color",
    `hsla(${hue1}, ${saturation}%, ${lightness}%, ${alpha})`
  );
  document.documentElement.style.setProperty(
    "--circle-2-color",
    `hsla(${hue2}, ${saturation}%, ${lightness}%, ${alpha})`
  );
  document.documentElement.style.setProperty(
    "--circle-3-color",
    `hsla(${hue3}, ${saturation}%, ${lightness}%, ${alpha})`
  );
};
