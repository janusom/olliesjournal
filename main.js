$(".toggle").click(
    function(event){
        $(".reveal").toggleClass("active")
    }
)

$(".projects").click(
    function(event){
        $(".work").toggleClass("active")
    }
)

$("#cb").click(
    function(event){
        $(".palette").toggleClass("active")
    }
)

$("#mcb").click(
    function(event){
        $(".mob-palette").toggleClass("active")
    }
)


let entryItemOne = document.querySelector(".entry-one");
let entryItemTwo = document.querySelector(".entry-two");
let entryItemThree = document.querySelector(".entry-three");

const getContent = function () {
  fetch(
    "https://api.are.na/v2/channels/olenka-portfolio-1"
  )
    .then((response) => response.json())
    .then((data) => {
      const contents = data.contents;

      console.log(contents.length);

      const finalContents = [];
      const contentIds = [];

      for (let i = 0; i < contents.length; i++) {
        const rand = Math.floor(Math.random() * contents.length);
        if (!contentIds.includes(contents[rand].id)) {
          finalContents.push(contents[rand]);
          contentIds.push(contents[rand].id);
        }
        if (finalContents.length === 3) break;
      }

      const imgOne = document.createElement("img");
      const captionOne = document.createElement("div");
      imgOne.src = finalContents[0].image.display.url;
      captionOne.innerHTML = finalContents[0].description_html;
      entryItemOne.appendChild(imgOne);
      entryItemOne.appendChild(captionOne);

      console.log(finalContents[0].description_html);

      const imgTwo = document.createElement("img");
      const captionTwo = document.createElement("div");
      imgTwo.src = finalContents[1].image.display.url;
      captionTwo.innerHTML = finalContents[1].description_html;
      entryItemTwo.appendChild(imgTwo);
      entryItemTwo.appendChild(captionTwo);

      const imgThree = document.createElement("img");
      const captionThree = document.createElement("div");
      imgThree.src = finalContents[2].image.display.url;
      captionThree.innerHTML = finalContents[2].description_html;
      entryItemThree.appendChild(imgThree);
      entryItemThree.appendChild(captionThree);
    });
};

getContent();


$("#reload").click(function(event){
    event.preventDefault();
    entryItemOne.innerHTML = "";
    entryItemTwo.innerHTML = "";
    entryItemThree.innerHTML = "";
    getContent();
});

function getAllCSSFontFamilies() {
  const fontFamilies = new Set();

  // Loop stylesheets
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules; // may throw due to CORS
    } catch (err) {
      continue;
    }

    for (const rule of rules) {
      if (rule.style && rule.style.fontFamily) {
        rule.style.fontFamily.split(",").forEach(font => {
          fontFamilies.add(font.trim().replace(/['"]/g, ""));
        });
      }
    }
  }

  // Add your known custom fonts (these never appear in sheet.cssRules)
  const manualFonts = [
    "apple-chancery",
    "azo-sans-reg",
    "azo-sans-mono",
    "apple-garamond",
    "bellavoir-serif",
    "braven",
    "catchye",
    "cronde",
    "diamonds",
    "exo",
    "gobold",
    "griffiths",
    "hugolers",
    "kawoszeh",
    "la-obrige",
    "moana-rainy",
    "molgan",
    "newyork",
    "pharmacy",
    "radicalblock",
    "typoround",
    "vonique",
    "walkway",
    "will-grace",
    "bomboniere",
    "ivyora-text",
    "ivyora-display",
    "monotalic",
    "megazoid",
    "cemer",
    "neighbor-stencil",
    "tt-autonomous",
    "new-astro",
    "lone-pine",
    "kings",
    "club-lithographer",
    "arialnarrow",
    "arial",
    "impact"


  ];

  manualFonts.forEach(f => fontFamilies.add(f));

  return Array.from(fontFamilies);
}

function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}

