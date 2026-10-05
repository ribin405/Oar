/**
 * TEMPORARY photography registry.
 *
 * None of these are Oar's own vessels, ports or facilities — they are
 * generic, industry-appropriate maritime photography sourced from
 * Wikimedia Commons, used only to establish the visual direction until
 * real Oar operational photography is supplied.
 *
 * Every entry is independently verified (direct URL, dimensions, license)
 * and properly credited below. When real photography arrives, swap the
 * `src` (and drop `credit`) here — nothing elsewhere needs to change.
 */

export type PlaceholderImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: {
    title: string;
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  } | null;
};

export const placeholderImages = {
  heroVessel: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/55/Hapag-Lloyd_Container_Ship_Tokyo_Express_in_Colon_Panama_2016_6070.jpg",
    width: 5409,
    height: 2836,
    alt: "A container ship alongside a port terminal",
    credit: {
      title: "Hapag-Lloyd Container Ship Tokyo Express in Colon, Panama",
      author: "Chrstphre Campbell",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hapag-Lloyd_Container_Ship_Tokyo_Express_in_Colon_Panama_2016_6070.jpg",
    },
  },
  portTerminal: {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Containerhafen_Niehl.jpg",
    width: 4729,
    height: 2967,
    alt: "A container terminal with stacked containers and gantry cranes",
    credit: {
      title: "Containerhafen Niehl",
      author: "Raimond Spekking",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Containerhafen_Niehl.jpg",
    },
  },
  portAerial: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Peel_Ports_Dublin._Marine_Terminals_Ltd_MTL_Dublin_5148.jpg",
    width: 4884,
    height: 2776,
    alt: "An aerial view of a marine container terminal",
    credit: {
      title: "Peel Ports Dublin — Marine Terminals Ltd",
      author: "William Murphy",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Peel_Ports_Dublin._Marine_Terminals_Ltd_MTL_Dublin_5148.jpg",
    },
  },
  portWide: {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Port_of_Shanghai%2C_Yangshan_Deep-water_Harbour_Zone%2C_02.jpg",
    width: 1024,
    height: 768,
    alt: "A wide view of a deep-water container port",
    credit: null, // released into the public domain by the copyright holder
  },
} satisfies Record<string, PlaceholderImage>;
