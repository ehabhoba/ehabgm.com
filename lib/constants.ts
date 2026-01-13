// SEO constants and configuration

export const SEO_CONFIG = {
  baseUrl: "https://ehabgm.com",
  siteName: "EhabGM",
  siteNameAr: "إيهاب جي إم",
  description: "وكالة التسويق الرقمي والتصميم الاحترافية في مصر",
  descriptionEn: "Professional digital marketing and design agency in Egypt",
  phone: "+201022679250",
  email: "info@ehabgm.com",
  logo: "https://i.postimg.cc/TYyK2Rtv/logo.png",
  socialLinks: {
    whatsapp: "https://wa.me/201022679250",
    facebook: "https://facebook.com/ehab.gm1",
  },
  location: {
    city: "Helwan",
    cityAr: "حلوان",
    region: "Cairo",
    regionAr: "القاهرة",
    country: "Egypt",
    countryAr: "مصر",
    countryCode: "EG",
    coordinates: {
      lat: 29.85,
      lng: 31.3333,
    },
  },
  rating: {
    value: 4.9,
    count: 100,
    bestRating: 5,
    worstRating: 1,
  },
}

export const PAGINATION_CONFIG = {
  locationsPerPage: 12,
  servicesPerPage: 8,
}

export const CACHE_CONFIG = {
  revalidate: 3600, // 1 hour
  tags: ["geo-pages", "services", "locations"],
}
