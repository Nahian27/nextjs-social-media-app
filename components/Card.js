export default function Card({ children, noPadding,marginTop }) {
  let classes = 'bg-gray-900 shadow-xl rounded-md mb-5';
  if (!noPadding) {
    classes += ' p-4';
  }
  if (marginTop) {
    classes += ' mt-5';
  }
  return (
    <div className={classes}>
      {children}
    </div>
  );
}