function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(hex1, hex2) {
  const { r: r1, g: g1, b: b1 } = hexToRgb(hex1);
  const { r: r2, g: g2, b: b2 } = hexToRgb(hex2);

  const L1 = luminance(r1, g1, b1);
  const L2 = luminance(r2, g2, b2);

  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function complementaryColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

function darkenHSL(hsl, amount = 25) {
  return {
    h: hsl.h,
    s: Math.min(100, hsl.s + 10),        // boost saturation a bit
    l: Math.max(0, hsl.l - amount)       // darker by "amount"
  };
}

function tintHSL(hsl, tintAmount = 0.8) {
  return {
    h: hsl.h,
    s: Math.round(hsl.s * (1 - tintAmount)),        // reduce saturation sharply
    l: Math.round(hsl.l + (100 - hsl.l) * tintAmount) // lift lightness toward white
  };
}

function vibrantHexColor() {
  const h = Math.floor(Math.random() * 300);      // any hue
  const s = 80 + Math.floor(Math.random() * 25);  // 75–100% saturation
  const l = 50 + Math.floor(Math.random() * 20);  // 30–50% lightness → darker
  return hslToHex(h, s, l);
}

function vibrantHSL() {
  let h;

  while (true) {
    const candidate = Math.floor(Math.random() * 360);

    const good =
      (candidate >= 10 && candidate < 40) ||     // oranges & rusts
      (candidate >= 170 && candidate < 260) ||   // blues & purples (skip greenish 160–170)
      (candidate >= 280 && candidate < 330);     // magentas & pinks

    // Notice the complete removal of all ranges 40°–170° → ALL GREENS ARE GONE

    if (good) {
      h = candidate;
      break;
    }
  }

  const s = 85 + Math.floor(Math.random() * 15);  // 85–100 saturated
  const l = 30 + Math.floor(Math.random() * 15);  // 30–45 darker vibrant

  return { h, s, l };
}

function splitComplementary(hsl) {
  const { h, s, l } = hsl;

  // Split complements are ±150° from the base hue
  const h1 = (h + 150) % 360;
  const h2 = (h + 210) % 360; // 210 = -150 mod 360

  return [
    { h: h1, s, l },
    { h: h2, s, l }
  ];
}

function hslToHex(h, s, l) {
  s /= 100; 
  l /= 100;

  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return (
    "#" +
    Math.round(f(0) * 255).toString(16).padStart(2, "0") +
    Math.round(f(8) * 255).toString(16).padStart(2, "0") +
    Math.round(f(4) * 255).toString(16).padStart(2, "0")
  );
}

function pastelize(hex) {
  const { r, g, b } = hexToRgb(hex);
  const pr = Math.round((r * 0.3) + (255 * 0.7));
  const pg = Math.round((g * 0.3) + (255 * 0.7));
  const pb = Math.round((b * 0.3) + (255 * 0.7));
  return rgbToHex(pr, pg, pb);
}

function pastelizeHSL(hsl) {
  // Increase lightness & reduce saturation for soft pastel
  return {
    h: hsl.h,
    s: Math.round(hsl.s * 0.25),   // reduces saturation → 75% softer
    l: Math.min(90, hsl.l + 35)    // pushes lightness up toward very soft
  };
}

 function generatePalette() {
  const fonts = getAllCSSFontFamilies();
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  // 1. vibrant color for h1 + a
  const base = vibrantHSL();
  const vibrantHex = hslToHex(base.h, base.s, base.l);

  // 2. split complements (HSL)
  const [sc1, sc2] = splitComplementary(base);


  // 2. dramatic tint for background
  const tinted = tintHSL(sc2, 0.85)
  const tintedHex = hslToHex(tinted.h, tinted.s, tinted.l);

  const punch = darkenHSL(sc1, 0.1)
  const punchHex = hslToHex(punch.h, punch.s, punch.l);

  const umph = tintHSL(sc2, 0.75)
  const umphHex = hslToHex(umph.h, umph.s, umph.l)

  const darkened = pastelizeHSL(sc1, sc2)
  const darkHex = hslToHex(darkened.h,darkened.s, darkened.l)


  // Apply vibrant to headers + links
  document.querySelectorAll("h1, h3,#dice, #dice2").forEach(el => {
    el.style.fontFamily = randomFont;
  });

   document.querySelectorAll("h1, a, #toggle, #regen").forEach(el => {
    el.style.color = vibrantHex;
  });

  document.querySelectorAll(".color-1","#color1m").forEach(el => {
    el.style.backgroundColor = vibrantHex;
    el.style.border = 0;
  });
  document.querySelectorAll(".color-2","#color2m").forEach(el => {
    el.style.backgroundColor = darkHex;
    el.style.border = 0;
  });
  document.querySelectorAll(".color-3","#color3m").forEach(el => {
    el.style.backgroundColor = punchHex;
    el.style.border = 0;
  });

  document.querySelectorAll("#cb").forEach(el => {
    el.style.color = punchHex;
  });
  
 document.querySelectorAll("hr").forEach(el => {
    el.style.borderTopColor = punchHex;});
document.querySelectorAll(".panel", ).forEach(el => {
    el.style.borderLeftColor = punchHex;});
  // Apply tinted pastel to background
  document.querySelectorAll("#mobc").forEach(el => {
    el.style.backgroundColor = tintedHex,
    el.style.borderBottomColor = punchHex;});
  document.body.style.backgroundColor = tintedHex;
};


$("#regen, #regen2").click(function(event){
    event.preventDefault();
    generatePalette();
});