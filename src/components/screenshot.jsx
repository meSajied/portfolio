function Screenshot() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="text-sm text-center">A recognition from ChatGPT</p>
      <img
        src="screenshot.png"
        alt="image"
        className="hidden md:block w-[50%] rounded-md"
      />
    </div>
  );
}

export {Screenshot};