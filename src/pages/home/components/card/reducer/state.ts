const initialState = {
  ka: [
    {
      id: "1",
      name: "იტალია",
      capital: "რომი",
      population: "58,000,000",
      flag: "italy_flag.png",
      cover: "italy_cover.jpg",
      intro: `იტალიის დედაქალაქი რომი საუკუნეთა განმავლობაში დასავლური ცივილიზაციის პოლიტიკურ და რელიგიურ ცენტრს წარმოადგენდა, როგორც რომის იმპერიის დედაქალაქი და წმინდა ეპარქიის ადგილსამყოფელი. რომის იმპერიის დაცემის შემდეგ იტალიამ გაუძლო უცხოელ ხალხთა მრავალ ინვანსიას, ძირითადად ისეთი ხალხებისგან როგორებიც იყვნენ გერმანიკული ტომები — ლანგობარდები და ოსტგუთები, შემდეგ ბიზანტიელები, უფრო მოგვიანებით კი ნორმანები და ა. შ. საუკუნეების შემდეგ, იტალია საზღვაო რესპუბლიკებისა და რენესანსის სამშობლო გახდა.[7]`,
      vote: 0,
      disabled: 0,
    },
    {
      id: "2",
      name: "საბერძნეთი",
      capital: "ათენი",
      population: "10,000,000",
      flag: "greece_flag.png",
      cover: "greece_cover.jpg",
      intro:
        "საბერძნეთი (ბერძ. Ελλάδα - ელადა), ოფიციალურად საბერძნეთის რესპუბლიკა (ბერძ. Ελληνική Δημοκρατία) — სახელმწიფო სამხრეთ-აღმოსავლეთ ევროპაში. 2018 წლის მონაცემებით, მოსახლეობა დაახლოებით 10.7 მილიონია. ათენი, ქვეყნის დედაქალაქი, არის უდიდესი ქალაქი, ხოლო მეორე უდიდესი ქალაქი თესალონიკია.",
      vote: 0,
      disabled: 0,
    },
    {
      id: "3",
      name: "საფრანგეთი",
      capital: "პარიზი",
      population: "67,000,000",
      flag: "france_flag.png",
      cover: "france_cover.jpg",
      intro:
        "საფრანგეთი (ფრანგ. France), ოფიციალურად საფრანგეთის რესპუბლიკა (ფრანგ. République française) — ქვეყანა დასავლეთ ევროპაში, მოიცავს ევროპის ამ ნაწილის, რამდენიმე კუნძულისა და ზღვისიქითა ტერიტორიების ნაწილს. მას ესაზღვრება (ჩრდილოეთიდან საათის ისრის მიმართულებით) ევროპის შემდეგი ქვეყნები: ბელგია, ლუქსემბურგი, გერმანია, შვეიცარია, იტალია, მონაკო, ესპანეთი და ანდორა. ზღვისგადაღმა ტერიტორიებს ესაზღვრება ბრაზილია და სურინამი (საფრანგეთის გვიანას), ნიდერლანდების ანტილის კუნძულები (სენ-მარტენს). საფრანგეთი გაერთიანებული სამეფოს ევროგვირაბით უკავშირდება, რომელიც გადის ლა-მანშის სრუტის ქვეშ.",
      vote: 0,
      disabled: 0,
    },
    {
      id: "4",
      name: "შვეიცარია",
      capital: "ბერნი",
      population: "8,000,000",
      flag: "switzerland_flag.jpg",
      cover: "switzerland_cover.jpg",
      intro:
        "შვეიცარია (გერმ. die Schweiz, ფრანგ. la Suisse, იტალ. Svizzera, რეტორმ. la Svizra, ოფიციალურად შვეიცარიის კონფედერაცია (ლათ. Confoederatio Helvetica, გერმ. Schweizerische Eidgenossenschaft, ფრანგ. Confédération suisse, იტალ. Confederazione Svizzera, რეტორმ. Confederaziun svizra) — ზღვაზე გასასვლელის არმქონე სახელმწიფო. მდებარეობს დასავლეთ, ცენტრალურ და სამხრეთ ევროპაში.[4] არის ფედერალური რესპუბლიკა 26 კანტონით, რომლის ფედერალური ხელისუფლება დედაქალაქ ბერნშია განთავსებული.[5][6] სამხრეთით ესაზღვრება იტალია, დასავლეთით - საფრანგეთი, ჩრდილოეთით - გერმანია, ხოლო აღმოსავლეთით ავსტრია და ლიხტენშტეინი. გეოგრაფიულად იყოფა შვეიცარიის ზეგანის, ალპებისა და იურის მთების ტერიტორიებად, რომელთა საერთო ფართობი 41,285 კმ2-ია; აქედან ხმელეთი 39,997 კმ2 მოიცავს. მიუხედავად იმისა, რომ შვეიცარიის უდიდესი ტერიტორია ალპებს უკავია, მოსახლეობა დაახლოებით 8.5 მილიონია, რომლის დიდი ნაწილი პლატოზეა კონცენტრირებული.",
      vote: 0,
      disabled: 0,
    },
  ],
  en: [
    {
      id: "1",
      name: "Italy",
      capital: "Rome",
      population: "58,000,000",
      flag: "italy_flag.png",
      cover: "italy_cover.jpg",
      intro: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      vote: 0,
      disabled: 0,
    },
    {
      id: "2",
      name: "Greece",
      capital: "Athens",
      population: "10,000,000",
      flag: "greece_flag.png",
      cover: "greece_cover.jpg",
      intro: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      vote: 0,
      disabled: 0,
    },
    {
      id: "3",
      name: "France",
      capital: "Paris",
      population: "67,000,000",
      flag: "france_flag.png",
      cover: "france_cover.jpg",
      intro: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      vote: 0,
      disabled: 0,
    },
    {
      id: "4",
      name: "Switzerland",
      capital: "Bern",
      population: "8,000,000",
      flag: "switzerland_flag.jpg",
      cover: "switzerland_cover.jpg",
      intro: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      vote: 0,
      disabled: 0,
    },
  ],
};

export default initialState;
