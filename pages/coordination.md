---
layout: page
title: "Coordination Group"
permalink: "/coordination/"
---

The Group has the following members:

<ul>
{% for coordinator in site.data.coordinators %}
  <li>
  {% if coordinator.url %}
    <a href="{{ coordinator.url }}"> {{ coordinator.name }}</a> 
  {% else %}  
    {{ coordinator.name }}
  {% endif %}

    &mdash; 
   {% if coordinator.job %}
    {{ coordinator.job }}, 
   {% endif %}
    {{ coordinator.affiliation }}
  </li>
{% endfor %}
</ul>

