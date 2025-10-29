# HOW TO ADD COVER IMAGES TO PROJECTS

## Overview
You can now add cover images/thumbnails to your projects for better visual presentation!

## Adding Cover Images

### Step 1: Prepare Your Cover Images
1. Create cover images for your projects (recommended size: 800x500px or 16:9 ratio)
2. Save them in the `images` folder
3. Name them clearly (e.g., `project1-cover.jpg`, `video-edit-cover.png`)

### Step 2: Add Cover Image in HTML

In `index.html`, find your project card and **uncomment** the cover image line:

```html
<div class="project-image">
    <!-- UNCOMMENT THIS LINE and add your image path -->
    <img src="images/project1-cover.jpg" alt="Project Cover" class="project-cover-img">
    
    <!-- COMMENT OUT OR DELETE the placeholder if using cover image -->
    <!-- <div class="project-placeholder" style="background: linear-gradient(135deg, #d17842 0%, #8b6f47 100%);">
        <i class="fas fa-film"></i>
    </div> -->
</div>
```

### Step 3: Add Cover Image in JavaScript

In `script.js`, add the `coverImage` property to your project data:

```javascript
1: {
    title: "Your Project",
    description: "...",
    duration: "...",
    date: "...",
    client: "...",
    tags: ["..."],
    url: "https://your-url.com",
    coverImage: "images/project1-cover.jpg" // Add this line
}
```

## Complete Example

### HTML (index.html):
```html
<div class="project-card" data-project="1" data-type="video">
    <div class="project-image">
        <!-- Use cover image -->
        <img src="images/brand-commercial-cover.jpg" alt="Brand Commercial Cover" class="project-cover-img">
    </div>
    <div class="project-content">
        <h3 class="project-title">Brand Commercial 2024</h3>
        <p class="project-description">A cinematic commercial...</p>
        <div class="project-tags">
            <span class="project-tag">Premiere Pro</span>
            <span class="project-tag">After Effects</span>
        </div>
        <div class="project-buttons">
            <button class="details-btn" onclick="openProjectModal(1)">
                <i class="fas fa-info-circle"></i> Details
            </button>
            <a href="https://drive.google.com/your-link" target="_blank" class="view-project-btn">
                <i class="fas fa-external-link-alt"></i> View Project
            </a>
        </div>
    </div>
</div>
```

### JavaScript (script.js):
```javascript
1: {
    title: "Brand Commercial 2024",
    description: "A high-end 60-second commercial for a luxury fashion brand...",
    duration: "60 seconds",
    date: "January 2024",
    client: "Luxury Fashion Co.",
    tags: ["Premiere Pro", "After Effects", "Color Grade"],
    url: "https://drive.google.com/your-video-link",
    coverImage: "images/brand-commercial-cover.jpg"
}
```

## Cover Image Options

### Option 1: With Cover Image
- Shows your actual project thumbnail
- More professional and engaging
- Better visual representation

### Option 2: Without Cover Image (Default)
- Shows gradient background with icon
- Good for projects without screenshots
- Still looks clean and professional

## Tips for Cover Images

1. **Video Projects**: Use a frame from the video or create a custom thumbnail
2. **Web Projects**: Take a screenshot of the website homepage
3. **Discord Bots**: Create a banner with bot features or logo
4. **Motion Graphics**: Use a key frame or poster frame

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: 800x500px (or any 16:9 ratio)
- **Quality**: High quality but compressed (under 500KB)
- **Content**: Clear, professional, representative of the project

## Where Cover Images Appear

1. **Project Cards**: Main project grid on homepage
2. **Modal Preview**: Large preview in project details popup
3. **Both are clickable**: Clicking opens the project URL

## Removing Cover Images

To go back to gradient placeholders:

1. **In HTML**: Comment out the `<img>` tag and uncomment the `<div class="project-placeholder">`
2. **In JavaScript**: Remove or comment out the `coverImage: "..."` line

That's it! Your projects will now have beautiful cover images! 🎨✨
