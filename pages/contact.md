---
layout: page
title: "Contact"
teaser: "Get in touch with us? Use the contact form."
permalink: "/contact/"
---
The IoT Research and Innovation Service staff can help you design and implement your project. This includes guidance on writing a Privacy Impact Assessment (for GDPR compliance); selection of IoT devices/sensors; embedded programming; and data modelling and applied data science. 
If you have any questions about the IoT Initiative, have ideas for working with us and our network, or want to find out any further information on the IoT Research and Innovation Service, please use this form for your initial enquiry. 

<form id="contact" action="https://formspree.io/is.helpline@ed.ac.uk"
      method="POST">
    <input type="text" name="name" placeholder="Your name" required>
    <input type="email" name="_replyto" placeholder="Your email address">

	<div class="t10">
    <input type="checkbox" name="newsletter" value="Subscribe"> &nbsp;Would you like to be added to our mailing list?*<br>
	</div>

    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_format" value="plain" style="display:none">
</form>

<div class="t10">
<textarea rows="4" name="comment" form="contact" placeholder="What is your interest in the IoT Initiative? Let us know your questions, comments and ideas here."></textarea>
</div>


<button form="contact" type="submit" value="Send">Submit</button>

{% include alert warning='<div style="font-size:0.8em;">*Please note that by ticking this box you are consenting to our use of your name and email address for information about the IoT Initiative. We will add you to the University of Edinburgh IoT Initiative mailing list and may also contact you about special events we are running. We will not contact you about any other work or use your details for any other purpose. You can withdraw your consent at any time by unsubscribing from the mailing list and/or contacting us directly.</div>' %}
