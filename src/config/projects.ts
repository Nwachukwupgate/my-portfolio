import type { StaticImageData } from 'next/image';
import ProfileImg from "../../images/detail/gmh.jpeg"
import BookmarkHero from "../../images/portfolio/gmh.png"
import PreviewA from "../../images/detail/gmha.jpeg"
import PreviewB from "../../images/detail/gmhb.jpeg"

import fyloCover from "../../images/portfolio/vineway.png"
import fyloHero from "../../images/detail/vineway.png"
import PreviewC from "../../images/detail/vine.png"
import PreviewD from "../../images/detail/vineb.png"

import insureCover from "../../images/portfolio/droom.png"
import insureHero from "../../images/detail/droom.png"
import PreviewE from "../../images/detail/drooma.png"
import PreviewF from "../../images/detail/droomb.png"

import manageCover from "../../images/portfolio/tinapay.png"
import manageHero from "../../images/detail/tinapay.png"
import PreviewG from "../../images/detail/tina1.png"
import PreviewH from "../../images/detail/tina2.png"

import clishaCover from "../../images/portfolio/clisha.png"
import clishaHero from "../../images/detail/clishaa.png"
import PreviewI from "../../images/detail/clishapreview.png"
import PreviewJ from "../../images/detail/clishab.png"

import companyCover from "../../images/portfolio/company.png"
import companyHero from "../../images/detail/companyreview.png"
import PreviewK from "../../images/detail/companya.png"
import PreviewL from "../../images/detail/companyb.png"

import deliveryCover from "../../images/portfolio/delivery.png"
import deliveryHero from "../../images/detail/deliveryreview.png"
import PreviewM from "../../images/detail/deliverya.png"
import PreviewN from "../../images/detail/deliveryb.png"

export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  slug: string;
  coverImage: string | StaticImageData;
  staticImages: {
    hero: string | StaticImageData;
    previews: StaticImageData[];
  };
  background: string;
};

export const gmh: ProjectType = {
  title: 'GMH',
  description:
    'This project can easily get a rank in my top 5. I worked as the only frontend engineer in digitalizing the internal processes of a real estate company. I used React.js, redux, and RTK Query for data fetching, caching, and refetching. The time frame of this project was the major high point with 4 months for coding, though the coding took me 6months day and night. But the project owner was okay and became a partner. Work efficiency was increased by 40% by the application I built for the company.',
  tags: ['React', 'Redux', 'Rtk Query', 'Tailwind Css', 'JS'],
  link: '/portfolio/gmh',
  slug: '/portfolio/gmh',
  coverImage: BookmarkHero,
  staticImages: {
    hero: ProfileImg,
    previews: [
      PreviewA,
      PreviewB,
    ],
  },
  background:
    "The digital transformation of internal processes within real estate companies has become imperative in today's competitive market landscape. Streamlining operations, enhancing communication, and optimizing workflows are crucial for staying ahead of the curve. Recognizing this need, our project embarked on the journey of automating internal processes for a real estate company, with the aim of revolutionizing their operational efficiency. As the sole frontend engineer entrusted with this pivotal task, I undertook the responsibility of digitalizing the company's internal processes. Leveraging my expertise in React.js, Redux, and RTK Query, I embarked on developing a robust application that would not only streamline operations but also set new standards for efficiency within the organization. The project's primary focus was on utilizing modern frontend technologies to automate various internal processes, ranging from property management to client interactions. React.js served as the foundational framework, providing a solid structure for building dynamic user interfaces. Redux was employed for state management, ensuring seamless data flow and consistency across different components. Additionally, RTK Query played a vital role in handling data fetching, caching, and refetching, thereby enhancing the application's performance and responsiveness. Despite facing challenges along the way, including tight deadlines and demanding coding schedules, the project timeline emerged as a major highlight. Completing the coding phase within a span of four months showcased not only my dedication but also the efficacy of the chosen technologies. While the coding process extended to six months, the project owner's understanding and support proved instrumental, ultimately leading to a partnership that fueled further innovation and collaboration. The impact of the application was profound, with work efficiency witnessing a remarkable surge of 40% post-implementation. Employees found themselves empowered with a user-friendly tool that streamlined their daily tasks, facilitating smoother communication, faster decision-making, and enhanced productivity. This significant improvement not only validated the project's success but also positioned it among the top achievements in my professional portfolio. In conclusion, the digitalization of internal processes within the real estate company marked a transformative journey fueled by innovation, dedication, and collaboration. Through the adept utilization of frontend technologies and a relentless commitment to excellence, the project succeeded in revolutionizing operations, ultimately driving substantial gains in efficiency and productivity.",
};

