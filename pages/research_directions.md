---
layout: page
title: "Informatics IoT Research Programme"
permalink: "/soi_research_programme/"
---

<div style="width:800px"> 
Within the School of Informatics, we have established an IoT Research Programme to coordinate relevant activities. The Programme is led by Paul Patras and Rik Sarkar.
</div>
<br/>

<table width="850px">
<tr>
  <th width="160px">
    Name
  </th>
  <!--<th width="180px">
    Affiliation
  </th>-->
  <th>
    Research Interest
  </th>
</tr>

{% for researcher in site.data.researchers %}
<tr>
  <td> 
    {% if researcher.url %}
      <a href="{{ researcher.url }}"> {{ researcher.name }}</a> 
    {% else %}  
      {{ researcher.name }}
    {% endif %}
  </td>
<!--  <td>
    {{ researcher.affiliation }}
  </td> -->
  <td>
    {% if researcher.research %}
      {{ researcher.research }}
    {% endif %}
  </td>
</tr>
{% endfor %}
</table>

