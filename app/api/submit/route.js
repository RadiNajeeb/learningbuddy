export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, university, subject, studyTime, studyMode, skillLevel } = req.body;

  // Check for missing fields
  let missingFields = [];
  if (!name) missingFields.push("Name");
  if (!email) missingFields.push("Email");
  if (!university) missingFields.push("University");
  if (!subject) missingFields.push("Subject");
  if (!studyTime) missingFields.push("Preferred Study Time");
  if (!studyMode) missingFields.push("Preferred Study Mode");
  if (!skillLevel) missingFields.push("Skill Level");

  if (missingFields.length > 0) {
    return res.status(400).json({ error: `❌ Missing fields: ${missingFields.join(", ")}` });
  }

  console.log("📌 New Submission:", req.body);
  return res.status(200).json({ message: "✅ Form submitted successfully! 🎉" });
}
