export const author = {
  name: "Nejla Nassiri",
  email: "nejla_nasiri@yahoo.com",
  title: "Author · Storyteller · Financial Director",
  born: "1975, Tehran",
  tagline: "Stories about hope, the value of peace, and celebrating life.",
  bio: `Nejla Nassiri, born 1975 in Tehran and raised in the Middle East, studied applied mathematics, worked as a journalist in the Middle East, continued her career in the financial market, became a successful director of a financial company, and then realised that she has many stories to share with others.`,
  bioExtended: `Nejla experienced different environments and lived in Iran during the Iran-Iraq War. She knows the wounds of explosion and the smell of fresh blood, and she suffered as all families one of the people during the war. She knows the value of life. Nejla lived and experienced many lifestyles and cultures, and now writes to tell the world stories based on her experiences.`,
  mission: `The characters in her stories are not victims — they are fighters with great hope, fighting to win but fighting to live. Nejla's stories are about hope, the value of peace, and celebrating life not as it is, but as it should be.`,
  journey: [
    { year: "1998–2000", role: "Journalist", place: "Middle East Oil & Gas" },
    { year: "2000–2001", role: "Web Developer" },
    { year: "2001–2002", role: "Financial Services Representative" },
    { year: "2002–2021", role: "Financial Adviser & Asset Manager" },
  ],
  skills: [
    "Accounting",
    "Audit",
    "Financial Statements",
    "Accounts Receivable",
    "Accounts Payable",
    "Payrolls",
  ],
};

export const featuredBook = {
  id: "tara",
  title: "Tara",
  subtitle: "A Story of Hope, Secrets, and Survival",
  description: `Tara lives in Iran with her aunt and uncle. She desperately wants to join her father in the UK. Unfortunately, he died in a car accident before being able to come for her. One day she received a call from her late father's partner, Mr. Jonathan Stone. He asked her for a secret meeting!`,
  descriptionFull: `In that meeting, she visits a young handsome man, Mr. Stone. She finds out that her uncle wants to sell her share of inheritance from her father without telling her. She also finds out that her late father had a great deal of debt. So her life turned out to be a terrible mess! On one side, a charlatan uncle that she would rather not live with under the same roof, and on the other side, her father's great amount of debt. When Jonathan Stone came up with his offer, it was an offer that could change her whole life.`,
  themes: ["Hope", "Secrets", "Inheritance", "Survival", "Family"],
  coverFront: "/images/tara-front.png",
  coverBack: "/images/tara-back.png",
  hasBackCover: true,
  purchaseLinks: [
    {
      id: "amazon",
      name: "Amazon",
      url: "https://www.amazon.com/dp/1514434458?lv=shuf&channelId=500&plpRedirect=mhFallback",
      icon: "shoppingBag",
      style: "solid",
    },
    {
      id: "barnesNoble",
      name: "Barnes & Noble",
      url: "https://www.barnesandnoble.com/w/tara-nejla-nassiri/1123230866",
      icon: "shoppingBag",
      style: "solid",
    },
  ],
};

export const quotes = [
  {
    text: "The characters in my stories are not victims — they are fighters with great hope.",
    author: "Nejla Nassiri",
  },
  {
    text: "My stories are about hope, the value of peace, and celebrating life.",
    author: "Nejla Nassiri",
  },
  {
    text: "I know the value of life. I write to tell the world stories based on my experiences.",
    author: "Nejla Nassiri",
  },
];

export const navLinks = [
  { label: "Home", sectionId: "home" },
  { label: "Book", sectionId: "book" },
  { label: "Story", sectionId: "story" },
  { label: "Author", sectionId: "author" },
  { label: "Contact", sectionId: "contact" },
];
