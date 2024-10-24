export const mainMenu = {
  ka: {
    countries: "ქვეყნები",
    about: "ჩვენს შესახებ",
    contact: "კონტაქტი",
    destination: "დანიშნულება",
    blog: "ბლოგი",
    book: "დაჯავშნე ახლავე",
  },
  en: {
    countries: "Countries",
    about: "About",
    contact: "Contact",
    destination: "Destination",
    blog: "Blog",
    book: "Book Now",
  },
};

export const logoText = {
  ka: {
    travel: "ტურისტული",
    agency: "კომპანია",
  },
  en: {
    travel: "Travel",
    agency: "Agency",
  },
};

export const heroText = {
  ka: "არსებობს უამრავი მიზეზი, რის გამოც მოგზაურობა სასარგებლო და საინტერესოა. მოგზაუობა არის ერთ-ერთი საუკეთესო რამ რამაც შეიძლება სიამოვნება მოგანიჭოს და ეს არის ის, რაც მთელი ცხოვრების განმავლობაში გემახსოვრება. მართალია ხშირ შემთხვევაში, სულაც არაა ადვილი, ჩაალაგო ნივთები და წახვიდე, მაგრამ ზოგჯერ ეს აუცილებელიცაა. ჩვენ გეტყვით, თუ რატომაა მოგზაურობა საინტერესო და საჭირო, თითოეული ადამიანის ცხოვრებაში",
  en: "Traveling… It is more than therapy. It is the perfect medicine! Discovering the world is a way to open your mind, widen your experiences, and meet new people, culture and is essential for your well being. Are you thinking about Italy for your next destination? And the Italian Dolce Vita is the perfect way to feel better.",
};

export const about = {
  ka: "ჩვენს შესახებ",
  en: "This is about page",
};

export const contact = {
  ka: {
    headline: "კონტაქტის გვერდი",
    fname: "სახელი",
    lname: "გვარი",
    email: "ელ. ფოსტა",
    message: "შეტყობინება",
    send: "გაგზავნა",
    errors: {
      fname_e: "გთხოვთ შეიყვანოთ სახელი",
      lname_e: "გთხოვთ შეიყვანოთ გვარი",
      email_e: "ელ. ფოსტა არასწორია",
      message_e: "გთხოვთ შეავსოთ შეტყობინების ველი",
    },
  },

  en: {
    headline: "This is Contact Page",
    fname: "First Name",
    lname: "Last Name",
    email: "Email",
    message: "Message",
    send: "Send",
    errors: {
      fname_e: "First name error",
      lname_e: "Last name error",
      email_e: "email error",
      message_e: "message error",
    },
  },
};

export const notFound = {
  ka: "გვერდი არ მოიძებნა",
  en: "Page not found",
};

export const addCountry = {
  ka: {
    addCountry: "ქვეყნის დამატება",
    name: "ქვეყნის დასახელება ქართულად",
    nameEn: "ქვეყნის დასახელება ინგლისურად",
    capital: "დედაქალაქი ქართულად",
    capitalEn: "დედაქალაქი ინგლისურად",
    population: "მოსახლეობა",
    add: "დამატება",
    errors: {
      name: "ქვეყნის დასახელება უნდა აღემატებოდეს 5 სიმბოლოს",
      capital: "ქვეყნის დედაქალაქი უნდა აღემატებოდეს 4 სიმბოლოს",
      population:
        "ქვეყნის მოსახლეობის ველის მნიშვნელობა უნდა აღემატებოდეს 5 სიმბოლოს",
    },
  },
  en: {
    addCountry: "Add country",
    name: "Country name in Georgian",
    nameEn: "Country name in English",
    capital: "The capital in Georgian",
    capitalEn: "The capital in English",
    population: "Population",
    add: "Add",
    errors: {
      name: "Country name must be longer than 5 characters",
      capital: "Country capital must be longer than 4 characters",
      population: "Country population must be longer than 7 characters",
    },
  },
};

export const common = {
  ka: {
    sort_asc: "სორტირება ზრდადობით",
    sort_desc: "სორტირება კლებადობით",
    add_country: "ქვეყნის დამატება",
    read_more: "სრულად",
    delete: "წაშლა",
    country_name: "ქვეყნის დასახელება",
    capital: "დედაქალაქი",
    population: "მოსახლეობა",
    vote_up: "ხმის მიცემა",
    restore: "აღდგენა",
    rights: "ყველა უფლება დაცულია",
    book: "დაჯავშნა",
    loading: "ჩატვირთვა",
    add: "დამატება",
  },
  en: {
    sort_asc: "Sort by asc",
    sort_desc: "Sort by desc",
    add_country: "Add country",
    read_more: "Read more",
    delete: "Delete",
    country_name: "Country name",
    capital: "The capital",
    population: "population",
    vote_up: "vout up",
    restore: "Restore",
    rights: "All rights reserved",
    book: "Book now",
    loading: "Loading",
    add: "Add",
  },
};
export const locales = Object.keys(mainMenu);
export const defaultLocale = "ka";