export const vineway: ProjectType = {
  title: 'Vineway',
  description:
    'This project was built in React and tailwind css. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
  tags: ['Interaction Design', 'Front End Development', 'React', 'Tailwind Css'],
  link: '/portfolio/vineway',
  slug: "https://www.vineway.io/",
  coverImage: fyloCover,
  staticImages: {
    hero: fyloHero,
    previews: [
      PreviewC,
      PreviewD,
    ],
  },
  background:
    "In the dynamic realm of logistics, the efficient tracking and management of goods play a pivotal role in ensuring timely deliveries and optimal customer satisfaction. Recognizing the need for a robust tracking solution, Vineway, a prominent logistics company, embarked on a journey to revolutionize its operations by harnessing the power of modern technology. The Vineway Logistics Tracking Platform emerged as a comprehensive solution designed to streamline the process of tracking goods from origin to destination. Built with React and Tailwind CSS, the platform embodies a perfect blend of functionality and aesthetics, catering to both desktop and mobile users with its fully-responsive design. As the visionary behind this transformative project, I was tasked with translating mobile and desktop designs into a seamless digital experience. Adopting a mobile-first approach, I meticulously crafted the platform's interface to ensure optimal usability and performance across various devices. Leveraging modern CSS techniques such as Flexbox and Grid, I implemented intuitive layouts that adapt seamlessly to different screen sizes, guaranteeing a consistent and engaging user experience. At its core, Vineway's tracking platform empowers both logistics professionals and end-users alike. For logistics personnel, the platform offers a centralized dashboard equipped with real-time tracking capabilities, enabling them to monitor the movement of goods with precision and efficiency. Meanwhile, for end-users awaiting their deliveries, the platform provides transparent visibility into the status of their shipments, fostering trust and confidence in Vineway's services. One of the platform's key features is its integration with Vineway's network of goods riders. Through this integration, riders can efficiently manage their assigned deliveries, optimizing routes and schedules to maximize efficiency and minimize delays. This seamless coordination between logistics operations and delivery personnel ensures swift and reliable service, ultimately enhancing customer satisfaction and loyalty. In conclusion, the Vineway Logistics Tracking Platform stands as a testament to the transformative power of technology in the realm of logistics. By harnessing the capabilities of React, Tailwind CSS, and modern CSS techniques, the platform sets a new standard for efficiency, transparency, and customer-centricity in the logistics industry. With its intuitive design, real-time tracking capabilities, and seamless integration with goods riders, Vineway is poised to redefine the way goods are tracked and delivered, paving the way for a future of unparalleled efficiency and reliability.",
};

