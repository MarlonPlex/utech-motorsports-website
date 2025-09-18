# UTech Motosports' Website Roadmap and Documentation
## Current State  - v0.2: https://utech-motorsports.pages.dev/
### HTML AND CSS Structure
- The HTML structue and the resulting CSS follows the Body-Elemen-Modifier (BEM) Syntax. 
- If you are unfamiliar with this syntax or want to see the justification in using it, this article explains it nicely: https://css-tricks.com/bem-101/
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

- [x] Animations to be added to hero banner text. Additionally for the scrolling animation when footer links are clicked. (View timeline animations were to be added to section h1's, appropriate section elements (car department tiles, sponsor logos etc.), but the animation-timeline property is not baseline accross popular browsers yet and avoiding a js implmentation of this for simplicity).

- [x] Credits page with attribution of CC0 icons used as well as any other attribution required to be made. When this is done link to this page in footer using the credits text link (which is currently commented out in index.html).

### v2.0
- [ ] Re-factor Navigiation bar into a web component.

- [ ] Sponsors pages. 
    - [ ] Showing all sponsors and how interested parties can become sponsors and why.
    - [ ] Update navbar; add "sponsors" item with drop-down style UI where dorp-down items link to relevant pages.
    - [ ] Sponsor logos link to their website/or socials.

- [ ] Dedicated Car department pages 
    - [ ] Department Tiles to be linked to dedicated pages for each department, which detail relevant information. Be sure to bring back .click-instructions class when this is done. Currently its display is set to none in index.css.
    - [ ] Update navbar "Departments" item from link to drop-down UI, where dop-down items link to each of these pages.

- [ ] Dedicated team page.
    - [ ] View All button in team members section should be brought back when dedicated page with all team members is created. This element is also set to `display: none` in index.css currently.
    - [ ] Update navbar with "team" item. Use drop-down UI with relevant links.    

- [ ] Join Team Section on home page
    - [ ] Short line on become a member of UMC and why. 
    - [ ] Button that links google form to become member
    - [ ] Button that links to page with open exec positions
        - [ ] Each position has links to form for that position 

### v3.0 (Specs ongoing, will be split into more versions)
- [ ] History Section. Future/past vehicles, Awards, Galleries, Competitions, Events as articles/dedicated pages.


