import { useState, useEffect } from "react";
import { listen } from '@tauri-apps/api/event';

function App() {
  const [isDraggingFile, setIsDraggingFile] = useState(false);

  useEffect(() => {
    listen("tauri://file-drop", () => {
      setIsDraggingFile(false);
    })

    listen("tauri://file-drop-hover", () => {
      setIsDraggingFile(true);
    });

    listen("tauri://file-drop-cancelled", () => {
      setIsDraggingFile(false);
    });
  }, []);

  return (
    <div className={`bg-slate-700 h-screen flex items-center justify-center ${isDraggingFile ? "border-4 border-dashed border-cyan-500" : ""}`}>
      <p className="text-white text-2xl">Drag a file to this window to get started</p>
    </div>
  );
}

export default App;
