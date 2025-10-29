# HOW TO UPDATE CONTACT SECTION & SOCIAL LINKS

## WhatsApp Integration

The contact form is already set up to send messages via WhatsApp automatically!

### How It Works
1. User fills in their name, selects a service, and types their message
2. When they click "Send via WhatsApp", it automatically:
   - Formats the message with their details
   - Opens WhatsApp Web/App
   - Pre-fills the message
   - Ready to send to you!

### WhatsApp Number (Already Set)
- **Current Number**: +91 8590297701
- **To Change**: Edit `script.js` around line 160 and look for `918590297701`

```javascript
const whatsappURL = `https://wa.me/918590297701?text=${whatsappMessage}`;
```

Just replace `918590297701` with your new number (include country code, no + sign).

---

## Updating Social Media Links

In `index.html`, find the **Contact Section** (around line 434). You'll see 4 social links:

### 1. WhatsApp Link
```html
<a href="https://wa.me/918590297701" target="_blank" class="info-item social-link">
```
**Update**: Change the number in `https://wa.me/918590297701`

---

### 2. Instagram Link
```html
<a href="https://instagram.com/yourusername" target="_blank" class="info-item social-link">
```
**Update**: Replace `yourusername` with your Instagram username
**Example**: `https://instagram.com/souraj.krishna`

---

### 3. Discord Link
```html
<a href="https://discord.com/users/youruserid" target="_blank" class="info-item social-link">
```
**How to Get Your Discord User ID**:
1. Open Discord
2. Go to Settings → Advanced → Enable Developer Mode
3. Right-click your profile → Copy User ID
4. Replace `youruserid` with your copied ID

**Example**: `https://discord.com/users/123456789012345678`

**Alternative**: Use your Discord username URL if you have one:
```html
<a href="https://discord.gg/yourservername" target="_blank">
```

---

### 4. Fiverr Link
```html
<a href="https://fiverr.com/yourusername" target="_blank" class="info-item social-link">
```
**Update**: Replace `yourusername` with your Fiverr username
**Example**: `https://fiverr.com/souraj_editor`

---

## Complete Updated Example

```html
<!-- WhatsApp -->
<a href="https://wa.me/918590297701" target="_blank" class="info-item social-link">
    <span class="gradient-icon-inline"><i class="fab fa-whatsapp"></i></span>
    <div>
        <strong>WhatsApp</strong>
        <p>Chat directly on WhatsApp</p>
    </div>
    <i class="fas fa-arrow-right contact-arrow"></i>
</a>

<!-- Instagram -->
<a href="https://instagram.com/souraj.krishna" target="_blank" class="info-item social-link">
    <span class="gradient-icon-inline"><i class="fab fa-instagram"></i></span>
    <div>
        <strong>Instagram</strong>
        <p>Check out my latest work</p>
    </div>
    <i class="fas fa-arrow-right contact-arrow"></i>
</a>

<!-- Discord -->
<a href="https://discord.com/users/123456789012345678" target="_blank" class="info-item social-link">
    <span class="gradient-icon-inline"><i class="fab fa-discord"></i></span>
    <div>
        <strong>Discord</strong>
        <p>Message me on Discord</p>
    </div>
    <i class="fas fa-arrow-right contact-arrow"></i>
</a>

<!-- Fiverr -->
<a href="https://fiverr.com/souraj_editor" target="_blank" class="info-item social-link">
    <span class="gradient-icon-inline"><i class="fas fa-briefcase"></i></span>
    <div>
        <strong>Fiverr</strong>
        <p>Hire me on Fiverr</p>
    </div>
    <i class="fas fa-arrow-right contact-arrow"></i>
</a>
```

---

## Testing the WhatsApp Form

1. Fill in the form on your website
2. Click "Send via WhatsApp"
3. WhatsApp should open with a pre-filled message like:

```
Hello! My name is John Doe.

Service Interested: Video Editing

Message: I need a promotional video edited for my business.
```

---

## Adding More Social Links

Want to add more platforms? Copy one of the existing social link blocks and update:

```html
<!-- YouTube -->
<a href="https://youtube.com/@yourchannel" target="_blank" class="info-item social-link">
    <span class="gradient-icon-inline"><i class="fab fa-youtube"></i></span>
    <div>
        <strong>YouTube</strong>
        <p>Watch my video portfolio</p>
    </div>
    <i class="fas fa-arrow-right contact-arrow"></i>
</a>
```

### Available Icons
Use Font Awesome icons:
- WhatsApp: `<i class="fab fa-whatsapp"></i>`
- Instagram: `<i class="fab fa-instagram"></i>`
- Discord: `<i class="fab fa-discord"></i>`
- Fiverr: `<i class="fas fa-briefcase"></i>`
- YouTube: `<i class="fab fa-youtube"></i>`
- Twitter/X: `<i class="fab fa-twitter"></i>`
- LinkedIn: `<i class="fab fa-linkedin"></i>`
- TikTok: `<i class="fab fa-tiktok"></i>`
- Email: `<i class="fas fa-envelope"></i>`

---

## Removing Social Links

To remove a social link you don't use:
1. Find the entire `<a href="..." class="info-item social-link">...</a>` block
2. Delete the entire block
3. Save the file

---

## Changing Service Options

To add/remove services in the dropdown:

In `index.html`, find the `<select id="service">` section and add/remove options:

```html
<select id="service" name="service" required>
    <option value="">Select a service...</option>
    <option value="Video Editing">Video Editing</option>
    <option value="Motion Graphics">Motion Graphics</option>
    <option value="Color Grading">Color Grading</option>
    <option value="Your New Service">Your New Service</option> <!-- ADD HERE -->
</select>
```

---

That's everything! Your contact section is now fully customized and working! 📱✨
