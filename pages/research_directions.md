---
layout: page
title: "Research Directions"
permalink: "/research_directions/"
---

<div style="width:800px"> 
Our research interest in the space of IoT covers a wide range of important research directions.
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

