---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: banner.jpg
widget1:
  title: "What is IoT?"
# url: ''
# image: ''
  text: 'The Internet of Things (IoT) covers a wide spectrum of application, including the detailed real-time sensing of our environment and the embedding of connected intelligence into everyday objects.'
widget2:
  title: "What are we offering?"
#  url: ''
# image: ''
  text: 'The University’s IoT Initiative is establishing an IoT Research and Innovation Service, initially using LoRaWAN technology, to help you easily run your IoT project.'
widget3:
  title: "Who is it for?"
#  url: ''
#  image: ''
  text: 'The IoT Research and Innovation Service is a shared resource, open to a wide range of innovation partners and available to support research and teaching within the University.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
<!-- callforaction:
  url: https://tinyletter.com/feeling-responsive
  text: Inform me about new updates and features ›
  style: alert-->
permalink: /index.html 
---
<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
