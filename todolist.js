@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap");
/* Base */
:root {
  --clr-primary: #fe5722;
  --clr-secondary: #272d36;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #fff;
  color: var(--clr-secondary);
  overflow-x: hidden;
}

.section {
  width: 100%;
  padding: 40px 0;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  padding: 0 30px;
}

.primary {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 20px;
}

.secondary {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
}

.tertiary {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
}

.btn {
  padding: 14px 20px;
  background: var(--clr-primary);
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  font-size: 22px;
  display: inline-block;
  margin: 20px 0;
}

/* End Base */

/* Menu */
nav {
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff5f2;
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.22);
  z-index: 22;
}

label.logo {
  font-size: 35px;
  line-height: 80px;
  padding: 0 30px;
  font-weight: 700;
}

nav ul {
  float: right;
  margin-right: 20px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

nav ul li a {
  font-size: 18px;
  padding: 7px 13px;
  text-decoration: none;
  color: var(--clr-secondary);
}

.menu a.active,
.menu a:hover {
  border-bottom: 2px solid var(--clr-primary);
  transition: 0.3s;
}

.checkbtn {
  font-size: 30px;
  color: #fff;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}
/* End Menu */

/* Hero Section */
#hero-section {
  background: #fff5f2;
  margin-top: 60px;
}

.text,
.visual {
  width: 50%;
}

.text {
  margin: 0 20px;
}

.visual img {
  width: 80%;
  height: auto;
  display: block;
}

#hero-section .text {
  margin-left: 30px;
}

#hero-section .visual img {
  margin-left: auto;
}
/* End Hero Section */

/* How It Works */
#how-it-works {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.box {
  border: 1px solid #b2b2b2;
  padding: 25px 5px;
  margin: 0 10px;
  border-radius: 8px;
  font-size: 18px;
  transition: 0.3s ease;
  cursor: pointer;
}

.box ion-icon {
  font-size: 35px;
  color: var(--clr-primary);
  margin: 15px 0;
}

.box.active,
.box:hover {
  color: #fff;
  border-color: var(--clr-primary);
  background: var(--clr-primary);
}

.box.active ion-icon,
.box:hover ion-icon {
  color: #fff;
}
/* End How It Works */

/* About */
#about .visual img,
#app .visual img {
  margin-right: auto;
}
/* End About */

/* Restaurant Menu */
.category {
  list-style: none;
  text-align: center;
  margin: 20px 0 40px 0;
}

.category li {
  display: inline-block;
  margin: 0 15px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}

.category li.active {
  color: var(--clr-primary);
}

.restaurant-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.menu-item {
  width: 260px;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
}

.menu-item img {
  width: 100%;
}

.order {
  justify-content: space-between;
}

.btn-menu {
  padding: 6px 10px;
  font-size: 16px;
  text-align: center;
  background: #fff;
  border: 1px solid var(--clr-primary);
  color: var(--clr-primary);
}

.title {
  font-size: 18px;
  font-weight: 300;
  margin: 8px 0;
}

.location {
  font-size: 18px;
  font-weight: 500;
}
/* End Restaurant Menu */

/* Testimonial */
#testimonial .visual img {
  margin-left: auto;
}

.user {
  margin-top: 30px;
  justify-content: start;
}

.user img {
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
/* End Testimonial */



/* End FAQ */

/* App */
#page {
  text-align: center;
}

.page_download {
  background: #000;
  margin: 0 10px;
  padding: 4px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
}



  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 80px;
    left: -100%;
    top: 80px;
    transition: all 0.5s;
    text-align: center;
    background: #fff5f2;
  }

  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }

  nav ul li a {
    font-size: 20px;
  }

  .menu a:hover,
  .menu a.active {
    background: none;
    color: var(--clr-primary);
  }

  #check:checked ~ ul {
    left: 0;
  }

  #hero-section {
    margin-top: 80px;
  }

  #hero-section .text {
    margin-left: auto;
  }

  .flex {
    flex-direction: column;
  }

  .visual,
  .text {
    width: 70%;
    margin: 15px auto;
    text-align: center;
  }

  .download,
  .user {
    flex-direction: row;
  }

  .user {
    justify-content: center;
  }

  .visual img {
    margin: 0 auto;
  }

  .box {
    margin: 15px 0;
  }

  .restaurant-menu {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .faq,
  .menu-item {
    width: 80%;
  }

  .primary {
    font-size: 56px;
  }

  .secondary {
    font-size: 40px;
  }

  .tertiary {
    font-size: 20px;
  }

  .footer-about {
    width: 100%;
    text-align: center;
  }

  .quick-links,
  .get-in-touch,
  .footer-category {
    display: none;
  }
}

@media (max-width: 680px) {
  .container {
    padding: 0 10px;
  }

  .text,
  .visual {
    width: 90%;
  }

  .restaurant-menu {
    grid-template-columns: 1fr;
  }



  .primary {
    font-size: 48px;
  }

  .secondary {
    font-size: 32px;
  }

  .tertiary {
    font-size: 17px;
  }
}
.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}





        