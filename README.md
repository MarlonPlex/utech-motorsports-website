# UTech Motosports' Website Roadmap and Documentation
## Current State  - v0.2:
### HTML AND CSS Structure
- The HTML structue and the resulting CSS structure is as follows:
    - The index page is divided into sections with thier appropriate `id` attribute. 
    - The resulting CSS is designed around this, specficailly, the selectors for every item start at these section IDs and uses the child elements tags to select the parent sections' children. 
    - Eg. for a `<p>` tag in a `li` within a `ul` within the section container, the CSS selector is as follows: `#section-name ul li p`.
    - The reason for this design choice is simple, all related selectors are located next to each other in the CSS making it easier to comprehend.
    - However, this of course means that if you add any elements to these section containers in the HTML, there is a chance existing CSS selectors may target it. For example if you added another `<p>` element in the hierarchy from the previous example. Despite this we still went with this design because as the website is upgraded in the future, additions should replace existing layout and not add to it (outside of adding text content to elements, which is obviously not a concern) and you'd modify the CSS accordingly.
- Breakpoints are placed at 720p, 1080p and 1200p. 

### Adding Exec Images
- Exec images should be in a square aspect ratio format.
- When added to the webspage, they should be uploaded to `imgs\team\` directory, then the path added to the `src` attribute of the img element in `.team-members-section`. 

### Sponsor Images
- Currently sponsor images have no standard aspect ratio and are a bit harder to predict. For this reason as we gain sponsors, we'll decide how to format the images for consistency is visual sizing. 

## RoadMap:
### v1.0
- [ ] Page favicon needed.

- [x] Standardize the naming convention within `colors.css`.

- [ ] ~~Linktree~~, LinkedIn, ~~IG~~, TikTok links to be added.

- [x] First iteration of navigation bar to be added. Features only links for now, in future will be dopdown menus when relevant pages added.

- [x] Minimum ARIA and Keyboard-Navigable functionality. (Tab navigation focuses on some unknown element in teams section, leaving this for now as it doesn't hinder overall keyboard navigation.)

- [ ] Animations to be added to hero banner text, section h1's, and appropriate section elements (team members tiles, car department tiles, sponsor logos and other sections' text content). Additionally for the scrolling animation when footer links are clicked.

- [ ] Credits page with attribution of CC0 icons used as well as any other attribution required to be made. When this is done link to this page in footer using the credits text link (which is currently commented out in index.html).

### v2.0
- [ ] Sponsors pages. 
    - [ ] Showing all sponsors and how interested parties can become sponsors and why.
    - [ ] Update navbar; add "sponsors" item with drop-down style UI where dorp-down items link to relevant pages.

- [ ] Dedicated Car department pages 
    - [ ] Department Tiles to be linked to dedicated pages for each department, which detail relevant information. Be sure to bring back .click-instructions class when this is done. Currently its display is set to none in index.css.
    - [ ] Update navbar "Departments" item from link to drop-down UI, where dop-down items link to each of these pages.

- [ ] Dedicated team page.
    - [ ] View All button in team members section should be brought back when dedicated page with all team members is created. This element is also set to `display: none` in index.css currently.
    - [ ] Update navbar with "team" item. Use drop-down UI with relevant links.    

### v3.0

- [ ] History Section. Future/past vehicles, Awards, Galleries, Competitions, Events as articles/dedicated pages.

- [ ] Section to become a member of UMC and why. 

