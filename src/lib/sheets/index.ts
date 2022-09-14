import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(
  "1cHmwZjnHtQJekXFP07W6Pa9Q5BUECkMGt3CFwDlF-Lg"
);

export async function getSportsEventsSchedule() {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const serviceAccountPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (
    serviceAccountEmail === undefined ||
    serviceAccountEmail.length === 0 ||
    serviceAccountPrivateKey === undefined ||
    serviceAccountPrivateKey.length === 0
  ) {
    throw new Error("No Sheets Api Key");
  }

  await doc.useServiceAccountAuth({
    client_email: serviceAccountEmail,
    private_key: serviceAccountPrivateKey,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows.map((row) => {
    return {
      name: row.name,
      type: row.type,
      confirmed_date: row.confirmed_date,
      surface_type: row.surface_type,
      city_name: row.city_name,
      state: row.state,
      country: row.country,
      distances: row.distances.split(","),
    };
  });
}