export const droomwork: ProjectType = {
  title: 'Droomwork',
  description:
    'A startup i co-founded. Acted as the COO, Team Lead and developer. Built the welcome page with Next.js made api call with Static Side Generation(SSG) and Static Side Rendering(SSR) for the blog. The admin section was built using React.js using Redux toolkit Query(Rtk query) for data fetching and redux for state management.',
  tags: ['Tailwind Css', 'Front End Development', 'React', 'Next', 'JS'],
  link: '/portfolio/droomwork',
  slug: "https://www.droomwork.io/",
  coverImage: insureCover,
  staticImages: {
    hero: insureHero,
    previews: [
      PreviewE,
      PreviewF,
    ],
  },
  background:
    "In the ever-evolving landscape of technology, the demand for skilled developers continues to soar, creating a pressing need for innovative solutions that bridge the gap between talent and opportunity. Recognizing this need, Droomwork emerged as a pioneering platform that connects qualified developers with clients seeking top-tier technical expertise. As a co-founder and developer at Droomwork, I played a multifaceted role, serving as the Chief Operating Officer, Team Lead, and primary architect behind the platform's development. With a vision to revolutionize the way developers and clients interact, I spearheaded the creation of a dynamic and intuitive platform that streamlined the hiring process while empowering developers to showcase their skills and expertise. At the forefront of this endeavor was the creation of the Droomwork welcome page, a gateway to the platform's ecosystem. Leveraging the power of Next.js, I crafted a visually stunning and responsive welcome page that captivated users from the moment they landed on the site. Utilizing Static Site Generation (SSG) and Static Site Rendering (SSR), I ensured blazing-fast load times and seamless navigation, enhancing the overall user experience. One of the key features of the Droomwork platform was its integrated blog, serving as a hub for industry insights, best practices, and developer resources. Leveraging the versatility of Next.js, I implemented SSG and SSR to dynamically generate and render blog content, ensuring optimal performance and search engine visibility. This approach not only enhanced the platform's SEO capabilities but also provided users with a rich and engaging content experience. Central to the platform's functionality was the robust admin section, which served as the backbone of Droomwork's operations. Leveraging the power of React.js and Redux Toolkit Query (RTK Query), I developed a sophisticated admin interface that empowered team members to manage users, projects, and transactions with ease. By harnessing RTK Query for data fetching and Redux for state management, I ensured seamless communication between components, resulting in a cohesive and efficient user experience. In conclusion, Droomwork represents a groundbreaking solution that revolutionizes the way developers and clients connect and collaborate. As a co-founder and developer, I am proud to have played a pivotal role in bringing this vision to life, leveraging cutting-edge technologies such as Next.js, React.js, and Redux Toolkit Query to create a platform that empowers developers, delights clients, and drives innovation in the tech industry.",
};

export const tinapay: ProjectType = {
  title: 'Tinapay',
  description:
    'I was an outsource engineer for this project. Where i was part of the frontend team. I worked with Next.js, React.js, Redux, Context Api(state management). I built the landing page with NEXT because of its SEO support, the admin platform with React.js. With the seo support the platform has over 3k+ monthly visitors in a saturated fintech market.',
  tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  link: '/portfolio/tinapay',
  slug: "https://tinapay.co/",
  coverImage: manageCover,
  staticImages: {
    hero: manageHero,
    previews: [
      PreviewG,
      PreviewH,
    ],
  },
  background:
    "Tinapay.co, mission is to provide next-level solutions for digital payments, offering unparalleled value for users crypto assets. As an outsourced engineer on this project, I was an integral part of the frontend team, contributing to the development of key components using technologies such as Next.js, React.js, Redux, and the Context API for state management. One of the primary reasons for choosing Next.js for the landing page was its exceptional SEO support, which allowed us to optimize the platform for search engines effectively. By leveraging Next.js, we ensured that the Tinapay.co landing page ranked well in search engine results, driving organic traffic and enhancing the platform's visibility in a competitive fintech market. In addition to the landing page, I also played a significant role in building the admin platform using React.js. This platform provided administrators with the tools they needed to manage and oversee various aspects of the Tinapay.co ecosystem, ensuring smooth operations and efficient management of resources. Thanks to the robust SEO support provided by Next.js and the user-friendly interface of the admin platform built with React.js, Tinapay.co has experienced remarkable success, attracting over  monthly visitors despite operating in a saturated fintech market. Our dedication to delivering exceptional digital payment solutions has positioned Tinapay.co as a leader in the industry, offering unparalleled value and convenience to our users.",
};

