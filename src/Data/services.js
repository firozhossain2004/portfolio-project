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
      "UI/UX Design, App Design, Website Design, Dashboard Design, Webflow Development, Mobile App Design",

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
    title: "Marketing",
    highlight: "Graphics",
    description:
      "Social Media Design, Ad Creatives, Banner Design, Poster Design, Campaign Visuals, Print Materials",

    features: [
      "Social Media Posts",
      "Creative Ad Designs",
      "Flyers & Brochures",
    ],

    images: {
      main: img2,
      secondary: img22,
    },
  },

  {
    id: 3,
    title: "UI/UX",
    highlight: "Experience",
    description:
      "Website UI Design, Mobile App UI, Dashboard UX, User Research, Wireframing, Prototyping",

    features: [
      "Modern UI Design",
      "User Experience Optimization",
      "Interactive Prototypes",
    ],

    images: {
      main: img3,
      secondary: img33,
    },
  },
];

export default servicesData;