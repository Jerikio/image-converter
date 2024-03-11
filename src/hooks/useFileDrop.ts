import { useEffect, useState } from "react";
import { UnlistenFn, listen } from "@tauri-apps/api/event";

export default function useFileDrop() {
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

  return { isDraggingFile };
}
