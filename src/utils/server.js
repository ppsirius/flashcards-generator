const clipboardy = require("clipboardy");

const words = [
  "Forma podstawowa",
  "II forma",
  "III forma",
  "Tłumaczenie",
  "arise",
  "arose",
  "arisen",
  "powstawać, pojawiać się",
  "awake",
  "awoke",
  "awoken",
  "budzić się",
  "be",
  "was",
  "been",
  "być",
  "bear",
  "bore",
  "borne",
  "nosić, rodzić",
  "beat",
  "beat",
  "beaten",
  "bić",
  "become",
  "became",
  "become",
  "zostawać",
  "befall",
  "befell",
  "befallen",
  "przytrafić się, spotykać",
  "begin",
  "began",
  "begun",
  "zaczynać, zacząć",
  "behold",
  "beheld",
  "beheld",
  "ujrzeć",
  "bend",
  "bent",
  "bent",
  "pochylić się",
  "beset",
  "beset",
  "beset",
  "dreczyć, prześladować",
  "bet",
  "bet",
  "bet",
  "zakładać się",
  "bind",
  "bound",
  "bound",
  "przywiązywać",
  "bite",
  "bit",
  "bitten",
  "gryźć, kąsać",
  "bleed",
  "bled",
  "bled",
  "krwawić",
  "blow",
  "blew",
  "blown",
  "dmuchać",
  "break",
  "broke",
  "broken",
  "tłuc, połamać",
  "breed",
  "bred",
  "bred",
  "hodować",
  "bring",
  "brought",
  "brought",
  "przynosić",
  "build",
  "built",
  "built",
  "budować",
  "burn",
  "burnt",
  "burnt",
  "palić, spalać się",
  "burst",
  "burst",
  "burst",
  "rozrywać",
  "buy",
  "bought",
  "bought",
  "kupować",
  "can",
  "could",
  "been able",
  "móc",
  "cast",
  "cast",
  "cast",
  "rzucać",
  "catch",
  "caught",
  "caught",
  "łapać",
  "choose",
  "chose",
  "chosen",
  "wybierać",
  "come",
  "came",
  "come",
  "przychodzić",
  "cost",
  "cost",
  "cost",
  "kosztować",
  "creep",
  "crept",
  "crept",
  "skradać się",
  "cut",
  "cut",
  "cut",
  "kroić",
  "dig",
  "dug",
  "dug",
  "kopać",
  "do",
  "did",
  "done",
  "robić",
  "draw",
  "drew",
  "drawn",
  "rysować",
  "dream",
  "dreamt",
  "dreamt",
  "snić",
  "drink",
  "drank",
  "drunk",
  "pić",
  "drive",
  "drove",
  "driven",
  "jechać",
  "dwell",
  "dwelt",
  "dwelt",
  "mieszkać",
  "eat",
  "ate",
  "eaten",
  "jeść",
  "fall",
  "fell",
  "fallen",
  "upaść",
  "feed",
  "fed",
  "fed",
  "karmić",
  "feel",
  "felt",
  "felt",
  "czuć",
  "flee",
  "fled",
  "fled",
  "uciekać",
  "fling",
  "flung",
  "flung",
  "rzucać",
  "fly(flies)",
  "flew",
  "flown",
  "lecieć",
  "forbid",
  "forbade",
  "forbidden",
  "zakazywać",
  "forecast",
  "forecast",
  "forecast",
  "przewidywać",
  "forget",
  "forgot",
  "forgotten",
  "zapominać",
  "forgive",
  "forgave",
  "forgiven",
  "wybaczać",
  "forsake",
  "forsook",
  "forsaken",
  "porzucać",
  "freeze",
  "froze",
  "frozen",
  "mrozić",
  "get",
  "got",
  "got",
  "dostać",
  "give",
  "gave",
  "given",
  "dawać",
  "go",
  "went",
  "gone",
  "iść",
  "grind",
  "ground",
  "ground",
  "kruszyć",
  "hang",
  "hung",
  "hung",
  "wisieć",
  "hang",
  "hanged",
  "hanged",
  "zawieszać",
  "have",
  "had",
  "had",
  "mieć",
  "hear",
  "heard",
  "heard",
  "słyszeć",
  "hide",
  "hid",
  "hidden",
  "skrywać",
  "hit",
  "hit",
  "hit",
  "uderzać",
  "hold",
  "held",
  "held",
  "trzymać",
  "hurt",
  "hurt",
  "hurt",
  "skrzywdzić, zranić, sprawiać",
  "keep",
  "kept",
  "kept",
  "trzymać, zachowywać",
  "kneel",
  "knelt",
  "knelt",
  "klękać",
  "know",
  "knew",
  "known",
  "wiedzieć, znać",
  "lay",
  "laid",
  "laid",
  "kłaść, położyć",
  "lead",
  "led",
  "led",
  "prowadzić",
  "lean",
  "leant",
  "leant",
  "skłonić się, opierać, przechylić",
  "leave",
  "left",
  "left",
  "wychodzić",
  "lend",
  "lent",
  "lent",
  "pożyczać (komuś)",
  "let",
  "let",
  "let",
  "pozwalać",
  "lie",
  "lay",
  "lain",
  "leżeć",
  "lie",
  "lied",
  "lied",
  "kłamać",
  "light",
  "lit lighted",
  "lit lighted",
  "zapalać",
  "lose",
  "lost",
  "lost",
  "gubić",
  "make",
  "made",
  "made",
  "robić",
  "may",
  "might",
  "-",
  "móc",
  "mean",
  "meant",
  "meant",
  "oznaczać, mieć na myśli",
  "meet",
  "met",
  "met",
  "spotkać się",
  "mistake",
  "mistook",
  "mistaken",
  "pomylić",
  "mow",
  "mowed",
  "mown",
  "kosić",
  "must",
  "had to",
  "had to",
  "musieć",
  "pay",
  "paid",
  "paid",
  "płacić",
  "put",
  "put",
  "put",
  "klaść, wsadzić",
  "quit",
  "quit",
  "quit",
  "zrezygnować",
  "read",
  "read",
  "read",
  "czytać",
  "rid",
  "rid",
  "rid",
  "uwalniać, oczyścić",
  "ride",
  "rode",
  "ridden",
  "jeździć konno",
  "ring",
  "rang",
  "rung",
  "dzwonić",
  "rise",
  "rose",
  "risen",
  "rosnąć",
  "run",
  "ran",
  "run",
  "biec",
  "saw",
  "sawed",
  "sawn",
  "piłować, rżnąć",
  "say",
  "said",
  "said",
  "mówić",
  "see",
  "saw",
  "seen",
  "widzieć",
  "seek",
  "sought",
  "sought",
  "szukać, aportować",
  "sell",
  "sold",
  "sold",
  "sprzedawać",
  "send",
  "sent",
  "sent",
  "wysyłać",
  "set",
  "set",
  "set",
  "przygotowywać, ustawić",
  "sew",
  "sewed",
  "sewn",
  "szyć",
  "shake",
  "shook",
  "shaken",
  "trząść, wstrząsnąć",
  "shear",
  "sheared",
  "shorn",
  "strzyc",
  "shed",
  "shed",
  "shed",
  "rozsiewać, laćrozlać",
  "shine",
  "shone",
  "shone",
  "świecić, zabłysnąć",
  "shoot",
  "shot",
  "shot",
  "wystrzelić, strzelać",
  "show",
  "showed",
  "shown",
  "pokazywać",
  "shrink",
  "shrank",
  "shrunk",
  "kurczyć się",
  "shut",
  "shut",
  "shut",
  "zamykać",
  "sing",
  "sang",
  "sung",
  "śpiewać",
  "sit",
  "sat",
  "sat",
  "siadać",
  "sleep",
  "slept",
  "slept",
  "spać",
  "slide",
  "slid",
  "slid",
  "pośliznąć się",
  "sling",
  "slung",
  "slung",
  "zawieszać, podwieszać",
  "slit",
  "slit",
  "slit",
  "rozciąć, poderżnąć",
  "smell",
  "smelt",
  "smelt",
  "pachnieć",
  "sow",
  "sowed",
  "sown sowed",
  "siać, zasiać",
  "speak",
  "spoke",
  "spoken",
  "mówić",
  "speed",
  "sped",
  "sped",
  "pędzić, jeździć (z dużą prędkością)",
  "spell",
  "spelt",
  "spelt",
  "przeliterować",
  "spend",
  "spent",
  "spent",
  "wydawać (pieniądze), spędzać czas",
  "spill",
  "spilt",
  "spilt",
  "rozlewać",
  "spin",
  "spun",
  "spun",
  "snuć, wirować, obracać",
  "spit",
  "spat",
  "spat",
  "pluć, napluć",
  "spoil",
  "spoilt",
  "spoilt",
  "uszkadzać, psuć, zepsuć",
  "spread",
  "spread",
  "spread",
  "rozkladać, rozsmarować, rozszerzyć",
  "spring",
  "sprang",
  "sprung",
  "sprężynować",
  "stand",
  "stood",
  "stood",
  "stać",
  "steal",
  "stole",
  "stolen",
  "kraść",
  "stick",
  "stuck",
  "stuck",
  "przyklejać(się)",
  "sting",
  "stung",
  "stung",
  "kłuć",
  "stink",
  "stank",
  "stunk",
  "śmierdzieć",
  "stride",
  "strode",
  "stridden",
  "kroczyć",
  "strike",
  "struck",
  "struck",
  "strajkować, walić, uderzać",
  "strive",
  "strove",
  "striven",
  "dążyć do czegoś, usiłować, krzątać",
  "swear",
  "swore",
  "sworn",
  "kląć",
  "sweep",
  "swept",
  "swept",
  "zamiatać",
  "swell",
  "swelled",
  "swollen",
  "spuchnąć, obrzęknąć",
  "swim",
  "swam",
  "swum",
  "pływać",
  "swing",
  "swung",
  "swung",
  "huśtać się, machać czymś",
  "take",
  "took",
  "taken",
  "brać",
  "teach",
  "taught",
  "taught",
  "uczyć (kogoś)",
  "tear",
  "tore",
  "torn",
  "drzeć",
  "tell",
  "told",
  "told",
  "mówić, powiedzieć",
  "think",
  "thought",
  "thought",
  "myśleć",
  "throw",
  "threw",
  "thrown",
  "rzucać",
  "thrust",
  "thrust",
  "thrust",
  "pchać, atakować, napierać",
  "tread",
  "trod",
  "trodden",
  "stąpać, chodzić po czymś",
  "wake",
  "woke",
  "woken",
  "budzić się",
  "wear",
  "wore",
  "worn",
  "mieć na sobie, ubierać",
  "weave",
  "wove",
  "woven",
  "przemykać",
  "weave",
  "wove",
  "woven",
  "tkać, wplatać",
  "weep",
  "wept",
  "wept",
  "płakać",
  "win",
  "won",
  "won",
  "wygrać",
  "wind",
  "wound",
  "wound",
  "owijać, nawijać",
  "wring",
  "wrung",
  "wrung",
  "wyciskać, ściskać czyjeś ręce",
  "write",
  "wrote",
  "written",
  "pisać"
];

let filtered = [
  {
    en: [],
    pl: ""
  }
];
let newWord = false;
words.forEach((word, index) => {
  if (newWord) {
    filtered.push({
      en: [],
      pl: ""
    });
  }
  if ((index + 1) % 4 === 0) {
    newWord = true;

    filtered[filtered.length - 1].pl = word;
  } else {
    newWord = false;
    filtered[filtered.length - 1].en.push(word);
  }
});

clipboardy.writeSync(JSON.stringify(filtered));

console.log(filtered);
