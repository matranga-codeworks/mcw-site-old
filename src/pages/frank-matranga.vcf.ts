import type { APIRoute } from "astro";

import fs from "fs/promises";

import {
  CONTACT_EMAIL,
  COMPANY_LEGAL_NAME,
  CONTACT_PHONE,
} from "@lib/company";

const headshotBase64 = await fs.readFile(
  "./src/assets/frank_headshot_base64.txt",
  "utf-8"
);

export const GET: APIRoute = () => {
  return new Response(
    `BEGIN:VCARD
VERSION:3.0
PHOTO;TYPE=JPEG;ENCODING=b:${headshotBase64}
FN:Frank Matranga
N:Matranga;Frank;;;
ORG:${COMPANY_LEGAL_NAME}
TITLE:Owner & Software Engineer
TEL;TYPE=work,voice:${CONTACT_PHONE}
EMAIL;TYPE=work:${CONTACT_EMAIL}
URL:https://matrangacodeworks.com
NOTE:Custom software solutions for local nonprofits and small businesses.
X-SOCIALPROFILE;type=linkedin:https://www.linkedin.com/in/frank-matranga/
END:VCARD
`,
    {
      headers: {
        "Content-Type": "text/vcard",
        "Content-Disposition": 'attachment; filename="frank-matranga.vcf"',
      },
    }
  );
};
