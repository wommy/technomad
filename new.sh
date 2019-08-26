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