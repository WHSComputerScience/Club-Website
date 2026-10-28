// literally pasted from the old contact.html page
const navbarString = `
<div class="nav">
    <a href="index.html"><button>Home</button></a>
    <a href="about-us.html"><button>About Us</button></a>
    <a href="projects.html"><button>Projects</button></a>
    <a href="Contact.html"><button>Contact</button></a>
    <h1 style="color: azure; padding-right:25px;">Computer Science Club</h1>
</div>
`;
// Create a new DOMParser
const parser = new DOMParser();

// Parse the element string
const navbar = parser.parseFromString(navbarString, 'text/html').body.firstChild;

// inject the navbar
document.documentElement.insertAdjacentElement('afterbegin', navbar);