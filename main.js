let infoBanner =  '<table>'+
'                <tr>'+
'                    <td><h2 class="logo-text">Sunnyside</h2></td>'+
'                    <td align="right">'+
'                        <nav>'+
'                            <ul>'+
'                                <li><a href="#">About</a></li>'+
'                                <li><a href="#">Services</a></li>'+
'                                <li><a href="#">Projects</a></li>'+
'                                <li><a href="#" class="active">Contact</a></li>'+
'                            </ul>'+
'                        </nav>'+
'                    </td>'+
'                </tr>'+
'                <tr>'+
'                    <td colspan="3" align="center">'+
'                        <h2 class="banner-text">WE ARE CREATIVES</h2>'+
'                        <img src="images/icon-arrow-down.svg" alt="" class="arrow" >'+
'                    </td>'+
'                </tr>'+
'                <tr>'+
'    '+
'                </tr>'+
'            </table>';

document.getElementById("banner").innerHTML = infoBanner;

                /* body section of the webpage */

let main =  '<table class="info-container" >'+
'        <tr>'+
'            <td class="info-text" rowspan="1">'+
'                <h2 style="padding-bottom: 15px;" class="heading-bold">Transform your brand</h2>'+
'                <p>  We are a full-service creative agency specializing in helping brands grow fast. '+
'                    Engage your clients through compelling visuals that do most of the marketing for you.'+
'                </p>'+
''+
'                <p>Learn more</p>'+
'            </td>'+
'            <td style="background-color: hsl(51, 100%, 49%);">'+
'                <img src="images/desktop/image-transform.jpg"  alt="" class="info-image">'+
'            </td>'+
'        </tr>'+
'      </table>'+
''+
'    <table class="info-container">'+
'        <tr>'+
'            <td style="background-color: hsl(7, 99%, 70%);">'+
'                <img src="images/desktop/image-stand-out.jpg" alt="" class="info-image">'+
'            </td>'+
'            <td class="info-text">'+
'                <h2 class="heading-bold">Stand out to the right audience</h2>'+
'                <p>'+
'                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '+
'                </p>'+
'                <p>Learn more</p>'+
'            </td> '+
'        </tr>'+
'   <table>'+
''+
'<table class="info-container">'+
'    <tr>'+
'        <td style="background-image: url(images/desktop/image-graphic-design.jpg);" class="photo-section">'+
'        <div class="photo-text">'+
'            <h2 class="info-heading"> Graphic design</h2>'+
'            <p>'+
'                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'+
'            </p>'+
'        </div>'+
'        </td>'+
''+
'        <td style="background-image: url(images/desktop/image-photography.jpg);" class="photo-section">'+
'            <div class="photo-text">'+
'                <h2 class="info-heading">Photography</h2>'+
'                <p>'+
'                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'+
'                </p>'+
'            </div>'+
'        </td>'+
'    </tr>'+
'</table>';

document.getElementById("section").innerHTML = main;

/* testimonial section of the webpage */

let testimon =  '<table style="padding: 50px 0 80px 0;">'+
'    <tr>'+
'        <td colspan="3" style="text-align: center; padding: 35px 0 45px 0;">'+
'            <h2 class="testimonial-heading">Client testimonials</h2>'+
'        </td>'+
'    </tr>'+
'    <tr>'+
'        <td align="center">'+
'            <img src="images/image-emily.jpg" alt="" class="profile">'+
'            <p class="comment">          '+
'  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'+
'            </p><br><br>'+
'            <p>'+
'            <b class="tag-name">  Emily R.</b> <br><br><span class="position"> Marketing Director</span>  '+
'            </p>'+
'        </td>'+
'        <td align="center">'+
'            <img src="images/image-thomas.jpg" alt="" class="profile">'+
'            <p class="comment">          '+
'                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.          </p>'+
'            </p><br><br>'+
'            <p>'+
'            <b class="tag-name">  Thomas S.</b> <br><br><span class="position"> Chief Operating Officer</span> '+
'            </p>'+
'        </td>'+
'        <td align="center">'+
'            <img src="images/image-jennie.jpg" alt="" class="profile">'+
'            <p class="comment">          '+
'                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'+
'            </p><br><br>'+
'            <p>'+
'            <b class="tag-name">  Jennie F.</b> <br><br><span class="position"> Business Owner</span> '+
'            </p> '+
'        </td>'+
'    </tr>'+
'</table>'+
''+
'<table style="width: 100%; padding: 0; border: 0;">'+
'    <tr>'+
'        <td style="background-image: url(images/desktop/image-gallery-orange.jpg);" class="multi-image"> '+
'        </td>'+
'        <td style="background-image: url(images/desktop/image-gallery-cone.jpg);" class="multi-image">'+
'        </td>'+
'        <td style="background-image: url(images/desktop/image-gallery-sugarcubes.jpg);" class="multi-image">'+
'        </td>'+
'    </tr>'+
'</table>';

document.getElementById("testimonial").innerHTML = testimon;

  /*   footer section of the webpage */

  let footerCont =  '<table style="background-color: hsl(162, 78%, 61%)">'+
'    <tr>'+
'        <td align="center">'+
'            <h2 style="padding: 35px 0 25px 0; color: hsl(167, 40%, 24%);">sunnyside</h2>'+
'        </td>'+
'    </tr>'+
'    <tr>'+
'        <td align="center">'+
'            <ul><a href="#">About</a></ul>'+
'            <ul><a href="#">Services</a></ul>'+
'            <ul><a href="#">Projects</a></ul>'+
'            <ul><a href="#">Contact</a></ul>'+
'        </td>'+
'    </tr>'+
'    <tr>'+
'        <td align="center" style="padding: 10px 0 10px 0;">'+
'            <ul>'+
'                <a href="#" class="fa fa-facebook"></a>'+
'                <a href="#" class="fa fa-instagram"></a>'+
'                <a href="#" class="fa fa-twitter"></a>'+
'                <a href="#" class="fa fa-pinterest"></a> '+
'            </ul>'+
'        </td>'+
'    </tr>'+
'</table>'+
'<div class="attribution">'+
'    Bootcamp 2023 by'+
'    <a href="https://www.mlab.co.za" target="_blank" style="color: hsl(167, 40%, 24%);">CodeTribe</a>.Developed'+
'    by <a href="https://codetribe-portfolio-website.web.app/index.html" target="_blank">Mpho Chuene.</a>'+
'  </div>';

document.getElementById("footer-container").innerHTML = footerCont;