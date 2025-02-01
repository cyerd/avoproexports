import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Get the user's default language
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = userLang.split("-")[0]; // Extract main language (e.g., "en" from "en-US")

    // Inject Google Translate script only once
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Google Translate with device language
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: defaultLang },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
}
