import img1 from '../assets/Service/img1.jpg'
import img11 from '../assets/Service/img11.jpg'
import img2 from '../assets/Service/img2.jpg'
import img22 from '../assets/Service/img22.jpg'
import img3 from '../assets/Service/img3.jpg'
import img33 from '../assets/Service/img33.jpg'


const servicesData = [
  {
    id: 1,
    title: "Brand Identity",
    highlight: "Design",
    description:
      "Logo Design | Brand Guidelines | Color Palette |Stationery | Business Cards | Postcards & Mailers",

    features: [
      "Brand Identity Design",
      "Custom Business Card",
      "Elegant Postcards & Mailers",
    ],

    images: {
      main: img1,
      secondary: img11,
    },
  },

  {
    id: 2,
    title: "Brochure & Catalog Design",
    highlight: "Graphics",
    description:
      "Luxury Print Materials | Property Brochures |Catalogs | Company Profiles | Annual Reports",

    features: [
      "Luxury Property Brochures",
      "Real Estate Catalogs & Lookbooks",
      "Company Profiles & Annual Reports",
    ],

    images: {
      main: img2,
      secondary: img22,
    },
  },

  {
    id: 3,
    title: "Marketing Graphics",
    highlight: "Experience",
    description:
      "Social Media Design | Ad Creatives | Banner Design |Signage Design | Poster Design | Campaign Visuals |Print Material",

    features: [
      "Open House & Signage Design",
      "Social Media Posts & Ad Creatives",
      "Flyers, Posters & Campaign Visuals",
      "Print-Ready Marketing Collateral",
    ],
    images: {
      main: img3,
      secondary: img33,
    },
  },
];

export default servicesData;