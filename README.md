# InterviewArena — Your Placement Practice Hub

A static placement-preparation site built with plain HTML, CSS and JavaScript. No backend, no build step, no paid APIs.

## Features

- **Dashboard** with quizzes taken, average score, questions practised, per-category progress bars and recent activity.
- **Aptitude quizzes** (Quantitative, Logical, Verbal, Basic CS) with a countdown timer (45 s per question), Previous/Next, a question palette, bookmarking and automatic submission when time runs out.
- **Results** with score, percentage, correct/incorrect/skipped counts, correct answers, explanations and a filter.
- **Java and Python bank** with sample solutions, explanations, search and a language filter.
- **HR practice** with suggested answer structures and sample answers.
- **Self-Evaluation**: rule-based feedback on length, sentence clarity, filler words and answer structure. **This is not AI analysis**; it only counts words and checks for keywords.
- **Bookmarks** with search and type filter.
- **Persistence** in `localStorage` (stats, attempts, bookmarks, activity, last result) and **Reset** with confirmation.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and views |
| `style.css` | Responsive styling |
| `script.js` | `DATA` (questions), pure logic (`scoreItems`, `evaluate`), then application code |
| `README.md` | This file |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a repository on GitHub and push these four files to the root of the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "InterviewArena"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repo>/`.

All paths are relative, so it works under the repository sub-path.

## Adding questions

Edit the `DATA` object at the top of `script.js`. Each aptitude question needs a unique `id`, a `cat` key from `DATA.categories`, `o` (options), `a` (zero-based index of the correct option) and `e` (explanation). Keep ids unique: bookmarks and results refer to them.

## Notes and limitations

- Progress is stored per browser; clearing site data or using private mode removes it.
- A quiz in progress is held in memory and is not restored after a page reload. Completed results are saved.
- Unanswered questions count as incorrect in the saved category statistics.
- Question banks are intentionally small starter sets.
