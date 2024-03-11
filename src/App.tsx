import useFileDrop from "./hooks/useFileDrop";

function App() {
  const { isDraggingFile } = useFileDrop();

  return (
    <div
      className={`bg-slate-700 h-screen flex items-center justify-center ${
        isDraggingFile ? "border-4 border-dashed border-cyan-500" : ""
      }`}
    >
      <p className="text-white text-2xl">
        Drag an image to this window to get started
      </p>
    </div>
  );
}

export default App;
