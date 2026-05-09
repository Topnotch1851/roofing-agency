/**
 * Curated Unsplash photography.
 * All IDs are long-standing, high-engagement photos from Unsplash's
 * architecture / residential / construction collections.
 *
 * ----------------------------------------------------------------------
 * REBRAND NOTE: Before launch, replace this entire file with the client's
 * own project photography. Unsplash is a demo fallback only.
 * ----------------------------------------------------------------------
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const photos = {
  // Hero — aspirational exterior (main landing shot)
  heroHouse: u("photo-1600585154340-be6161a56a0c", 1600),

  // Residential exteriors — variety of styles for galleries
  craftsman: u("photo-1512917774080-9991f1c4c750", 1400),
  modernWhite: u("photo-1580587771525-78b9dba3b914", 1400),
  modernGrey: u("photo-1600596542815-ffad4c1539a9", 1400),
  luxuryEvening: u("photo-1613490493576-7fde63acd811", 1400),
  suburbanDay: u("photo-1568605114967-8130f3a36994", 1400),
  ranchStyle: u("photo-1570129477492-45c003edd2be", 1400),
  brickFacade: u("photo-1605146768851-eda79da39897", 1400),
  modernLines: u("photo-1564013799919-ab600027ffc6", 1400),

  // Construction / crew / close-ups
  crewRoof: u("photo-1632823469850-1b7b1e8b7e80", 1600),
  shingleDetail: u("photo-1621905251189-08b45d6a269e", 1400),
  stormSky: u("photo-1518826778770-a729fb53327c", 1600),
  damagedRoof: u("photo-1605276374104-dee2a0ed3cd6", 1600),
  teamMeeting: u("photo-1582407947304-fd86f028f716", 1600),

  // Blog editorial
  blogClaims: u("photo-1450101499163-c8848c66ca85", 1600),
  blogMaterials: u("photo-1497366216548-37526070297c", 1200),
  blogInspect: u("photo-1621905251918-48416bd8575a", 1200),
  blogGutters: u("photo-1558618666-fcd25c85cd64", 1200),
};

/** Service-page hero (keyed by service slug) */
export const servicePhotos: Record<string, string> = {
  "roof-replacement": photos.crewRoof,
  "roof-repair": photos.shingleDetail,
  "storm-damage": photos.blogClaims,
  "gutters": photos.blogGutters,
};

/** Service-area hero (keyed by area slug) */
export const areaPhotos: Record<string, string> = {
  dallas: photos.craftsman,
  plano: photos.suburbanDay,
  frisco: photos.modernGrey,
};

/** Gallery project imagery (keyed by project id) */
export const projectPhotos: Record<string, string> = {
  lakewood: photos.craftsman,
  "preston-hollow": photos.modernLines,
  "willow-bend": photos.modernWhite,
  "phillips-creek": photos.ranchStyle,
};
