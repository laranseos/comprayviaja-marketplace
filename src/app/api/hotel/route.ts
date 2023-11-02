
import jsonData from "./db.json";

export async function GET(request: Request) {
  const data = JSON.stringify(jsonData);
  const headers = { "Content-Type": "application/json" };

  return new Response(data, { headers });
}
