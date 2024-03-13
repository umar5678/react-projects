const navigationMenu = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
    subMenu: [
      {
        id: 31,
        title: "Service 1",
        link: "/services/service-1",
        subMenu: [
          {
            id: 311,
            title: "Sub Service 1",
            link: "/services/service-1/sub-service-1",
          },
          {
            id: 312,
            title: "Sub Service 2",
            link: "/services/service-1/sub-service-2",
          },
        ],
      },
      {
        id: 32,
        title: "Service 2",
        link: "/services/service-2",
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    subMenu: [
      {
        id: 41,
        title: "Project 1",
        link: "/portfolio/project-1",
        subMenu: [
          {
            id: 411,
            title: "Sub Project 1",
            link: "/portfolio/project-1/sub-project-1",
          },
        ],
      },
      {
        id: 42,
        title: "Project 2",
        link: "/portfolio/project-2",
      },
    ],
  },

  {
    id: 6,
    title: "Profile",
    link: "/profile",
    subMenu: [
      {
        id: 61,
        title: "My Account",
        link: "/profile/my-account",
        subMenu: [
          {
            id: 611,
            title: "Account Settings",
            link: "/profile/my-account/settings",
          },
          {
            id: 62,
            title: "Notifications",
            link: "/profile/notifications",
          },
        ],
      },
      {
        id: 62,
        title: "Logout",
        link: "/profile/logout",
      },
    ],
  },
];

export default navigationMenu;
