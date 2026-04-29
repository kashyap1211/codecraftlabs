import preschoolallscreen from "../assets/Images/preschoolallscreen.png";
import preschool from "../assets/Images/preschool.png";
import preschoolabout from "../assets/Images/preschoolabout.png";
import preschoolevent from "../assets/Images/preschoolevent.png";
import preschoolinquiry from "../assets/Images/preschoolinquiry.png";

import travelallscreen from "../assets/Images/airtoursallscreen.png";
import travel from "../assets/Images/airtours.png";

import travelwhychooseus from "../assets/Images/airtourswhychooseus.png";
import travelService from "../assets/Images/airtoursServicea.png";
import travelcontact from "../assets/Images/airtourscontact.png";


import cliniccrm from "../assets/Images/Cliniccrm.png";
import clinicsuperadmin from "../assets/Images/dashboard.png";
import clinicadmin from "../assets/Images/admindashboard.png";
import clinicstaff from "../assets/Images/staffdashboard.png";
import clinicplateformcommission from "../assets/Images/plateformcommission.png";


import realestatecrm from "../assets/Images/real-eastate.png";
import realestateowner from "../assets/Images/owner-dashboard.png";
import realestateemployee from "../assets/Images/real-eatate-employee-dashboard.png";
import realestateleads from "../assets/Images/real-estat-followups.png";
import realestateproperty from "../assets/Images/real-estatreports.png";


export const projectsData = [
  {
    id: 1,
    slug: "preschool-website",
    title: "Preschool Website",
    category: "Web Development",
    image: preschoolallscreen,

    description:
      "A complete preschool website designed to provide a friendly and engaging experience for parents. The platform showcases school information, activities, and allows parents to easily connect with the institution.",

    features: [
      "Home, About, Classes, Events, Blog & Contact Pages",
      "Admission Inquiry Form with Google Sheets Integration",
      "User-friendly and responsive UI design",
      "Optimized performance and fast loading",
    ],

    tech: ["React", "Tailwind", "Google Sheets API"],

    images: [preschool, preschoolabout, preschoolevent, preschoolinquiry],
  },

  {
    id: 2,
    slug: "travel-agency",
    title: "Travel Agency Website",
    category: "Web Application",
    image: travelallscreen,

    description:
      "A modern travel agency platform built to showcase destinations, services, and generate leads through an interactive contact system.",

    features: [
      "Home, About, Services & Contact Pages",
      "Lead Generation System using Contact Form",
      "Real-time data handling with React + Node.js",
      "API integration for dynamic content",
    ],

    tech: ["React", "Node.js", "MongoDB", "REST API"],

    images: [travel, travelwhychooseus, travelService, travelcontact],
  },

  {
    id: 3,
    slug: "clinic-management",
    title: "Clinic Management CRM",
    category: "CRM",
    image: cliniccrm,

    description:
      "A full-featured clinic management CRM system designed to handle appointments, patient records, staff management, and administrative operations efficiently.",

    features: [
      "Super Admin Panel with permission control",
      "Clinic Admin Panel to manage staff & patients",
      "Staff Panel for daily operations",
      "User Panel for appointment booking",
      "Appointment scheduling & patient management",
      "Razorpay payment integration",
      "Multi-level admin system (Super Admin & Sub-Admin)",
    ],

    tech: ["React", "Node.js", "MySQL", "Razorpay"],

    images: [clinicsuperadmin, clinicadmin, clinicstaff, clinicplateformcommission],
  },

  {
  id: 4,
  slug: "real-estate-crm",
  title: "Real Estate Lead Management CRM",
  category: "CRM",
  image: realestatecrm,

  description:
    "A powerful real estate CRM system designed to manage property listings, leads, and client interactions efficiently. The platform helps owners and employees streamline sales processes, track follow-ups, and generate insightful reports.",

  features: [
    "Owner Dashboard with full system control & analytics",
    "Employee Dashboard for managing daily activities",
    "Lead Management System with status tracking",
    "Property Listing & Management Module",
    "Follow-up & Reminder System for leads",
    "Audit Reports & performance tracking",
    "Role-based access control (Owner & Employees)",
    "Secure and scalable architecture",
  ],

  tech: ["React", "Node.js", "MongoDB", "REST API"],

  images: [
    realestateowner,
    realestateemployee,
    realestateleads,
    realestateproperty,
  ],
}
];

