export default function handler(req, res) {
  res.status(200).json({ name: "This is Tom's most recent blog" });
}