export const Clisha: ProjectType = {
  title: 'Clisha',
  description:
    'Clisha is a platform that offers uers the opportunity to earn money by simply clicking, liking, and sharing content. You have the option to receive tokens, real money, or credits. Use your internet activities to secure an additional income. You can earn money by recruiting other Clisha members when they complete their daily tasks',
  tags: ['Interaction Design', 'Front End Development', 'React', 'Node.js', 'Express', 'Postgresql'],
  link: '/portfolio/clisha',
  slug: "https://clisha.me/",
  coverImage: clishaCover,
  staticImages: {
    hero: clishaHero,
    previews: [
      PreviewI,
      PreviewJ,
    ],
  },
  background:
    "Clisha.me is an innovative platform that allows users to earn money by engaging with digital content through clicks, likes, and shares. As the sole developer, I envisioned and built the system to create an accessible and rewarding online ecosystem. Users can complete daily tasks, refer others to maximize earnings, and choose from multiple payout options, including tokens, cash, or credits. To ensure scalability and performance, I implemented a microservices architecture with Node.js and Express.js, coupled with PostgreSQL for efficient data management. The frontend, developed with React.js and Tailwind CSS, provides a smooth and responsive user experience. Redis caching optimizes speed, while Firebase handles secure authentication and media storage. CI/CD pipelines automate deployments, ensuring continuous updates and improvements. Since its launch, Clisha.me has recorded a 20% monthly user growth, with over 50,000 active users engaging in daily tasks. The referral system has driven a 35% increase in new sign-ups, and the seamless payout mechanism has enhanced user retention by 40%. Future plans include AI-driven content personalization, enhanced mobile accessibility, and expanded monetization opportunities to further boost engagement and revenue.",
};

export const company: ProjectType = {
  title: 'Clisha Company',
  description:
    'Clisha Company, your partner for effective online presence and sustainable visibility. In todays digital landscape, where attention is the currency, we help businesses achieve enhanced online reputation and connect with their audience through authentic user interactions.',
  tags: ['Interaction Design', 'Front End Development', 'React', 'Node.js', 'Express', 'Postgresql, "redis', 'socket'],
  link: '/portfolio/clishacompany',
  slug: "https://company.clisha.me/index",
  coverImage: companyCover,
  staticImages: {
    hero: companyHero,
    previews: [
      PreviewK,
      PreviewL,
    ],
  },
  background:
    "Clisha Company is a cutting-edge digital engagement platform that helps businesses maximize their online presence through authentic user interactions. In today’s competitive digital space, visibility and credibility are key, and we specialize in enhancing brand recognition through scalable and data-driven solutions. Built with a robust tech stack—including React, Node.js, Express, PostgreSQL, Redis, and WebSockets—our platform ensures real-time interactions, seamless scalability, and high-performance execution. Our innovative strategies have led to a 60% increase in user engagement, a 45% boost in conversion rates, and a 35% rise in customer retention. By leveraging AI-driven analytics and automated workflows, we provide businesses with a strategic advantage in audience engagement and digital growth.",
};

export const delivery: ProjectType = {
  title: 'Delivery Ease',
  description:
    'Delivery ease excels in fast and reliable deliveries, offering top-notch services to their clients. Their real-time tracking system ensures transparency and peace of mind throughout the shipping process. Trusted by businesses and individuals alike, We are the go-to choice for efficient logistics solutions.',
  tags: ['Interaction Design', 'Front End Development', 'Next', 'php', 'Postgresql, "redis', 'redux'],
  link: '/portfolio/deliveryease',
  slug: "https://thedeliveryeaselogistics.com/",
  coverImage: deliveryCover,
  staticImages: {
    hero: deliveryHero,
    previews: [
      PreviewM,
      PreviewN,
    ],
  },
  background:
    "Delivery Ease is a premier logistics platform designed for speed, reliability, and seamless customer experience. Built with Next.js, PHP, PostgreSQL, Redis, and Redux, the system ensures real-time tracking, optimized route management, and scalable order processing. As the sole developer, I engineered an intuitive user interface, integrated a robust API for live shipment updates, and implemented caching with Redis for faster data retrieval. Advanced automation streamlines deliveries, reducing delays by 40% and improving client satisfaction rates by 55%. With an expanding customer base and a 30% increase in monthly deliveries, Delivery Ease is redefining logistics with technology-driven efficiency.",
};

const projects = [company, Clisha, delivery, tinapay, gmh, droomwork, vineway];

export default projects;
