# HOW TO ADD MORE PROJECTS TO YOUR PORTFOLIO

## Step 1: Add Project Card in HTML (index.html)

Find the section marked `<!-- PROJECT CARD TEMPLATE -->` in the Projects Section and copy this template:

```html
<!-- Copy from here -->
<div class="project-card" data-project="5" data-type="video">
    <div class="project-image">
        <div class="project-placeholder" style="background: linear-gradient(135deg, #d17842 0%, #8b6f47 100%);">
            <i class="fas fa-film"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description goes here.</p>
        <div class="project-tags">
            <span class="project-tag">Tag 1</span>
            <span class="project-tag">Tag 2</span>
            <span class="project-tag">Tag 3</span>
        </div>
        <div class="project-buttons">
            <button class="details-btn" onclick="openProjectModal(5)">
                <i class="fas fa-info-circle"></i> Details
            </button>
            <a href="YOUR_URL_HERE" target="_blank" class="view-project-btn">
                <i class="fas fa-external-link-alt"></i> View Project
            </a>
        </div>
    </div>
</div>
<!-- Copy to here -->
```

### Customize:
1. Change `data-project="5"` to next number (5, 6, 7, etc.)
2. Change `data-type` to: "video", "web", or "discord"
3. Update the gradient colors (optional)
4. Change the icon (fas fa-film, fas fa-laptop-code, fab fa-discord, etc.)
5. Update title, description, and tags
6. Change `openProjectModal(5)` to match your project number
7. Replace `YOUR_URL_HERE` with your actual project URL

## Step 2: Add Project Data in JavaScript (script.js)

Find the `projectsData` object and add a new entry:

```javascript
5: {
    title: "Your Project Title",
    description: "Detailed description of your project. Include what you did, tools used, and results achieved.",
    duration: "Duration or size info",
    date: "Month Year",
    client: "Client Name or Project Type",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    url: "https://your-project-url.com"
}
```

## Project Types & URLs:

### Video Editing / Motion Graphics:
- Use Google Drive link: `https://drive.google.com/file/d/...`
- Or YouTube link: `https://youtube.com/watch?v=...`
- Icon: `<i class="fas fa-film"></i>` or `<i class="fas fa-video"></i>`

### Web Design:
- Use live website URL: `https://yourwebsite.com`
- Or GitHub Pages: `https://username.github.io/project`
- Icon: `<i class="fas fa-laptop-code"></i>` or `<i class="fas fa-globe"></i>`

### Discord Bot:
- Use GitHub repo: `https://github.com/username/repo`
- Or bot invite link: `https://discord.com/oauth2/authorize?client_id=...`
- Icon: `<i class="fab fa-discord"></i>`

## Gradient Color Options (for project-placeholder):

```css
/* Orange/Brown (Video) */
background: linear-gradient(135deg, #d17842 0%, #8b6f47 100%);

/* Light Orange (Web) */
background: linear-gradient(135deg, #e89b6d 0%, #d17842 100%);

/* Dark Brown (Discord) */
background: linear-gradient(135deg, #8b6f47 0%, #5d4e37 100%);

/* Tan/Beige (Other) */
background: linear-gradient(135deg, #c4a574 0%, #8b6f47 100%);
```

## Icon Options:

Video: fas fa-film, fas fa-video, fas fa-play-circle
Web: fas fa-laptop-code, fas fa-globe, fas fa-code
Discord: fab fa-discord
Motion Graphics: fas fa-magic, fas fa-wand-magic-sparkles
Photography: fas fa-camera

## Example - Adding Project #5:

### HTML:
```html
<div class="project-card" data-project="5" data-type="video">
    <div class="project-image">
        <div class="project-placeholder" style="background: linear-gradient(135deg, #d17842 0%, #8b6f47 100%);">
            <i class="fas fa-video"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Tech Review Video</h3>
        <p class="project-description">Professional tech review with smooth b-roll and engaging graphics.</p>
        <div class="project-tags">
            <span class="project-tag">Premiere Pro</span>
            <span class="project-tag">Graphics</span>
            <span class="project-tag">YouTube</span>
        </div>
        <div class="project-buttons">
            <button class="details-btn" onclick="openProjectModal(5)">
                <i class="fas fa-info-circle"></i> Details
            </button>
            <a href="https://youtube.com/watch?v=example" target="_blank" class="view-project-btn">
                <i class="fas fa-external-link-alt"></i> View Project
            </a>
        </div>
    </div>
</div>
```

### JavaScript:
```javascript
5: {
    title: "Tech Review Video",
    description: "A comprehensive tech review video featuring smooth transitions, engaging b-roll footage, and professional graphics. Created for a YouTube channel with 100K+ subscribers.",
    duration: "12 minutes",
    date: "May 2024",
    client: "Tech YouTube Channel",
    tags: ["Premiere Pro", "Graphics", "YouTube", "B-Roll", "Review"],
    url: "https://youtube.com/watch?v=example"
}
```

That's it! Your new project will appear on the website with working links.
