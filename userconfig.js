// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UA",
      timezone: "Europe/Kyiv",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      // p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      // d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/?q="],
      aw: ["https://wiki.archlinux.org/?search="],
      apkg: ["https://archlinux.org/packages/?sort=&q="],
      aur: ["https://aur.archlinux.org/packages?K="],
      gh: ["https://github.com/search?o=desc&s=stars&q="],
      yt: ["https://www.youtube.com/results?search_query="],
      w: ["https://wikipedia.org/w/index.php?search="],
    },
    default: "g",
  },
  keybindings: {
    s: "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
