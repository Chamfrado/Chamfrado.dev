import { AnimatePresence } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import CityView from "../components/city/CityView";
import IntroOverlay from "../components/intro/IntroOverlay";

const INTRO_STORAGE_KEY = "chamfrado:intro-seen";

function shouldShowIntro() {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);

  if (params.get("skipIntro") === "1") return false;
  if (params.get("intro") === "1") {
    window.localStorage.removeItem(INTRO_STORAGE_KEY);
    return true;
  }

  return window.localStorage.getItem(INTRO_STORAGE_KEY) !== "true";
}

export default function HomePage() {
  const [introVisible, setIntroVisible] = useState(shouldShowIntro);

  const introEnabled = useMemo(() => introVisible, [introVisible]);

  const finishIntro = useCallback(() => {
    window.localStorage.setItem(INTRO_STORAGE_KEY, "true");
    setIntroVisible(false);
  }, []);

  return (
    <>
      <CityView />
      <AnimatePresence>
        {introEnabled ? <IntroOverlay onFinish={finishIntro} /> : null}
      </AnimatePresence>
    </>
  );
}
