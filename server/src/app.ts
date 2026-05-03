import express, {Request, Response} from "express";
import cors from "cors";
const app = express();
const port = 5000

app.use(express.json(), cors({origin: "http://localhost:5173"}));

app.get('/api/concert-entry', (req: Request, res: Response) => {
    res.send({
        headliner: "Wednesday",
        support: ["Gouge Away"],
        date: "03/31/2026",
        setRatings: [10, 8],
        photos: [],
        venue: "Babeville at Ashbury Hall",
        city: "Buffalo, NY",
        tour: "Bleeds Tour",
      });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})