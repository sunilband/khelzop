interface DocsConfig {
  mainNav: NavItem[];
}

interface NavItem {
  label: string;
  title: string;
  href: string;
}

export enum routes {
  HOME = "/",
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { label: "Home", title: "Home", href: routes.HOME },
    { label: "Donor", title: "Donor Login", href: "/donor/login" },
    { label: "Donor", title: "Donor Signup", href: "/donor/signup" },
    { label: "Blood Bank", title: "Blood Bank", href: "/bloodbank" },
    {
      label: "Blood Bank",
      title: "Blood Bank Signup",
      href: "/bloodbank/signup",
    },
    {
      label: "Blood Bank",
      title: "Blood Bank Login",
      href: "/bloodbank/login",
    },
    { label: "Donation Camp", title: "Camp", href: "/camp" },
    { label: "Donation Camp", title: "Camp Login", href: "/camp/login" },
    { label: "Donation Camp", title: "Camp Signup", href: "/camp/signup" },
  ],
};
