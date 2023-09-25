export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO_URL =
  "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png";

export const USER_AVATAR_URL = "https://avatars.githubusercontent.com/u/84857323?v=4";

export const DEFAULT_USER_AVATAR_URL =
  "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbCL6LUIHvRieXJLEY0Jq6AxJmhEiLpZ-9U42s2-XxOQLeA5D71cQBnph9xdZBQpwi-5SET231ylQqok29OIepgmRzHUEzY.png?r=7ae";

  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_LANGUAGE = [
    { identifier: "en", name:"English"},
    { identifier: "hindi", name:"Hindi"},
    { identifier: "gujarati", name:"Gujarati"},
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
