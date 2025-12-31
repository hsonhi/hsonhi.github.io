import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Heraldo Sonhi",
  initials: "HS",
  url: "https://github.com/hsonhi",
  location: "Luanda, AO",
  locationLink: "",
  description:
    "A software engineer who loves complex challenges and helping people. Feel free to get in Touch.",
  summary:
    "I started developing applications at [2014](/#education), since then i have always kept up with the latest trends in technology mainly software development stacks, cloud computing and AI services. [I pursued a degree in business information systems](/#education) where i also took part in a programming competition.",
  avatarUrl: "/.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    ".NET Core",
    "FastAPI",
    "Java",
    "C#",
    "Python",
    "Cloud",
    "Microservices",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "heraldosonhi@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hsonhi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/heraldosonhi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TIS",
      href: "https://tis.ao/",
      badges: [],
      location: "Luanda, AO",
      title: "Software Engineer",
      logoUrl: "/tis.png",
      start: "November 2024",
      end: "June 2025",
      description:
        "",
    },
    {
      company: "Universidade Jean Piaget de Angola",
      href: "https://unipiaget-angola.org",
      badges: [],
      location: "Luanda, AO",
      title: "Tech Lead & Software Engineer",
      logoUrl: "/piaget.png",
      start: "June 2018",
      end: "October 2024",
      description:
        "",
    },
    {
      company: "ClickIT, Internet Solutions",
      href: "https://clickit.ao/",
      badges: [],
      location: "Luanda, AO",
      title: "Software Developer & Technical Consultant",
      logoUrl: "/clickit.png",
      start: "February 2018",
      end: "May 2018",
      description:
        "",
    },
    {
      company: "MwangoBrain",
      href: "https://mwangobrain.co.ao/",
      badges: [],
      location: "Luanda, AO",
      title: "Web Developer",
      logoUrl: "/mwangobrain.jpg",
      start: "September 2016",
      end: "January 2018",
      description:
        "",
    },
  ],
  education: [
    {
      school: "University of Hertfordshire",
      href: "https://www.herts.ac.uk/",
      degree: "Master of Science in Software Engineering",
      logoUrl: "/uh.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "The International University of Management",
      href: "https://ium.edu.na/",
      degree: "Bachelor's Degree in Business Information Systems Honours",
      logoUrl: "/ium.png",
      start: "2011",
      end: "2015",
    },
  ],
  projects: [
      {
      title: "Portal do Contribuinte",
      href: "",
      dates: "June 2025",
      active: true,
      description:
        "Developed custom pages and UI on the Taxpayers portal using JPA, JSF and Primefaces, developed modules and integration with SIGT and Oracle's PSRM using Java and Spring.",
      technologies: [
        "Java",
        "JPA",
        "JSF",
        "Primefaces",
        "Springboot",
        "Oracle DB",
        "Microservices",
        "SOAP",
        "Hibernate",
      ],
      links: [
        {
          type: "Application",
          href: "https://portaldocontribuinte.minfin.gov.ao/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/portalcontribuinte.mp4",
    },
   
  {
      title: "Arduino RFID Module for MFRC522",
      href: "",
      dates: "August 2025",
      active: true,
      description:
        "Arduino sketch with RFID Library for MFRC522. The goal of this project was to create a data reader for vehicle immobilizer systems using RFID encryption.",
      technologies: [
        "C++",
        "Arduino IDE",
        "Arduino Nano",
        "RFID Module MFRC522",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hsonhi/rfidMFRC522",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/arduino.jpeg",
      video: "",
    },
     {
      title: "Giant SA",
      href: "",
      dates: "September 2025",
      active: true,
      description:
       "A software prototype for an [Insurance company](https://giantseguros.co.ao/) with a working model used to visualize, test, and refine the user interface (UI) and key functionalities. It includes features like policy management, claims processing and client handling.",
      technologies: [
        "React.js",
        "Next.js",
        "Typescript",
        "Node.js",
        "TailwindCSS",
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hsonhi/giantsa",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/giantsa.png",
      video: "",
    },
    {
      title: "RecibosMCX",
      href: "",
      dates: "October 2025",
      active: true,
      description:
        "RecibosMCX is a receipt validator for a popular financial app called [MULTICAIXA Express](https://multicaixa.ao/pt/oferta/canais/utilizadores/multicaixa-express/), I decided to build this tool to be a point of reference for the authenticity of receipts in order to avoid losses resulting from false and dishonest transfers.",
      technologies: [
        "React.js",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        ".NET Core",
        "EF Core",
        "SQLite",
        "OpenAPI",
      ],
      links: [
        {
          type: "Application",
          href: "https://recibosmcx.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }, 
        {
          type: "Source",
          href: "https://github.com/hsonhi/recibosmcx",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recibosmcx.png",
      video:
        "",
    },
     {
      title: "Gestreino",
      href: "",
      dates: "June 2025",
      active: true,
      description:
        "Gestreino emerges as an indispensable application that presents a set of tests that allow for standardized assessment to the effective prescription of a fitness training program.",
      technologies: [
        "ASP.NET",
        "MVC",
        "Plesk",
        "SQL Server",
        "Bootstrap",
        "Javascript",
      ],
      links: [
        {
          type: "Application",
          href: "https://gestreino.pt/",
          icon: <Icons.globe className="size-3" />,
        }, 
        {
          type: "Source",
          href: "https://github.com/hsonhi/gestreino-v2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gestreino.png",
      video:
        "",
    },
    
    {
      title: "Factplus SaaS",
      href: "",
      dates: "March 2021",
      active: true,
      description:
        "FactPlus is an invoice SaaS that was built to accommodate the need of many companies and self-employed individuals that still use manual and poorly automated methods.",
      technologies: [
        "Javascript",
        "PHP",
        "CpanelUAPI",
        "Bootstrap",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://factplus.co.ao/",
            icon: <Icons.globe className="h-4 w-4" />,
        },
         {
          type: "Application",
          href: "https://app.factplus.co.ao/",
            icon: <Icons.globe className="h-4 w-4" />,
        },
         {
          type: "API",
          href: "https://api.factplus.co.ao/documentation/",
           icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "/factplus.mp4",
    },
  ],
  hackathons: [
    {
      title: "Portal do Contribuinte",
      dates: "November 2024 - June 2025",
      location: "Luanda, AO",
      description:
       "Developed custom pages and UI on the Taxpayers portal using JPA, JSF and Primefaces, developed modules and integration with SIGT and Oracle's PSRM using Java and Spring.", image:
         "/tis.png",
       links: [
        {
          title: "Application",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://portaldocontribuinte.minfin.gov.ao/",
        },],
    },
    {
      title: "Portal FrontOffice",
      dates: "November 2024 - June 2025",
      location: "Luanda, AO",
      description:
        "Developed custom modules and integration with SIGT and Oracle's PSRM.",
      image:
         "/tis.png",
      links: [
        {
          title: "Application",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://frontoffice.minfin.gov.ao/frontoffice/login",
        },],
    },
    {
      title: "Microsserviços, Reporting",
      dates: "November 2024 - June 2025",
      location: "Luanda, AO",
      description:
        "Developed custom api services with Java, Spring, OpenAPI and SOAP including report design and development with Jasper studio and Jasper libs for Java.",
      icon: "public",
      image:
         "/tis.png",
      links: [],
    },
    {
      title: "Portal SAFT",
      dates: "November 2024 - June 2025",
      location: "Luanda, AO",
      description:
        "Worked on Taxpayers portal specifically SAFT modules, built with Node.js, Vue.js, Java, Microservices, Oracle webserver and database 12c.",
      image:
        "/tis.png",
      links: [],
    },
    {
      title: "PIAGEST",
       dates: "November 2021 - October 2024",
      location: "Luanda, AO",
      description:
        "Piagest is an ambitious project born from the need for a 100% Angolan platform for integrated academic and university management. It offers agile management of the various academic sectors, departments, centers, and organic units of the Piaget Institute of Angola (Jean Piaget University of Angola, Jean Piaget Higher Polytechnic Institute of Benguela).",
      image:
        "/piaget.png",
      links: [
        {
          title: "Application",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://41.63.177.143:12014/",
        },
      ],
    },
    {
      title: "Portal do Aluno, Sigarra",
       dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed custom student portal to accommodate ongoing and alumni students for legacy systems and records, heavily integrated with core academic systems to provide accurate records, built with ASP.NET, Oracle and MS SQL databases.",
      image:
         "/piaget.png",
      links: [
        {
          title: "Application",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://41.63.177.143:12012/",
        },
      ],
    },
    {
      title: "Gabinete de Coordenação de Trabalhos de Fim de Curso",
     dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed custom software for the Thesis/Dissertation department, handling student's final year project management with main focus on organization, heavy reporting (30+), and data visualization for informed decisions and accurate records.",
      image:
       "/piaget.png",
      links: [],
    },
    {
      title: "SigReports",
     dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed a custom reporting tool to manage data extraction more efficiently, from student records, financial data, cash reports, bursary records to government statistics and custom reports extraction. Integrated with various data sources for easy access and management.",
      image:
       "/piaget.png",
      links: [],
    },
    {
      title: "Centro de Motricidade Humana",
      dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed custom software for the Human Motricity Center, handling clients, payments, schedules, fitness programmes and reporting. The system was built using .NET and WF with an MS SQL database.",
      image:
         "/piaget.png",
      links: [],
    },
    {
      title: "Website Institucional",
      dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed a complete website for the institution's domain, along with a custom built CMS to manage content and pages of the university campus in Luanda.",
      image:
        "/piaget.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.unipiaget-angola.org/",
        },
      ],
    },
    {
      title: "Secretaria Académica e Pedagógica",
      dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed and upgraded the Academic office software, main functions include student records management, grades, bursary programmes, special exams registration and various types of student letters and documentation. The system was built using .NET, C#, WF and SAP Crystal Reports with Oracle and MS SQL databases, upgraded from VB and VBA, and integrated within the UMS system.",
      image:
         "/piaget.png",
      links: [ {
          title: "Application (UMS, Sigarra)",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "http://41.63.177.143/unipiaget/si_main",
        },],
    },
    {
      title: "Sumários",
       dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Timetable management is one of the most critical, and most chaotic jobs in higher education operations. As institutions grow, spreadsheet-based schedules and static PDFs struggle to cope with full-time and part-time programs, electives, labs, research hours and cross-department teaching. I developed Timetable management solutions to plan, validate and publish academic schedules.",
      image:
         "/piaget.png",
      links: [],
    },
     {
      title: "Biblioteca",
       dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed a full scale library management system using the CDU classification, integrated with public pages on the university website for content search and classification.",
      image:
         "/piaget.png",
      links: [],
    },
    {
      title: "Recursos Humanos",
      dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description:
        "Developed custom software to manage HR policies, Employees Time tracking integrated to biometric attendance systems, Leaves, Holidays and Absences as well as advanced reporting for decision making purposes. The system was built using .NET and WF and integrated with existing ERP systems (Logic pulse, CentralGest).",
      image:
        "/piaget.png",
      links: [],
    },
    {
      title: "Contabilidade, Reporting",
      dates: "June 2018 - November 2021",
      location: "Luanda, AO",
      description: "Designed and developed reports for financial departments and higher hierarchy, the information provided actionable insights that informed business decisions and strategies.",
      image:
        "/piaget.png",
      links: [],
    },
    {
      title: "Gestreino",
      dates: "November 2024 - Present",
      location: "Luanda, AO",
      description:
        "Many gyms, health clubs, and sports clubs operate without objective and effective monitoring of their clients'/athletes' condition. Consequently, the common goal—improving performance without the onset of injuries and chronic fatigue—is not always achieved, hindering client loyalty and increasing costs for equipment, instructors/coaches, and more. Gestreino emerges as an indispensable application for the operationalization of the training process, scientifically compiling all the knowledge on training methodology and its organizational aspects, from the presentation of a set of tests that allow for standardized assessment to the effective prescription of a training program.",
      image:
        "/clickit.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gestreino.pt/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/hsonhi/gestreino-v2",
        },
      ],
    },
    {
      title: "Factplus SaaS",
      dates: "September 2017 - March 2021",
      location: "Luanda, AO",
      description: "FactPlus is an invoice SaaS that was built to accommodate the need of many companies and self-employed individuals that still use manual and poorly automated methods. It offers intuitive, simple, and easy-to-use invoicing, providing an alternative to existing softwares on the market  and reducing costs from their high licensing fees.",
      image:
        "/clickit.png",
      links: [ {
          title: "Website",
          href: "https://factplus.co.ao/",
            icon: <Icons.globe className="h-4 w-4" />,
        },
         {
          title: "Application",
          href: "https://app.factplus.co.ao/",
            icon: <Icons.globe className="h-4 w-4" />,
        },
         {
          title: "API",
          href: "https://api.factplus.co.ao/documentation/",
           icon: <Icons.globe className="h-4 w-4" />,
        },{
          title: "YouTube",
          href: "https://www.youtube.com/@factplus8009",
           icon: <Icons.youtube className="h-4 w-4" />,
        },],
    },
    {
      title: "Sistema de Gestão de Recrutamento e Seleção",
      dates: "September 2016 - January 2018",
      location: "Luanda, AO",
      description:
        "Recruitment and Selection Management System, it's a software that automates and centralizes the entire hiring process, from posting job openings, collecting and screening resumes, scheduling interviews, administering tests, to communicating with candidates, using technology to streamline tasks, reduce costs, improve the experience, and ensure that the company attracts and hires the best talent efficiently and strategically.",
      image:
        "/mwangobrain.jpg",
      links: [],
    },
    {
      title: "Associação de Escuteiros de Angola",
      dates: "September 2016 - January 2018",
      location: "Luanda, AO",
      description:
        "The National Scouting organization of Angola, was founded in 1994 and became a member of the World Organization of the Scout Movement on June 13, 1998, and was officially welcomed into WOSM at the World Scout Conference in South Africa in July 1999. This project involved developing a full stack web application to manage the entire organization and it's members, events, and activities.",
      image:
        "/mwangobrain.jpg",
      links: [],
    },
    
  ],
} as const;
