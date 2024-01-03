export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-5005-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "es", name: "Spanish" },
  { identifier: "fr", name: "French" },
  { identifier: "de", name: "German" },
  { identifier: "it", name: "Italian" },
  { identifier: "pt", name: "Portuguese" },
  { identifier: "ru", name: "Russian" },
  { identifier: "ja", name: "Japanese" },
  { identifier: "zh", name: "Chinese (Simplified)" },
  { identifier: "ar", name: "Arabic" },
  { identifier: "ko", name: "Korean" },
  { identifier: "nl", name: "Dutch" },
  { identifier: "sv", name: "Swedish" },
  { identifier: "da", name: "Danish" },
  { identifier: "fi", name: "Finnish" },
  { identifier: "no", name: "Norwegian" },
  { identifier: "pl", name: "Polish" },
  { identifier: "tr", name: "Turkish" },
  { identifier: "el", name: "Greek" },
  { identifier: "hi", name: "Hindi" },
];

export const OPEN_AI_KEY =
  // "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";
  import.meta.env.VITE_OPENAI_KEY;
