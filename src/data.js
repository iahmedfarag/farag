import athaththumb from "./assets/images/portfolio/athath/hero.png";
import athath1 from "./assets/images/portfolio/athath/home.png";
import athath2 from "./assets/images/portfolio/athath/products.png";
import athath3 from "./assets/images/portfolio/athath/cart.png";

import jobthumb from "./assets/images/portfolio/jobhunter/landing page.png";
import job1 from "./assets/images/portfolio/jobhunter/job.png";
import job2 from "./assets/images/portfolio/jobhunter/add.png";
import job3 from "./assets/images/portfolio/jobhunter/all.png";
import job4 from "./assets/images/portfolio/jobhunter/profile.png";

import timethumb from "./assets/images/portfolio/timezone/hero.png";
import time1 from "./assets/images/portfolio/timezone/home.png";
import time2 from "./assets/images/portfolio/timezone/shop.png";
import time3 from "./assets/images/portfolio/timezone/cart.png";
import time4 from "./assets/images/portfolio/timezone/signin.png";

export const navLinks = [
  { id: 1, text: "About", url: "/about" },
  { id: 2, text: "Portfolio", url: "/portfolio" },
  { id: 3, text: "Skills", url: "/skills" },
  { id: 4, text: "Contact", url: "/contact" },
];
export const portfolio = {
  projects: [
    {
      id: 1,
      thumbnail: athaththumb,
      images: [athath1, athath2, athath3],
      title: "Athath",
      short_description:
        "Furniture e-commerce is the sale of furniture and home goods online.",
      description: {
        header: "Welcome to our furniture website!",
        body: "Furniture website offers a wide variety of furniture for your home, including sofas, chairs, tables, beds, and more.",
      },
      features: [
        "A user-friendly interface that makes it easy to find the perfect furniture for you.",
        "The ability to  products by category, company, color, price, and more.",
        "The ability to sort products by price, name, and more.",
        "The ability to display products by grid view or list view.",
        "Secure payment processing with Stripe.",
        "User login and registration with Auth0.",
        "To checkout, you must first create an account or log in to an existing account.",
      ],
      skills: ["HTML", "CSS", "Sass", "React", "React-Styled-Components"],
      urls: {
        demo: "https://athathe.netlify.app/",
        git: "https://github.com/iahmedfarag/Athath",
      },
    },
    {
      id: 2,
      thumbnail: jobthumb,
      images: [job1, job2, job3, job4],
      title: "Job Hunter",
      short_description:
        "For employers, Job Hunter provides a variety of tools to help them post and manage job listings.",
      description: {
        header: "Welcome to our job hunter website!",
        body: "Job Hunter is a website that helps job seekers find and apply for jobs. The website is easy to use.",
      },
      features: [
        "Job search: You can browse the job listings by location, job title, and other criteria.",
        "Job application: You can apply for jobs with just a few clicks of a button.",
        "Profile editing: Job Hunter allows you to edit your profile.",
        "Pagination: Job Hunter has pagination for all jobs pages. This means that you can view more jobs by clicking the 'Next' button.",
        "Job filtering: Job Hunter allows you to filter jobs by location, job title, and other criteria.",
      ],
      skills: [
        "HTML",
        "CSS",
        "Sass",
        "React",
        "React-Styled-Components",
        "REDUX-TOOLKIT",
      ],
      urls: {
        demo: "https://jobhunteer.netlify.app/",
        git: "https://github.com/iahmedfarag/jobHunter",
      },
    },
    {
      id: 3,
      thumbnail: timethumb,
      images: [time1, time2, time3, time4],
      title: "Time Zone",
      short_description:
        "Time Zone is an e-commerce website that sells watches. The website offers a wide variety of watches.",
      description: {
        header: "Welcome to our time zone website!",
        body: "Time Zone is an e-commerce website offers a wide variety of watches for men.",
      },
      features: [
        "A user-friendly interface that makes it easy to find the perfect watch for you",
        "The ability to filter products by brand, style, price, and more",
        "The ability to add products to your cart and checkout securely",
        "To checkout, you must first create an account or log in to an existing account.",
        "We offer free shipping on orders over $50 and a satisfaction guarantee on all of our products.",
      ],
      skills: [
        "HTML",
        "CSS",
        "Sass",
        "React",
        "React-Styled-Components",
        "REDUX-TOOLKIT",
      ],
      urls: {
        demo: "https://timezonee.netlify.app/",
        git: "https://github.com/iahmedfarag/TimeZone",
      },
    },
  ],
  extra: [
    {
      id: 101,
      thumbnail: athaththumb,
      images: [athath1],
      title: "Athath",
      short_description:
        "Furniture e-commerce is the sale of furniture and home goods online.",
      description: {
        header: "Welcome to our furniture website!",
        body: "We offer a wide variety of furniture for your home, including sofas, chairs, tables, beds, and more. Whether you're looking for a new sofa for your living room or a new bed for your bedroom, we have something for everyone.",
      },
      features: [
        "A user-friendly interface that makes it easy to find the perfect furniture for you.",
        "A wide variety of furniture to choose from, including sofas, chairs, tables, beds, and more.",
        "The ability to filter products by category, company, color, price, and more.",
        "The ability to sort products by price, name, and more.",
        "The ability to display products by grid view or list view.",
        "Secure payment processing with Stripe.",
        "User login and registration with Auth0.",
        "To checkout, you must first create an account or log in to an existing account.",
      ],
      skills: ["HTML", "CSS", "Sass", "React", "React-Styled-Components"],
      urls: {
        demo: "https://athathe.netlify.app/",
        git: "https://github.com/iahmedfarag/Athath",
      },
    },
  ],
};
