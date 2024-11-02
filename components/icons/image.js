export default function ImageIcon({
  width = 24,
  height = 24,
  color = "currentColor",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-5-9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4 8H6l3.5-4.5 2.5 3.01L15.5 13l4.5 5z" />
    </svg>
  );
}
