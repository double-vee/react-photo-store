export function Image({ className, url }) {
  return (
    <div className={`${className} image-container`}>
      <img src={url} className="image" />
    </div>
  );
}
