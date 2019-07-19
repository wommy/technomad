---
layout: post
title: "new.sh"
date: 2019-07-19 17:47:54 -0400
---

i just finished `new.sh`

{% highlight bash %}
#!/bin/bash
# new jekyll blogpost v0.1.0

# ask user for title
read -p 'title?: ' title

# create title_long variable for easier repitition
title_long='_posts/'$(date +%F)'-'$title'.md'

# create post
touch $title_long

# add front_matter to post
echo '---' >> $title_long
echo 'layout: post' >> $title_long
echo 'title: "'$title'"' >> $title_long
echo 'date: '$(date "+%F %T %z") >> $title_long
echo '---' >> $title_long
{% endhighlight %}

## new TODOs
- [ ] how i set up jekyll & netlify
- [ ] my editor and computer set up
