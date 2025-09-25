import type { APIRoute } from "astro";

import {
  CONTACT_EMAIL,
  COMPANY_LEGAL_NAME,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@lib/company";

export const GET: APIRoute = () => {
  return new Response(
    `BEGIN:VCARD
VERSION:3.0
FN:Frank Matranga
N:Matranga;Frank;;;
ORG:${COMPANY_LEGAL_NAME}
TITLE:Owner & Software Engineer
TEL;TYPE=work,voice:${CONTACT_PHONE}
EMAIL;TYPE=work:${CONTACT_EMAIL}
URL:https://matrangacodeworks.com
NOTE:Custom software solutions for local nonprofits and small businesses.
PHOTO;VALUE=URI:https://matrangacodeworks.com/Frank_Headshot.jpg
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
