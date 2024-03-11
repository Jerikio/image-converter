import { useState, useEffect } from "react";
import { UnlistenFn, listen } from "@tauri-apps/api/event";

function App() {
  const [isDraggingFile, setIsDraggingFile] = useState(false);

  useEffect(() => {
    let unlisten: UnlistenFn = () => {};
    (async () => {
      unlisten = await listen("tauri://file-drop", () => {
        setIsDraggingFile(false);
      });
    })();

    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    let unlisten: UnlistenFn = () => {};
    (async () => {
      unlisten = await listen("tauri://file-drop-hover", () => {
        setIsDraggingFile(true);
      });
    })();

    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    let unlisten: UnlistenFn = () => {};
    (async () => {
      unlisten = await listen("tauri://file-drop-cancelled", () => {
        setIsDraggingFile(false);
      });
    })();

    return () => {
      unlisten();
    };
  }, []);

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
