import { GoogleSpreadsheet } from "google-spreadsheet";

import credentials from "../../../credentials.json";

const doc = new GoogleSpreadsheet(
  "1cHmwZjnHtQJekXFP07W6Pa9Q5BUECkMGt3CFwDlF-Lg"
);

export async function getSportsEventsSchedule() {
  try {
    console.info("Getting data from Sheets");
    await doc.useServiceAccountAuth(credentials);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    return rows.map((row) => {
      console.info(row);
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
  } catch (error) {
    console.log(error);
  }
}
